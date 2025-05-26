import React from 'react'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import Image from 'next/image'
import './globals.css'
import { Metadata } from 'next'
import cn from 'clsx'

export const metadata: Metadata = {
  description: 'Cifarm is farm thief earn game',
  metadataBase: new URL('https://cifarm.xyz'),
  keywords: [
    'Cifarm',
  ],
  generator: 'Next.js',
  applicationName: 'Cifarm',
  appleWebApp: {
    title: 'Cifarm'
  },
  title: {
    default: 'Cifarm – Cifarm is farm thief earn game',
    template: '%s | Cifarm'
  },
  openGraph: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    url: './',
    siteName: 'Cifarm',
    locale: 'en_US',
    type: 'website'
  },
  other: {
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://cifarm.xyz'
  },
  alternates: {
    canonical: './'
  }
}
 
const banner = (
  <Banner storageKey="2.0-release">
    <a href="https://cifarm.xyz" target="_blank">
      🎉 Cifarm testnet is released. Read more →
    </a>
  </Banner>

)
const navbar = (
  <Navbar
    logo={<div className={
      cn(
        'flex items-center gap-2',
        'hover:transition-all hover:duration-1000 motion-reduce:hover:transition-none',
        '[mask-image:linear-gradient(60deg,#000_25%,rgba(0,0,0,.2)_50%,#000_75%)] [mask-position:0] [mask-size:400%]',
        'hover:[mask-position:100%]'
      )
    }>
      <Image src="/logo.png" alt="Cifarm" width={32} height={32}
        className={'rounded-full'}
      />
    <span className={
        'text-2xl font-bold'
    }>Cifarm</span>
    </div>}

    projectLink='https://github.com/starci-lab'
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Cifarm.</Footer>
 
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/starci-lab/cifarm-docs-ver-2/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
          editLink="Edit this page on GitHub"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}