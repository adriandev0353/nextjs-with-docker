import React, { useRef, type FormEvent } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { type GetStaticPropsContext } from 'next'
import { type ParsedUrlQuery } from 'querystring'
import { useCallRequest } from '../../hooks/useCallRequest'
import { EMethod } from '../../shared-types'

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

      if (response !== undefined) {
        await Router.push('/')
      }
    }
  }

  return (
    <>
      <Head>
        <title>{action === 'signin' ? 'Sign In' : 'Sign Up'}</title>
      </Head>

      <form
        onSubmit={submitHandler}
        className="lg:card"
      >
        <h1>Group Lottery</h1>
        <h4 className="mb-5">{action === 'signin' ? 'Sign In' : 'Sign Up'}</h4>
        <div className="form-field">
          <label
            className="m-3"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="gl-input-field"
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            ref={emailRef}
          />
        </div>

        <div className="form-field">
          <label
            className="m-3"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="gl-input-field"
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            ref={passwordRef}
          />
        </div>
        {errors}
        <div className="m-5">
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            type="submit"
          >
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
        </div>
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
