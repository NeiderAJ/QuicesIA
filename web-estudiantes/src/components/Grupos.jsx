import { useNavigate } from 'react-router-dom';

export default function Grupos() {
  const nav = useNavigate();
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Selecciona un Grupo</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div onClick={() => nav('/grupos/MecIng')} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border-t-4 border-blue-500 hover:-translate-y-1 flex items-center justify-center">
          <h3 className="text-lg font-bold text-slate-700 text-center">Física Mecánica Ing</h3>
        </div>
        <div onClick={() => nav('/grupos/Ondas')} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border-t-4 border-amber-500 hover:-translate-y-1 flex items-center justify-center">
          <h3 className="text-lg font-bold text-slate-700 text-center">Física de Ondas</h3>
        </div>
        {false && (
          <div onClick={() => nav('/grupos/FisQF')} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border-t-4 border-emerald-500 hover:-translate-y-1 flex items-center justify-center">
            <h3 className="text-lg font-bold text-slate-700 text-center">Física General QF</h3>
          </div>
        )}
        <div onClick={() => nav('/grupos/Campos')} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border-t-4 border-purple-500 hover:-translate-y-1 flex items-center justify-center">
          <h3 className="text-lg font-bold text-slate-700 text-center">Física De Campos</h3>
        </div>
      </div>
    </div>
  );
}
