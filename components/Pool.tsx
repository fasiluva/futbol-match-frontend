type PoolProps = {
  id: number;
  name: string;
};

import Link from 'next/link';

export default function Pool({ id, name }: PoolProps) {
  return (
    <Link href={`/pool/${id}`} className="w-full h-full">
      <div className="w-full h-full bg-slate-100 border-2 border-slate-400 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 p-6">
        <h1 className="text-2xl text-center font-bold text-stone-800">{name}</h1>
        <p className="text-gray-600 text-center">Pool #{id}</p>
      </div>
    </Link>
  );
}
