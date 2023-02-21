import Head from 'next/head'
import { type AxiosResponse } from 'axios'
import { type NextPageContext } from 'next'
import { buildClient } from '../apiHelpers/build-client'

function Home() {
  return (
    <div className='page-container'>
      <Head>
        <title>Group Lottery</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main className="flex-1 flex flex-col">
        <div className="h-1/8 border-4 bg-secondary border-secondary-accent border-t-0">
          <h1>Group Lottery</h1>
          <h4>
            <i>luck and fun is in the group</i>
          </h4>
        </div>

        <div className="flex-1 flex text-center justify-center">
          <div className='flex flex-col m-10'>
            <i className='block'>This will be home screen when you are not logged in</i>
            <i className='block'>However when you are logged in it will be the groups page as the home page</i>
          </div>
        </div>
      </main>
    </div>
  )
}

Home.getInitialProps = async (ctx: NextPageContext) => {
  const client = buildClient(ctx)
  const { data }: AxiosResponse<{ message: string }> = await client.get(
    '/api/users/currentuser'
  )

  // redirect to groups page if user is logged in
  if (data.message) {
    ctx.res?.writeHead(302, {
      Location: '/groups',
    })
    ctx.res?.end()
  }
  
  return { currentUser: data.message || null }
}

export default Home
