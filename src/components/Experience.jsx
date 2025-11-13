import React from 'react'
import { Briefcase, Building2, CalendarDays, Award } from 'lucide-react'

const ExperienceItem = ({ role, company, period, details }) => (
  <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
    <div className="flex items-center justify-between flex-wrap gap-2">
      <div>
        <h4 className="font-semibold text-slate-900">{role}</h4>
        <p className="text-sm text-slate-600">{company}</p>
      </div>
      <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full flex items-center gap-1"><CalendarDays size={14} /> {period}</span>
    </div>
    <ul className="list-disc pl-5 mt-3 text-sm text-slate-700 space-y-1">
      {details.map((d, i) => <li key={i}>{d}</li>)}
    </ul>
  </div>
)

const CertificateItem = ({ title, issuer, year }) => (
  <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/60">
    <div className="flex items-center gap-3 text-emerald-700"><Award size={18} />
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-xs opacity-80">{issuer} • {year}</p>
      </div>
    </div>
  </div>
)

const Experience = () => {
  const experiences = [
    {
      role: 'Frontend Engineer',
      company: 'Tech Corp',
      period: '2022 - Sekarang',
      details: [
        'Membangun UI modern dengan React + Tailwind',
        'Meningkatkan performa dan aksesibilitas',
        'Kolaborasi lintas tim dengan praktik CI/CD'
      ]
    },
    {
      role: 'Fullstack Developer',
      company: 'Startup Digital',
      period: '2020 - 2022',
      details: [
        'Merancang arsitektur API dengan FastAPI',
        'Integrasi database MongoDB dan PostgreSQL',
        'Menerapkan best practice security & testing'
      ]
    }
  ]

  const certificates = [
    { title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2023' },
    { title: 'Front-End Development Libraries', issuer: 'freeCodeCamp', year: '2022' },
    { title: 'Python for Everybody', issuer: 'Coursera', year: '2021' },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="text-slate-900" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Pengalaman & Sertifikat</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {experiences.map((exp, idx) => (
              <ExperienceItem key={idx} {...exp} />
            ))}
          </div>
          <div className="space-y-3">
            {certificates.map((c, idx) => (
              <CertificateItem key={idx} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
