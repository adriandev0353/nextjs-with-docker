import { type AppInitialProps, type AppContext, type AppProps } from 'next/app'
import { log } from '@sweez/libs'
import { buildClient } from '../apiHelpers/build-client'
import { Header } from '../components/Header'
import { type ICurrentUserProps } from '../shared-types'
// styles
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/app.css'

const AppComponent = ({
  Component,
  pageProps,
  currentUser
}: AppProps & ICurrentUserProps) => (
  <div>
    <Header currentUser={currentUser} />
    <Component {...pageProps} />
  </div>
)

AppComponent.getInitialProps = async (
  appContext: AppContext
): Promise<AppInitialProps & ICurrentUserProps> => {
  const client = buildClient(appContext.ctx)
  let data = { message: '' }
  let pageProps = {}

  try {
    // will not build with out this catch due to SSG what happens at build time
    const response = await client.get('/api/users/currentuser')

    data = response.data
  } catch (error) {
    log(
      'AT current time you can not run this is local dev without being in kubernetes'
    )
    data = {
      message:
        'current user is local dev. NOT meant to be used in the local dev env.'
    }
  }

  if (appContext.Component.getInitialProps != null) {
    /* comes from indexcomponent get initial props
      this line is need becuase when using app to getInitialProps. Pages that
      implement getInitalprops wont be called. So we call it with the below line
    */
    pageProps = await appContext.Component.getInitialProps(appContext.ctx)
  }

  return {
    pageProps,
    currentUser: data.message || null
  }
}

export default AppComponent
