export default function PoolForm() {
    return (
        <div className="w-full bg-slate-100 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2z   ">Crear Pool</h1>
        <form className="space-y-4">
            <div>
            <label className="block text-gray-700">Nombre del Pool</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded text-gray-700" placeholder="Ingrese el nombre del pool" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Crear Pool</button>
        </form>
        </div>
    );
    }