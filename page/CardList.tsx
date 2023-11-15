import React from 'react';
import { criteres } from '@/lib/data';
import CritereCard from '@/components/CritereCard';

const CardList = () => {
    return (
        <div className='container py-4 text-center'>
            <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
                {criteres.map((carte, index) => (
                    <CritereCard key={index} {...carte} />
                ))}
            </div>
        </div>
    );
};

export default CardList;