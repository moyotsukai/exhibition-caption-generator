import Footer from '@/components/common/Footer/Footer'
import Header from '@/components/common/Header'
import Layout from '@/components/common/Layout'
import Seo from '@/components/common/Seo'
import '@/styles/global.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Seo />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  )
}
