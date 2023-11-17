import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Head from 'next/head'
import GoodPracticesModel, { Criteres as GoodPracticesType } from '../src/models/CritereModel'

const Application = dynamic(() => import('../src/components/Application'), { suspense: true })
const Home: NextPage<{ criteres: GoodPracticesType[], thematiques: string[] }> = ({ criteres, thematiques }) => {

  return <>
    <Head>
      <title>DESIGN FOR GREEN</title>
      <meta name="description" content="Design 4 Green" />
    </Head>
    <Suspense fallback={`Loading...`}>
      <Application />
    </Suspense>
  </>
}

export default Home

export async function getStaticProps() {

  const criteres = GoodPracticesModel.getCriteres(),
    thematiques = GoodPracticesModel.getThematiques()

  return {
    props: {
      criteres,
      thematiques
    }
  }
}
