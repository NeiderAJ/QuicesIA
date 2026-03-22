import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, FileCode2 } from 'lucide-react';

export default function TrabajosGrupo() {
  const { id_grupo, id_actividad } = useParams();
  const navigate = useNavigate();
  const [trabajos, setTrabajos] = useState([]);
  const ruta_base = import.meta.env.BASE_URL;

  const info_act = { domohierro2025: "Domo de Hierro 2025", domohierro2026: "Domo de Hierro 2026", difraccion: "Difracción Óptica", PitchElevator: "Pitch Elevator" };

  useEffect(() => {
    fetch(`${ruta_base}trabajos/data.json`)
      .then(res => res.json())
      .then(data => {
        if(data[id_grupo] && data[id_grupo][id_actividad]) setTrabajos(data[id_grupo][id_actividad].htmls ||[]);
      })
      .catch(err => console.error(err));
  },[id_grupo, id_actividad, ruta_base]);

  return (
    <div className="mt-8">
      <button onClick={() => navigate(`/grupos/${id_grupo}`)} className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors">
        <ArrowLeft size={20} /> Volver a la actividad
      </button>
      <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-2">Trabajos: {info_act[id_actividad] || id_actividad}</h2>
      {trabajos.length === 0 ? <p className="text-slate-500">No hay HTMLs para esta actividad.</p> : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {trabajos.map((trabajo, idx) => (
            <a key={idx} href={`${ruta_base}trabajos/${id_grupo}/${id_actividad}/htmls/${trabajo}`} target="_blank" rel="noopener noreferrer" 
               className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col items-center gap-3 hover:-translate-y-1">
              <FileCode2 size={40} className="text-orange-500" />
              <span className="text-sm font-medium text-slate-700 text-center break-all line-clamp-2" title={trabajo}>{trabajo}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
