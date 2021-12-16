import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import '../styles/componentsStyle/Navbar.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
