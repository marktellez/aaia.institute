
import Head from 'next/head'
import { NextSeo } from 'next-seo'

import siteConfig from '@/config/siteConfig'
import Header from '@/components/Header'

export default function Layout({ children, title = '' }) {
  return (
    <>
      <NextSeo
        title={title}
      />
      <Head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main className='container mx-auto my-16'>
        {children}
      </main>
      <footer className="flex items-center w-full  border-t border-gray-200 my-2 p-2">
        <div className='prose'>
          Autonomous Intelligence Research &copy; 2023
        </div>
      </footer>
    </>
  )
}
