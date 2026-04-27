import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Mi Portafolio - Desarrollador Web</title>
        <meta name="description" content="Portafolio personal de desarrollo web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Mi Portafolio</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#about" className="text-gray-700 hover:text-gray-900">Sobre mí</a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900">Proyectos</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">Contacto</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Hola, soy <span className="text-blue-600">[Tu Nombre]</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Desarrollador web apasionado por crear experiencias digitales excepcionales.
            Especializado en tecnologías modernas como React, Next.js y Node.js.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#projects" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                Ver mis trabajos
              </a>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="mt-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Sobre mí</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Soy un desarrollador web con experiencia en la creación de aplicaciones web modernas y responsivas.
              Me apasiona resolver problemas complejos y crear soluciones elegantes.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mt-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Mis Proyectos</h2>
            <p className="mt-4 text-xl text-gray-500">Algunos de los trabajos en los que he trabajado</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Proyecto 1 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Proyecto 1</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Descripción breve del proyecto. Tecnologías utilizadas: React, Node.js, MongoDB.
                </p>
                <div className="mt-4">
                  <a href="#" className="text-blue-600 hover:text-blue-500">Ver proyecto →</a>
                </div>
              </div>
            </div>

            {/* Proyecto 2 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Proyecto 2</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Descripción breve del proyecto. Tecnologías utilizadas: Next.js, TypeScript, PostgreSQL.
                </p>
                <div className="mt-4">
                  <a href="#" className="text-blue-600 hover:text-blue-500">Ver proyecto →</a>
                </div>
              </div>
            </div>

            {/* Proyecto 3 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Proyecto 3</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Descripción breve del proyecto. Tecnologías utilizadas: Vue.js, Express, MySQL.
                </p>
                <div className="mt-4">
                  <a href="#" className="text-blue-600 hover:text-blue-500">Ver proyecto →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Contacto</h2>
            <p className="mt-4 text-xl text-gray-500">¿Quieres trabajar juntos?</p>
          </div>

          <div className="mt-12 max-w-lg mx-auto">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" id="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea id="message" name="message" rows="4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                  Enviar mensaje
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-500">&copy; 2024 Mi Portafolio. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}