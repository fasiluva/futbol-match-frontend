// app/login/page.jsx
'use client'; // <-- La directiva para un componente de cliente

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Pool from '@/components/Pool';

export default function BloquePools() {

    const [pools, setPools] = useState([
        { id: 1, name: "Fútbol LCC" },
        { id: 2, name: "Torneo Poli" },
        { id: 3, name: "Loyal liga A" },
        { id: 4, name: "Loyal Liga B" },
        { id: 5, name: "Liga de los Martes" },
        { id: 6, name: "Liga de los Jueves" },
        { id: 7, name: "Liga de los Viernes" },
        { id: 8, name: "Liga de los Sábados" },
    ]); 

    if(pools.length === 0) {
        <div className="w-full h-full bg-slate-100 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 p-6">
            <h1 className="text-2xl font-bold text-gray-600">No hay pools disponibles</h1>
            <p className="text-gray-600">Crea un nuevo pool para empezar a emparejar jugadores.</p>
        </div>
    }
    
    return (
        <div className="w-full max-h-[60vh] overflow-y-auto bg-slate-100 rounded-lg shadow-lg grid grid-cols-2 gap-4 py-6 px-4">
            {pools.map((pool) => (
                <Pool key={pool.id} id={pool.id} name={pool.name} />
            ))}
        </div>
    );
}
