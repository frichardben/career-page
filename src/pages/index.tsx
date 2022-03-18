import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Banner } from '../components/banner/Banner'
import { Typography } from '../components/typography/Typography'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Career page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <header>
          <Banner
            img="/img/foto-header.png"
            alt="Vagas"
            title="Trabalhe no Elo7"
          />
        </header>
        <div className={styles.container}>
          <Typography variant={'p'} weight={'light'} color={'gray'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            convallis a urna dignissim interdum. Maecenas nec diam sit amet
            tortor porttitor accumsan. Morbi luctus orci eros, a molestie purus
            pharetra a. Morbi commodo feugiat vulputate. Maecenas vel tincidunt
            leo. Donec accumsan, mauris hendrerit sagittis finibus, purus felis
            iaculis ipsum, id maximus nulla nibh ac lectus.
          </Typography>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home