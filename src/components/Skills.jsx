import React from 'react'
import { Code, Boxes, Braces, Rocket, Globe } from 'lucide-react'

const SkillBadge = ({ label }) => (
  <span className="text-sm bg-white/70 backdrop-blur border border-slate-200 text-slate-700 px-3 py-1 rounded-full">
    {label}
  </span>
)

const Skills = () => {
  const languages = ['JavaScript', 'TypeScript', 'Python', 'Go', 'SQL']
  const frameworks = ['React', 'Next.js', 'Node.js', 'Express', 'FastAPI', 'Tailwind CSS']
  const tools = ['Git', 'Docker', 'MongoDB', 'PostgreSQL', 'Vercel', 'AWS']

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)] bg-gradient-to-b from-blue-50/60 to-transparent" />
      <div className="relative container mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-6">
          <Code className="text-blue-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Skills</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4"><Braces size={18} className="text-purple-600" /><h3 className="font-semibold text-slate-800">Languages</h3></div>
            <div className="flex flex-wrap gap-2">
              {languages.map((s) => <SkillBadge key={s} label={s} />)}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4"><Boxes size={18} className="text-blue-600" /><h3 className="font-semibold text-slate-800">Frameworks</h3></div>
            <div className="flex flex-wrap gap-2">
              {frameworks.map((s) => <SkillBadge key={s} label={s} />)}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4"><Globe size={18} className="text-emerald-600" /><h3 className="font-semibold text-slate-800">Tools</h3></div>
            <div className="flex flex-wrap gap-2">
              {tools.map((s) => <SkillBadge key={s} label={s} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
