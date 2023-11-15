"use client"

import React, { useState, useRef } from 'react';
import useClickOutside from '@/hook/ClickOuside';
import Link from 'next/link';

interface CritereCardProps {
    id: string;
    url: string;
    critere: string;
    thematique: string;
    objectif: string;
    controle: string;
}

const CritereCard: React.FC<CritereCardProps> = ({ id, url, critere, thematique, objectif, controle }) => {

    const [showDetails, setShowDetails] = useState(false);
    const detailsRef = useRef<HTMLDivElement>(null);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    const closeDetails = () => {
        setShowDetails(false);
    };

    useClickOutside(detailsRef, closeDetails);

    return (
        <div id={id} className="relative bg-slate-200 rounded-full p-4 mb-4 max-w-80vw md:max-w-480px mx-auto">
            <div className="flex items-center">
                <div className='ml-4'>
                    <h3 className="text-lg font-bold">{thematique}</h3>
                    <p className='text-sm text-gray-600 mb-2'>{critere}</p>
                    <button
                        className="text-blue-500 hover:underline"
                        onClick={toggleDetails}
                    >
                        Voir plus
                    </button>
                </div>
            </div>

            {showDetails && (
                <div className="fixed top-4 left-0 w-full h-full z-40 flex items-center justify-center">
                    <div ref={detailsRef} className='bg-white p-4 mb-4 mx-2 w-[580px] shadow-md rounded-md cursor-pointer border-4 border-slate-300'>
                        <h3 className="text-gray-600 mb-2">{critere}</h3>
                        <h2 className="text-xl font-bold mb-2">controle</h2>
                        <p className="text-gray-600 mb-2">{controle}</p>
                        <h2 className="text-xl font-bold mb-2">objectif</h2>
                        <p className="text-gray-600 mb-2">{objectif}</p>
                        <Link href={url} className='text-lg border-2 text-slate-800 hover:bg-slate-200 hover:text-white hover:border-slate-500 rounded-lg p-1'>
                            Voir la doc
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CritereCard;
