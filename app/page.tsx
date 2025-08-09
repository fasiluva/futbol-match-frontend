// app/login/page.jsx
'use client'; // <-- La directiva para un componente de cliente

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BloquePools from '@/components/BloquePools';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e : any) => {
    e.preventDefault(); // Previene el recargar de la página

    // Aquí llamarías a la ruta API para la autenticación
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      // Si el login es exitoso, redirige al usuario
      router.push('/dashboard');
    } else {
      // Manejar errores (ej. mostrar un mensaje al usuario)
      alert('Credenciales incorrectas');
    }
  };
  
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center gap-6 p-6">
      <h1 className='text-3xl text-stone-800 text-center font-bold'>Sistema de emparejamiento para fútbol</h1>
      <Link href={'pool/create'} className='bg-[#E0E1DD] hover:bg-[#C4C6B8] text-stone-800 transition-all font-bold py-2 px-4 rounded-lg shadow-md hover:cursor-pointer'>
        Creá tu Pool
      </Link>
      <div className='w-[95%]'>
        <BloquePools />
      </div>
    </div>
  );
}
