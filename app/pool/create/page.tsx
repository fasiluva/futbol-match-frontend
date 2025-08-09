
import Link from 'next/link';
import PoolForm from '@/components/PoolForm';

export default function CreatePool() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-12 h-screen bg-slate-100">
        <PoolForm/>
        <Link href={'/'} className="bg-[#E0E1DD] hover:bg-[#C4C6B8] text-stone-800 transition-all font-bold py-2 px-4 rounded-lg shadow-md hover:cursor-pointer">
            Volver atrás
        </Link>
    </div>
  );
}
