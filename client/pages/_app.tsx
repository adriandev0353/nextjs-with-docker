import { buildClient } from '../apiHelpers/build-client'
import { AppInitialProps } from 'next/app'
import { Header } from '../components/Header'

// styles
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/app.css'

// types
import { AppContext, AppProps } from 'next/app'

export interface ICurrentUserProps {
  currentUser: string | null
}

const AppComponent = ({
  Component,
  pageProps,
  currentUser,
}: AppProps & ICurrentUserProps) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </div>
  )
}

AppComponent.getInitialProps = async (
  appContext: AppContext
): Promise<AppInitialProps & ICurrentUserProps> => {
  const client = buildClient(appContext.ctx)
  const { data } = await client.get('/api/users/currentuser')

  let pageProps = {}
  if (appContext.Component.getInitialProps) {
    /* comes from indexcomponent get initial props
      this line is need becuase when using app to getInitialProps. Pages that
      implement getInitalprops wont be called. So we call it with the below line
    */
    pageProps = await appContext.Component.getInitialProps(appContext.ctx)
  }

  return {
    pageProps,
    currentUser: data.message || null,
  }
}

export default AppComponent
