import {Footer, Navbar, Sidebar, Whatsapp} from '@/components'
import GlobalStyle from '@/styles/globalStyles'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <GlobalStyle/>
    <Navbar/>
    <Sidebar/>
    {/* <Whatsapp/> */}
    <Component {...pageProps} />
    <Footer/>
  </>
}
