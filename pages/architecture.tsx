import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Head from 'next/head'
import CriteresModel, { Filter, Criteres as CriteresType } from '../src/models/CritereModel'

const Header = dynamic(() => import('../src/components/Header'), { suspense: true })
const Criteres = dynamic(() => import('../src/components/Criteres'), { suspense: true })
const Footer = dynamic(() => import('../src/components/Footer'), { suspense: true })
const Architecture: NextPage<{ criteres: CriteresType[], thematiques: string[] }> = ({ criteres, thematiques }) => {

    return <>
        <Head>
            <title>DESIGN FOR GREEN | Architecture</title>
            <meta name="description" content="Design 4 Green" />
        </Head>
        <Suspense fallback={`Loading...`}>
    <Header updater={(status) => {
      return null
      }} />
      <Criteres thematiques={thematiques} criteres={criteres} />
      <Footer />
    </Suspense>
  </>
}

export default Architecture

export async function getStaticProps() {

  const criteres = CriteresModel.getCriteresWithFilter(Filter.thematique, 'Architecture'),
    thematiques = CriteresModel.getDatasCritereWithFilter(Filter.thematique, 'Architecture')

  return {
    props: {
      criteres,
      thematiques
    }
  }
}
