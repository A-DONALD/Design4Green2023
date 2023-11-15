import React from 'react'
import { criteres } from '@/data/data'
import CritereCard from '@/components/CritereCard'

const CardList = () => {
    return (
        <div id='formation' className='container py-4 text-center'>
            <h1 className="text-4xl py-8 font-bold mb-4">Formations</h1>
            <div className="flex flex-col items-center">
                {criteres.map((cartes, index) => (
                    <CritereCard key={index} {...cartes} />
                ))}
            </div >
        </div>
    )
}

export default CardList