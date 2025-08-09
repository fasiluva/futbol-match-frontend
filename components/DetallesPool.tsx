export default function DetallesPool({ id }: {id: string }) {
  return (
    <div className="w-full h-full bg-slate-100 border-2 border-slate-400 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 p-6">
      <h1 className="text-2xl text-stone-900  font-bold">Detalles del Pool #{id}</h1>
      <p className="text-gray-600">Aquí van los detalles del pool con ID {id}.</p>
      {/* Aquí puedes agregar más contenido o lógica específica del pool */}
    </div>
  );
}
