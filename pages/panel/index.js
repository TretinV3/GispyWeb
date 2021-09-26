import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import Image from 'next/image'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'
import Button from '@mui/material/Button';
import Nav from '../../components/nav'

import LinkIcon from '@mui/icons-material/Link';

export default function Home({ allPostsData }) {
    return (
        <>
            <div className={utilStyles.orangeBanner}>
                <Nav />
                <div className={utilStyles.title20pourcent}>
                    <h1>
                        Vos serveurs
                    </h1>
                    <p>
                        Bienvenue dans la page web de configuration de Gipsy.<br />
                        Séléctionner un serveur pour continuer.
                    </p>
                </div>
            </div>
            <Layout home>
                <Head>
                    <title>{siteTitle}</title>
                </Head>

                <div className={utilStyles.serversList}>
                    <div className={utilStyles.serversBox}>
                        <div className={utilStyles.servers}>
                            <img
                                src="https://cdn.discordapp.com/icons/125723125685026816/15647d238f12bb2697deaca42846dc08.png"
                                height={160}
                                width={160}
                                alt="Gipsy"
                                className={utilStyles.serverImage}
                            />

                            <h2>Gunivers</h2>
                            <p>556 members</p>
                        </div>
                    </div>
                </div>
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
