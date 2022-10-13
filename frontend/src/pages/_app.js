import '../../styles/globals.scss';
// Next.js allows you to import CSS directly in .js files.
// It handles optimization and all the necessary Webpack configuration to make this work.
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { SSRProvider } from 'react-bootstrap'
import { Provider } from 'react-redux'
import store from '../redux/Store'
import 'datatables.net-bs5'
import { useAuth } from '../hooks/auth';
import { useRouter } from 'next/router'
import Login from './login';
import { useEffect } from 'react';
import NextNProgress from "nextjs-progressbar";

// You change this configuration value to false so that the Font Awesome core SVG library
// will not try and insert <style> elements into the <head> of the page.
// Next.js blocks this from happening anyway so you might as well not even try.
// See https://fontawesome.com/v6/docs/web/use-with/react/use-with#next-js
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    router.replace(router.pathname, undefined, { shallow: true })
  }, [user]);


  function AuthLogin() {
    useEffect(() => {
      router.replace('/login', undefined, { shallow: true })
    }, [])
    return <Login />
  }

  return <SSRProvider>
      <NextNProgress 
        color='#0071e2'
      />
      {
        isLoading ? <div className="loader"></div> : 
        pageProps.auth && !user ? (
          <AuthLogin/>
        ) : (
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        )
      }
    </SSRProvider>
}

export default MyApp
