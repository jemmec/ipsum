import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Index.module.css'
import { LengthType, useLorem } from '@/hooks/use-lorem'

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <>
      <Head>
        <title>Ipsum</title>
        <meta name="description" content="Lorem ipsum generator application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.content}>
          <div className={styles.title}>ipsum</div>
          <Ipsum length='word' />
          <Ipsum length='sentence' />
          <Ipsum length='paragraph' />
        </div>
      </main>
    </>
  )
}

export function Ipsum({ length }: { length: LengthType }) {
  const { isFetching, ipsum, get } = useLorem(length);
  return (
    <>
      <div className={styles.item}>
        <div className={`${styles.ipsum} ${styles[length]}`}>
          {isFetching ? 'Fetching...' : ipsum}
        </div>
        <button onClick={get}>Roll</button>
      </div>
    </>
  )
}
