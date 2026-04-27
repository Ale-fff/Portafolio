import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const enabled = saved ? saved === 'dark' : prefersDark
    setDarkMode(enabled)
    document.documentElement.classList.toggle('dark', enabled)
  }, [])

  const toggleDarkMode = () => {
    const nextMode = !darkMode
    setDarkMode(nextMode)
    window.localStorage.setItem('theme', nextMode ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', nextMode)
  }

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-500">
      <Head>
        <title>Francisco Franco - Desarrollador Web</title>
        <meta name="description" content="Portafolio personal de desarrollo web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm dark:bg-slate-900/90">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">Francisco Franco</h1>
            </div>
            <div className="flex items-center gap-4">
              {['Sobre mí', 'Proyectos', 'Contacto'].map((item) => {
                const href = `#${item.toLowerCase().replace(/\s+/g, '-')}`
                return (
                  <a
                    key={item}
                    href={href}
                    className="text-slate-700 transition duration-300 ease-out transform hover:-translate-y-0.5 hover:scale-105 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                  >
                    {item}
                  </a>
                )
              })}
              <button
                onClick={toggleDarkMode}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl md:text-6xl dark:text-slate-100">
            Hola, soy <span className="text-blue-600 dark:text-blue-400">Francisco Alejandro Franco Santacruz</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-slate-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl dark:text-slate-300">
            Desarrollador web apasionado por crear experiencias digitales excepcionales.
            Especializado en tecnologías modernas como React, Next.js y Node.js.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 p-px shadow-glow">
              <a
                href="#projects"
                className="block rounded-full bg-slate-950 px-8 py-3 text-base font-medium text-white transition duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-blue-500 dark:bg-slate-700 dark:hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
              >
                Ver mis trabajos
              </a>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="mt-20 scroll-mt-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Sobre mí</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500 dark:text-slate-300">
              Soy un desarrollador web con experiencia en la creación de aplicaciones web modernas y responsivas.
              Me apasiona resolver problemas complejos y crear soluciones elegantes.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mt-20 scroll-mt-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Mis Proyectos</h2>
            <p className="mt-4 text-xl text-slate-500 dark:text-slate-300">Algunos de los trabajos en los que he trabajado</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Proyecto 1',
                description: 'Descripción breve del proyecto. Tecnologías utilizadas: React, Node.js, MongoDB.',
              },
              {
                title: 'Proyecto 2',
                description: 'Descripción breve del proyecto. Tecnologías utilizadas: Next.js, TypeScript, PostgreSQL.',
              },
              {
                title: 'Proyecto 3',
                description: 'Descripción breve del proyecto. Tecnologías utilizadas: Vue.js, Express, MySQL.',
              },
            ].map((project) => (
              <div key={project.title} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow transition duration-300 ease-out hover:-translate-y-1 hover:shadow-glow dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{project.description}</p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-600 transition duration-300 ease-out hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Ver proyecto →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-20 scroll-mt-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Contacto</h2>
            <p className="mt-4 text-xl text-slate-500 dark:text-slate-300">¿Quieres trabajar juntos?</p>
          </div>

          <div className="mt-12 max-w-lg mx-auto">
            <form className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm transition duration-300 ease-out focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-500/30"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm transition duration-300 ease-out focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-500/30"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 ease-out hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-400/40 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-500 dark:text-slate-400">&copy; 2026 Francisco Franco. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}