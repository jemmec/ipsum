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
          <Ipsum length='word' />
          <Ipsum length='sentence' />
          <Ipsum length='paragraph' />
        </div>
      </main>
    </>
  )
}

export function Ipsum({ length }: { length: LengthType }) {
  const { isFetching, ipsum } = useLorem(length);
  if (isFetching) return <div className="fetching">{`fetching...`}</div>;
  return (
    <>
      <div className={`${styles.ipsum} ${styles[length]}`}>
        {ipsum}
      </div>
    </>
  )
}
