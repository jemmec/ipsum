import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Index.module.css'

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
      <main className={styles.main}>
        
      </main>
    </>
  )
}


export function Ipsum({
  type
}: {
  type: 'line' | 'sentence' | 'paragraph'
}
) {
  return (
    <>
      <div>

      </div>
    </>
  )
}
