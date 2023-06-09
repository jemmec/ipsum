import Head from 'next/head'
import Image from 'next/image'
import { Caveat, Inter } from 'next/font/google'
import styles from '@/styles/Index.module.css'
import { LengthType, useLorem } from '@/hooks/use-lorem'
import { RepoForkedIcon, SyncIcon, ZapIcon } from '@primer/octicons-react'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] });
const caveat = Caveat({ subsets: ['latin'] });

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
          <div className={styles.viewport}>
            <div className={`${styles.title} ${caveat.className}`}>ipsum</div>
            <Ipsum length='word' />
            <Ipsum length='sentence' />
            <Ipsum length='paragraph' />
          </div>
        </div>
      </main>
    </>
  )
}

export function Ipsum({ length }: { length: LengthType }) {
  const { isFetching, ipsum, get } = useLorem(length);
  const [copied, setCopied] = useState<boolean>(false);
  function handleCopy() {
    if (!isFetching && ipsum) {
      setCopied(true);
      navigator.clipboard.writeText(ipsum);
    }
  }
  return (
    <>
      <div className={styles.item}>
        <div className={`${styles.ipsum} ${copied ? styles.animate : ''} ${styles[length]}`} onClick={handleCopy}>
          {isFetching ? 'Fetching...' : ipsum}
        </div>
        <button onClick={() => {
          setCopied(false);
          get();
        }}><SyncIcon size={26} /></button>
      </div>
    </>
  )
}
