import DetallesPool from "@/components/DetallesPool";

export default function PoolPage({ id }: { id: string }) {
    console.log("PoolPage ID:", id);
    return (
        <div className="w-full bg-slate-100 h-full flex flex-col justify-center items-center gap-4 p-6">
            <DetallesPool id={id}/>
        </div>
    );
}