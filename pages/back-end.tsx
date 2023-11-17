import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Head from 'next/head'
import GoodPracticesModel, { Filter, Criteres as GoodPracticesType } from '../src/models/CritereModel'

const Header = dynamic(() => import('../src/components/Header'), { suspense: true })
const GoodPractices = dynamic(() => import('../src/components/Criteres'), { suspense: true })
const Footer = dynamic(() => import('../src/components/Footer'), { suspense: true })
const BackEnd: NextPage<{ goodPractices: GoodPracticesType[], recommendations: string[] }> = ({ goodPractices, recommendations }) => {

    return <>
        <Head>
            <title>DESIGN FOR GREEN | Back End</title>
            <meta name="description" content="Design 4 Green" />
        </Head>
        <Suspense fallback={`Loading...`}>
            <Header />
            <GoodPractices recommendations={recommendations} goodPractices={goodPractices} />
            <Footer />
        </Suspense>
    </>
}

export default BackEnd

export async function getStaticProps() {

    const goodPractices = GoodPracticesModel.getCriteresWithFilter(Filter.thematique, 'Backend'),
        recommendations = GoodPracticesModel.getDatasCritereWithFilter(Filter.thematique, 'Backend')

    return {
        props: {
            goodPractices,
            recommendations
        }
    }
}