import React, { useRef } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

// types
import { FormEvent } from 'react'
import { GetStaticPropsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { EMethod , useCallRequest } from '../../hooks/useCallRequest'

interface IParams extends ParsedUrlQuery {
  action: string | undefined
}

interface IAuthenticateProps {
  action: string
}

function Authenticate({ action }: IAuthenticateProps) {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const { errors, doRequest } = useCallRequest({
    url: `/api/users/${action}`,
    method: EMethod.POST,
  })

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault()
    const email = emailRef.current?.value
    const password = passwordRef.current?.value

    if (email && password) {
      const response = await doRequest({ email, password })
      if (response !== undefined) Router.push('/')
    }
  }

  return (
    <>
      <Head>
        <title>{action === 'signin' ? 'Sign In' : 'Sign Up'}</title>
      </Head>

      <form onSubmit={submitHandler}>
        <h1>{action === 'signin' ? 'Sign In' : 'Sign Up'}</h1>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            className='form-control'
            type='email'
            id='email'
            name='email'
            placeholder='Enter email'
            ref={emailRef}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            className='form-control'
            type='password'
            id='password'
            name='password'
            placeholder='Enter password'
            ref={passwordRef}
          />
        </div>
        {errors}
        <button type='submit' className='btn btn-primary mt-2'>
          {action === 'signin' ? 'Sign In' : 'Sign Up'}
        </button>
        <Link
          style={{ marginLeft: '1.5rem' }}
          href={action === 'signin' ? '/auth/signup' : '/auth/signin'}
        >
          {action === 'signin'
            ? 'Not a member? Sign up'
            : 'A member already? Sign in'}
        </Link>
      </form>
    </>
  )
}

export default Authenticate

export async function getStaticPaths() {
  return {
    paths: [{ params: { action: 'signin' } }, { params: { action: 'signup' } }],
    fallback: false,
  }
}

export async function getStaticProps(ctx: GetStaticPropsContext<IParams>) {
  const { action } = ctx.params as IAuthenticateProps

  return {
    props: {
      action,
    },
  }
}
