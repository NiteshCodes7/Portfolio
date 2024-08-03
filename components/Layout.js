import {Sora} from "@next/font/google"
import Nav from "../components/Nav"
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'
import Head from 'next/head';

const sora = Sora({
  subsets : ['latin'],
  variable : '--font-sora',
  weight : ['100', '200', '300', '400', '500', '600', '700', '800']
})

const Layout = ({children}) => {
  return (
    <>
    <Head>
      <link rel="icon" href="/logo.svg" />
      <title>My Portfolio</title>
    </Head>
    <div className={`page bg-cover bg-site text-white bg-no-repeat ${sora.variable} font-sora relative`}>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
    </>
  )
};

export default Layout;
