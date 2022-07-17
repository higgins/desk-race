import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <>
      <Head>
        <title>Treadmill Desk Race</title>
        <meta
          name="description"
          content="Online event where treadmill desk workers walk with each other."
        />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  )
}
