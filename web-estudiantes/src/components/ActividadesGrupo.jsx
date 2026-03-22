import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, Code } from 'lucide-react';

export default function ActividadesGrupo() {
  const { id_grupo } = useParams();
  const navigate = useNavigate();
  const [actividades, setActividades] = useState({});
  const ruta_base = import.meta.env.BASE_URL;

  const nombres_grupos = { MecIng: 'Física Mecánica Ing', FisQF: 'Física General QF', Campos: 'Física De Campos', Ondas: 'Física de Ondas' };
  const info_act = {
    domohierro2025: { titulo: "Domo de Hierro 2025", desc: "Simulación 2D de intercepción de misiles con cinemática y programación IA." },
    domohierro2026: { titulo: "Domo de Hierro 2026", desc: "Evolución del proyecto exigiendo calidad científica con LaTeX y modelado estocástico." },
    difraccion: { titulo: "Difracción Óptica", desc: "Modelado interactivo de fenómenos ópticos y diseño de aplicaciones tecnológicas." },
    PitchElevator: { titulo: "Pitch Elevator", desc: "Ejercicio de comunicación integrando física e historia para vender una innovación." }
  };

  useEffect(() => {
    fetch(`${ruta_base}trabajos/data.json`)
      .then(res => res.json())
      .then(data => setActividades(data[id_grupo] || {}))
      .catch(err => console.error(err));
  }, [id_grupo, ruta_base]);

  const llaves = Object.keys(actividades);

  return (
    <div className="mt-8">
      <button onClick={() => navigate('/grupos')} className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold">
        <ArrowLeft size={20} /> Volver a grupos
      </button>
      <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-2">{nombres_grupos[id_grupo] || id_grupo} - Actividades</h2>
      
      {llaves.length === 0 ? <p className="text-slate-500">Aún no hay actividades publicadas para este grupo.</p> : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {llaves.map(act => {
            const dataAct = actividades[act];
            const info = info_act[act] || { titulo: act, desc: "Actividad en desarrollo." };
            return (
              <div key={act} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{info.titulo}</h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">{info.desc}</p>
                </div>
                <div className="flex flex-wrap gap-3 mt-4">
                  {dataAct.pdf && (
                    <a href={`${ruta_base}trabajos/${id_grupo}/${act}/${dataAct.pdf}`} target="_blank" rel="noopener noreferrer" 
                       className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-semibold hover:bg-red-100 transition-colors">
                      <FileText size={18} /> Ver PDF
                    </a>
                  )}
                  {dataAct.htmls && dataAct.htmls.length > 0 && (
                    <button onClick={() => navigate(`/grupos/${id_grupo}/${act}`)} 
                       className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-100 transition-colors">
                      <Code size={18} /> Ver Trabajos
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  );
}
