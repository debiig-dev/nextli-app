export default function Home() {
  const routes = [
    {
      name: 'Ruta Lago Coatepeque Experience',
      duration: '4 horas',
      description:
        'Una experiencia premium que combina aventura offroad, vistas panorámicas y una parada gastronómica para cerrar el recorrido.',
      includes: [
        'Ruta offroad panorámica',
        'Paradas estratégicas para fotos y descanso',
        'Guía experto + soporte',
        'Almuerzo en restaurante',
      ],
      price: 'Desde $85',
      badge: 'Premium',
    },
    {
      name: 'Ruta Volcán de Santa Ana',
      duration: '3 horas',
      description:
        'Recorrido de mayor adrenalina sobre terreno volcánico real para quienes buscan una ruta más técnica e intensa.',
      includes: [
        'Terreno volcánico',
        'Ruta técnica',
        'Guía experto',
        'Soporte mecánico',
      ],
      price: 'Desde $65',
      badge: 'Aventura',
    },
    {
      name: 'Ruta Cerro de las Antenas',
      duration: '2 horas',
      description:
        'Ideal para una experiencia rápida, visual y memorable, con vistas panorámicas perfectas para fotos y contenido.',
      includes: [
        'Subida con vistas panorámicas',
        'Punto de fotos épico',
        'Guía experto',
        'Soporte durante la ruta',
      ],
      price: 'Desde $50',
      badge: 'Entrada',
    },
    {
      name: 'Ruta Hacienda Guadalupe Experience',
      duration: '2.5 horas',
      description:
        'Una experiencia pensada para quienes buscan combinar aventura y gastronomía en una propuesta todo incluido.',
      includes: [
        'Ruta offroad',
        'Salida desde restaurante',
        'Experiencia gastronómica',
        'Regreso al restaurante',
      ],
      price: 'Desde $70',
      badge: 'Experiencia',
    },
  ];

  const differentiators = [
    'Experiencia guiada real con acompañamiento durante todo el recorrido',
    'Soporte mecánico in house para mayor seguridad y confianza',
    'Rutas auténticas con distintos niveles de dificultad',
    'Paradas estratégicas para fotos y descanso',
    'Integración gastronómica en experiencias seleccionadas',
    'Briefing de seguridad y equipamiento antes de cada salida',
  ];

  const audience = ['Parejas', 'Grupos de amigos', 'Turistas', 'Amantes de la aventura'];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700">
              NEXTLI ATV EXPERIENCE
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
              Aventura real en rutas volcánicas, segura y memorable.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Descubre Santa Ana conduciendo tu propia cuatrimoto por miradores, senderos naturales y rutas offroad diseñadas para vivir una experiencia auténtica.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#rutas"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Ver rutas
              </a>
              <a
                href="#reserva"
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-white"
              >
                Reservar experiencia
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">Tours</p>
                <p className="mt-2 text-2xl font-bold">4 rutas</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">Precios</p>
                <p className="mt-2 text-2xl font-bold">Desde $50</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">Incluye</p>
                <p className="mt-2 text-2xl font-bold">Guía + soporte</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rutas" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Portafolio de rutas
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Elige la experiencia que mejor se adapta a tu aventura
          </h2>
          <p className="mt-4 text-slate-600">
            Desde rutas panorámicas cortas hasta experiencias premium con gastronomía incluida.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {routes.map((route) => (
            <article
              key={route.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {route.badge}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-slate-950">{route.name}</h3>
                  <p className="mt-2 text-sm font-medium text-slate-500">{route.duration}</p>
                </div>
                <div className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
                  {route.price}
                </div>
              </div>

              <p className="mt-5 leading-7 text-slate-600">{route.description}</p>

              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                {route.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Diferenciadores
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Más que un tour: una experiencia completa
            </h2>
            <p className="mt-4 text-slate-600">
              Nuestro enfoque combina aventura, seguridad, acompañamiento y momentos memorables en cada recorrido.
            </p>
          </div>

          <div className="grid gap-4">
            {differentiators.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              ¿Para quién es?
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Experiencias para distintos perfiles</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {audience.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              Seguridad primero
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Cada salida inicia con claridad y respaldo</h2>
            <ul className="mt-6 space-y-4 text-slate-200">
              <li>• Briefing antes de cada tour</li>
              <li>• Normas claras de conducción</li>
              <li>• Equipo de protección incluido</li>
              <li>• Soporte constante durante toda la ruta</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="reserva" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Reserva tu experiencia
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Vive Santa Ana de una forma diferente
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Reserva con el 50% de anticipo y asegura tu cupo. Nuestro equipo te ayuda a elegir la ruta ideal según el tipo de experiencia que buscas.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/50300000000"
              className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Reservar por WhatsApp
            </a>
            <a
              href="mailto:reservas@nextli.com"
              className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-white"
            >
              Solicitar información
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
