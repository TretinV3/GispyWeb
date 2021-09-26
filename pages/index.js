import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Button from '@mui/material/Button';
import Nav from '../components/nav'

import LinkIcon from '@mui/icons-material/Link';

export default function Home({ allPostsData }) {
  return (
    <>
      <Nav />
      <Layout home>
        <Head>

          <title>{siteTitle}</title>
        </Head>


        <section className={utilStyles.headingMd}>
        <div className={utilStyles.center}>
        <div className={utilStyles.boxs}>
          <div className={utilStyles.box + " " + utilStyles.center}>
            <div className={utilStyles.borderCircle}>
              <Image
                //priority
                src="/images/gipsy.png"
                height={200}
                width={200}
                alt="Gipsy"
                
              />
            </div>
            <h1 className={utilStyles.heading2Xl}>Gipsy,</h1><p className={utilStyles.underTitle}> a multi-functions discord bot</p>
            <br />
            <div className={utilStyles.onLine}>
              <Button variant="contained" color="orange" size="large" className={utilStyles.onLineItem} onClick={() => window.open('/invite', 'Invite the bot in your servers', 'width=500,height=700')}>Invite</Button>
              <Button variant="outlined" color="orange" size="large" className={utilStyles.onLineItem}>Documentation</Button>
            </div>
            <Button variant="outlined" color="orange" size="large" className={utilStyles.onLineItem}><LinkIcon />Page du projet</Button>
          </div>



          <div className={utilStyles.box}>
            <h1>Se connecter au panel</h1>
            <Button variant="contained" color="orange" size="large" className={utilStyles.onLineItem} href="/panel">Se connecter avec Discord</Button>
          </div>
          </div></div>
      </section>
      {/*
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
          </section>*/}
    </Layout>
    </>
  )
}

/*export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}*/
