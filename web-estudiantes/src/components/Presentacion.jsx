import { BrainCircuit, Github, FileText } from 'lucide-react';

export default function Presentacion() {
  const ruta_base = import.meta.env.BASE_URL;

  return (
    <div className="bg-white p-10 rounded-2xl shadow-sm mt-8 max-w-4xl mx-auto border-t-4 border-blue-600">
      <div className="text-center mb-10">
        <BrainCircuit className="mx-auto text-blue-600 mb-6" size={60} strokeWidth={1.5} />
        <h1 className="text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">
          Innovación y Evaluación con IA
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Este proyecto educativo integra la Inteligencia Artificial en los procesos de evaluación universitaria. 
          No solo optimiza el aula, sino que impulsa a los estudiantes a dominar las herramientas tecnológicas del futuro.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-slate-50 p-8 rounded-xl border border-slate-100">
        <img 
          src={`${ruta_base}foto.png`} 
          alt="Neider Jiménez" 
          className="w-40 h-40 object-cover rounded-full shadow-md border-4 border-white mx-auto md:mx-0"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Neider Jiménez</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Físico y docente universitario enfocado en la innovación educativa. 
            Creador de este espacio donde la física, la programación y la inteligencia artificial convergen 
            para transformar la enseñanza y preparar a las nuevas generaciones.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="https://neideraj.github.io/" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-semibold hover:bg-blue-200 transition-colors">
              <FileText size={18} /> Currículum Vitae
            </a>
            <a href="https://github.com/neideraj" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-300 transition-colors">
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
