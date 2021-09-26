import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { theme } from './theme'
const name = '[Your Name]'
export const siteTitle = 'Next.js Sample Website'

import { ThemeProvider } from '@mui/material/styles';


export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
      <link rel="shortcut icon" type="image/jpg" href="/images/gipsy.png"/>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <ThemeProvider theme={theme}>
      <main>{children}</main>
      </ThemeProvider>
    </div>
  )
}
