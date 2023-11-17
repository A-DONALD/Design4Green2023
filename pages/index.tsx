import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Head from 'next/head'
import GoodPracticesModel, { Criteres as GoodPracticesType } from '../src/models/CritereModel'

const Header = dynamic(() => import('../src/components/Header'), { suspense: true })
const Criteres = dynamic(() => import('../src/components/index/Criteres'), { suspense: true })
const Footer = dynamic(() => import('../src/components/Footer'), { suspense: true })
const Home: NextPage<{ criteres: GoodPracticesType[], thematiques: string[] }> = ({ criteres, thematiques }) => {

    return <>
        <Head>
            <title>Equipe 30</title>
            <meta name="description" content="Design 4 Green" />
        </Head>
        <Suspense fallback={`Loading...`}>
            <Header />
            <Criteres criteres={criteres} thematiques={thematiques} />
            <Footer />
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
