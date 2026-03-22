import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import { BookOpen, Users } from 'lucide-react';
import Presentacion from './components/Presentacion';
import Grupos from './components/Grupos';
import ActividadesGrupo from './components/ActividadesGrupo';
import TrabajosGrupo from './components/TrabajosGrupo';

export default function App() {
  const navStyle = ({ isActive }) => 
    `flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors ${isActive ? 'bg-blue-100 text-blue-700' : 'text-slate-600 hover:bg-slate-100'}`;

  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50">
        <nav className="bg-white shadow-sm border-b p-4">
          <div className="max-w-5xl mx-auto flex justify-center gap-6">
            <NavLink to="/" className={navStyle}><BookOpen size={20} /> Presentación</NavLink>
            <NavLink to="/grupos" className={navStyle}><Users size={20} /> Trabajos</NavLink>
          </div>
        </nav>
        <main className="max-w-5xl mx-auto p-6">
          <Routes>
            <Route path="/" element={<Presentacion />} />
            <Route path="/grupos" element={<Grupos />} />
            <Route path="/grupos/:id_grupo" element={<ActividadesGrupo />} />
            <Route path="/grupos/:id_grupo/:id_actividad" element={<TrabajosGrupo />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}
