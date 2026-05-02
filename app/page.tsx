// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { 
  Mail, 
  ExternalLink, 
  Code, 
  Database, 
  Layout, 
  Server,
  GitBranch,     // ใช้แทน Github icon
  Link,
  ChevronRight,
  Star,
  Briefcase,
  GraduationCap,
  MapPin
} from 'lucide-react';

// ข้อมูลโปรเจกต์ (เพิ่มภาพ mockup)
const projects = [
  {
    name: 'E-Commerce App',
    desc: 'ระบบขายสินค้าออนไลน์แบบครบวงจร รองรับการชำระเงินผ่าน Stripe และระบบจัดการสินค้า',
    tech: ['Next.js 14', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://ecommerce-demo.vercel.app',
    featured: true,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Weather Dashboard',
    desc: 'แดชบอร์ดพยากรณ์อากาศแบบ Real-time พร้อมกราฟแนวโน้มและการแจ้งเตือนสภาพอากาศ',
    tech: ['React', 'Tailwind', 'OpenWeather', 'Chart.js'],
    github: 'https://github.com/yourusername/weather',
    demo: 'https://weather-demo.vercel.app',
    featured: false,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'TaskFlow',
    desc: 'แอปจัดการงานแบบ Agile พร้อม Kanban board, task assignment และ real-time update',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket'],
    github: 'https://github.com/yourusername/taskflow',
    demo: 'https://taskflow-demo.vercel.app',
    featured: true,
    gradient: 'from-orange-500 to-red-500',
  },
];

const skills = [
  { name: 'Frontend', icon: Layout, level: 85, items: ['React', 'Next.js', 'Tailwind', 'TypeScript', 'Laravel', 'Bootstrap', 'MUI (Material-UI)'] },
  { name: 'Backend', icon: Server, level: 80, items: ['Node.js', 'MySQL', 'SQLite', 'Nest.js', 'Laravel', 'CodeIgniter'] },
  { name: 'DevOps & Tools', icon: Code, level: 70, items: ['Git', 'GitLab', 'Docker', 'DBeaver'] },
];

const experiences = [
  {
    company: 'บริษัท Treak of the tiger จำกัด',
    position: 'Full Stack Developer',
    period: '2017 - 2020',
    desc: 'พัฒนาและดูแลระบบเว็บไซต์บริษัทด้วย PHP + Bootstrap รวมถึงการจัดการฐานข้อมูล MySQL และ SQLite ',
    projects: [
      { name: 'เว็บไซต์บริษัท', url: 'https://www.track-of-the-tiger.com/' },
      { name: 'เว็บไซต์บริษัทส่วนมูลนิธิ', url: 'https://www.volunteers-without-borders.org/' },
      { name: 'เว็บไซต์บริษัทส่วนที่พักโรงแรม', url: 'https://maekok-river-village-resort.com/' }
    ]
  },
  {
    company: 'บริษัท Trakool จำกัด',
    position: 'Full Stack Developer',
    period: '2020 - 2026',
    desc: 'รับพัฒนาเว็บไซต์ให้กับลูกค้า ดูแลซัพพอร์ตลูกค้าโปรแกรม POS โปรแกรม เช่ารถ ที่เคยได้พัฒนาให้กับลูกค้า กรณีเกิดปัญหา ส่วนมากเป็นโปรแกรมตามความต้องการลูกค้า และโปรเจกต์ใช้ภายในบริษัท ใช้ Codeignator Bootstrap และ Laravel ในการพัฒนา',
    projects: [  // ✅ เพิ่มตรงนี้
      { name: 'ระบบ POS', url: 'https://demo.smartpos.in.th/' },
      { name: 'ระบบโรงงานผลไม้', url: 'http://ok-fruit-uat.trakool.co.th/' },
      { name: 'ระบบ POS', url: 'http://due-minimart.trakoolpos.com/' },
      { name: 'ระบบ POS ร้านอาหาร', url: 'https://new-khantoke.goodpos.net/' },
      { name: 'ระบบหอพัก', url: 'https://service.speed-pos.com/' },
      { name: 'ระบบโรงเรียนพิเศษ', url: 'http://i-step-online.com/' },
      { name: 'ระบบร้านเช่ารถ', url: 'http://thenacar.com/' }
    ]
  },
  {
    company: 'บริษัท innonity จำกัด',
    position: 'Full Stack Developer',
    period: '2024 - 2025',
    desc: 'Rocketskill แพลตฟอร์มเว็บไซต์คอร์สออนไลน์สำเร็จรูป ใช้ Nast.js และ Next.js MUI (Material-UI) ในการพัฒนา ',
    // projects: [  // ✅ เพิ่มตรงนี้
    //   { name: 'ระบบ POS', url: 'https://demo.smartpos.in.th/' },
    //   { name: 'ระบบโรงงานผลไม้', url: 'http://ok-fruit-uat.trakool.co.th/' },
    //   { name: 'ระบบ POS', url: 'http://due-minimart.trakoolpos.com/' },
    //   { name: 'ระบบ POS ร้านอาหาร', url: 'https://new-khantoke.goodpos.net/' },
    //   { name: 'ระบบหอพัก', url: 'https://service.speed-pos.com/' },
    //   { name: 'ระบบโรงเรียนพิเศษ', url: 'http://i-step-online.com/' },
    //   { name: 'ระบบร้านเช่ารถ', url: 'http://thenacar.com/' }
    // ]
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section - Modern Gradient */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-10 blur-3xl animate-pulse"></div>
        
        <div className="container-custom py-20 relative">
          <div className="text-center">
            <div className="mb-6">
              <img 
                src="/images/profile.jpg"  // วางรูปใน public/images/profile.jpg
                alt="Profile"
                className="w-58 h-58 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-4 rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Open to work
            </div>
            
            <h1 className="text-3xl md:text-6xl font-bold mb-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              ฤทธิพัฒน์ พลเสน (เต้ย)
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              Full Stack Developer
            </p>
            
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              ผู้หลงใหลในการพัฒนาเว็บแอปที่ตอบโจทย์ผู้ใช้งาน 
              และสร้างประสบการณ์ที่ยอดเยี่ยมผ่านโค้ดที่มีคุณภาพ
            </p>
            
            {/* Social & CTA Buttons */}
            <div className="flex justify-center gap-4 mt-10">
              <a 
                href="mailto:ritthiphat.work@gmail.com" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                ติดต่อผม
              </a>
              <a 
                href="/resume.pdf" 
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                ดาวน์โหลด Resume
              </a>
              {/* <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                ดูผลงาน
                <ChevronRight className="w-4 h-4" />
              </a> */}
            </div>
            
            {/* Social Icons */}
            {/* <div className="flex justify-center gap-3 mt-8">
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                <GitBranch className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                <Link className="w-5 h-5" />
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="container-custom py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Briefcase, label: 'โปรเจกต์ที่ทำ', value: '15+' },
            { icon: Code, label: 'ชั่วโมงโค้ด', value: '2,000+' },
            { icon: GraduationCap, label: 'คอร์สที่เรียน', value: '20+' },
            { icon: MapPin, label: 'ลูกค้าทั่วโลก', value: '5+' },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center p-4 bg-white rounded-xl shadow-sm">
                <Icon className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section> */}

      {/* Skills Section - with Progress Bars */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">ความสามารถ</h2>
            <p className="text-gray-600">เทคโนโลยีที่ถนัดและใช้งานประจำ</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                      <p className="text-sm text-gray-500">ความชำนาญ {skill.level}%</p>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full mb-4 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 group-hover:opacity-75"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="text-sm px-3 py-1 bg-gray-100 rounded-full hover:bg-blue-100 transition">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {/* <section id="projects" className="container-custom py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">ผลงานเด่น</h2>
          <p className="text-gray-600">โปรเจกต์ที่ภาคภูมิใจและอยากนำเสนอ</p>
        </div>
        
        <div className="space-y-8">
          {projects.filter(p => p.featured).map((project) => (
            <div key={project.name} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 rounded-bl-full`}></div>
              <div className="p-8 relative">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <h3 className="text-2xl font-bold">{project.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-xs px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href={project.github} target="_blank" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition">
                        <GitBranch className="w-4 h-4" />
                        Source Code
                      </a>
                      <a href={project.demo} target="_blank" className="inline-flex items-center gap-2 text-blue-600 hover:gap-3 transition-all">
                        Live Demo
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">ประสบการณ์ทำงาน</h2>
            <p className="text-gray-600">เส้นทางการเป็น Developer</p>
          </div>
          
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <div className="flex flex-wrap justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{exp.period}</span>
                </div>
                <p className="text-gray-600 mb-4">{exp.desc}</p>
                
                {exp.projects && exp.projects.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">📋 โปรเจกต์ที่รับผิดชอบ:</h4>
                    <ul className="space-y-2">
                      {exp.projects.map((project, pIdx) => {
                        // ✅ ตรวจสอบว่า project เป็น string หรือ object
                        const isString = typeof project === 'string';
                        const projectName = isString ? project : project.name;
                        const projectUrl = !isString && project.url ? project.url : null;
                        
                        return (
                          <li key={pIdx} className="flex items-start gap-2 text-sm">
                            <span className="text-blue-500 mt-0.5">▹</span>
                            {projectUrl ? (
                              <a 
                                href={projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 hover:underline transition flex items-center gap-1"
                              >
                                {projectName}
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            ) : (
                              <span className="text-gray-600">{projectName}</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Modern CTA */}
      <section className="py-20">
        <div className="container-custom">
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">พร้อมเริ่มโปรเจกต์ใหม่?</h2>
              <p className="text-blue-100 mb-8 max-w-lg mx-auto">
                กำลังมองหา Full Stack Developer ที่พร้อมเริ่มงานทันที? 
                ติดต่อมาได้เลยครับ
              </p>
              <a 
                href="mailto:ritthiphat.work@gmail.com" 
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                ติดต่อกันเลย
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="container-custom text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} ฤทธิพัฒน์ พลเสน | สร้างด้วย Next.js 14, Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}