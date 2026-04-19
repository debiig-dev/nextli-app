"use client";
import { memo } from 'react';
import Intercom from "@intercom/messenger-js-sdk";

const HomePage = () => {
 const basePath = process.env.NODE_ENV === 'production' ? '/nextli-app' : '';
  const services = [
    {
      title: 'Ruta Lago Coatepeque',
      tag: 'Premium',
      description:
        'Ruta panorámica con vistas memorables, paradas para fotografías y una experiencia pensada para quienes buscan algo más completo.',
      duration: '4 horas',
      price: 'Desde $85 por persona',
      icon: '🌊',
    },
    {
      title: 'Ruta Volcán Santa Ana',
      tag: 'Aventura Extrema',
      description:
        'Terreno volcánico real, adrenalina y acompañamiento experto para quienes quieren una ruta más intensa.',
      duration: '3 horas',
      price: 'Desde $65 por persona',
      icon: '🌋',
    },
    {
      title: 'Ruta Cerro de las Antenas',
      tag: 'Vista Panorámica',
      description:
        'Una ruta corta, visual y perfecta para disfrutar miradores, naturaleza y contenido fotográfico.',
      duration: '2 horas',
      price: 'Desde $50 por persona',
      icon: '📍',
    },
    {
      title: 'Ruta Hacienda Guadalupe',
      tag: 'Alianza Estratégica',
      description:
        'Experiencia offroad con integración gastronómica para vivir aventura y buena comida en un mismo recorrido.',
      duration: '2.5 horas',
      price: 'Desde $70 por persona',
      icon: '🍽️',
    },
  ];

  const reasons = [
    {
      title: 'Experiencia Guiada',
      items: [
        'Guías expertos durante todo el recorrido.',
        'Paradas planificadas en puntos clave.',
      ],
    },
    {
      title: 'Soporte Mecánico',
      items: [
        'Respaldo técnico durante la ruta.',
        'Mayor seguridad y confianza para el cliente.',
      ],
    },
    {
      title: 'Integración Gastronómica',
      items: [
        'Rutas que pueden combinar aventura con restaurante.',
        'Ideal para experiencias premium en Lago Coatepeque y alianzas.',
      ],
    },
  ];

  const userInfo = crypto.randomUUID();

  console.log('User Info:', userInfo);

Intercom({
  app_id: 'kkq1zfnu',
  user_id: userInfo, // IMPORTANT: Replace "user.id" with the variable you use to capture the user's ID
  name: `Name - ${userInfo}`, // IMPORTANT: Replace "user.name" with the variable you use to capture the user's name
  email: `${userInfo}@gmail.com`, // IMPORTANT: Replace "user.email" with the variable you use to capture the user's email
  created_at: Math.floor(Date.now() / 1000), // IMPORTANT: Replace "user.createdAt" with the variable you use to capture the user's sign-up date in a Unix timestamp (in seconds) e.g. 1704067200
});

  return (
    <main className="min-h-screen bg-[#f6f4f2] text-[#1f2937]">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 lg:px-10">
        <section className="grid items-start gap-8 md:grid-cols-[1.2fr_320px]">
          <div className="max-w-2xl pt-6">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Nuestros Servicios
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Aventura real en rutas volcánicas, con experiencias auténticas,
              seguras y memorables.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={`${basePath}/nextli-logo.png`}
              alt="Logo de Nextli"
              className="h-auto w-[220px] object-contain md:w-[260px]"
            />
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-[#e6e0d8] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#edf2e7] text-2xl">
                  {service.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="text-[2rem] font-semibold leading-tight text-slate-900 md:text-[2.05rem]">
                    {service.title}
                  </h2>
                  <span className="mt-2 inline-flex rounded-full bg-[#dfe7d2] px-3 py-1 text-sm font-medium text-[#5f7547]">
                    {service.tag}
                  </span>
                </div>
              </div>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {service.description}
              </p>

              <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="space-y-2 text-slate-600">
                  <div className="flex items-center gap-3 text-lg">
                    <span className="text-slate-400">◷</span>
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <span className="text-slate-400">○</span>
                    <span>{service.price}</span>
                  </div>
                </div>

                <button className="rounded-xl bg-[#427d43] px-7 py-3 text-lg font-semibold text-white transition hover:bg-[#376a38]">
                  Descubrir
                </button>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12 grid gap-0 overflow-hidden rounded-2xl border border-[#e6e0d8] bg-white md:grid-cols-2">
          <div className="p-8 md:p-10">
            <h2 className="text-3xl font-bold text-slate-900">¿Por qué elegirnos?</h2>

            <div className="mt-8 space-y-8">
              {reasons.map((reason) => (
                <div key={reason.title}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#edf2e7] text-[#427d43]">
                      ✓
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900">{reason.title}</h3>
                  </div>

                  <ul className="mt-4 space-y-2 pl-10 text-lg leading-8 text-slate-600">
                    {reason.items.map((item) => (
                      <li key={item} className="list-disc marker:text-[#427d43]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="h-full min-h-[320px] bg-[#e9e4db]">
            <img
              src={`${basePath}/nextli-riders.png`}
              alt="Riders de Nextli en ruta"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section className="px-4 py-14 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
            Reserva tu Aventura en Cuatrimoto
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-500 md:text-xl">
            Listo para vivir una experiencia única? Reserva tu lugar con el 50% de anticipo.
          </p>

          <button className="mt-8 rounded-xl bg-[#427d43] px-8 py-4 text-xl font-semibold text-white transition hover:bg-[#376a38]">
            Reservar Ahora
          </button>
        </section>

        <div className="flex justify-end pb-6">
          <a
            href="https://wa.me/50300000000"
            className="inline-flex items-center gap-3 rounded-full bg-[#2f6b34] px-6 py-4 text-xl font-semibold text-white shadow-sm transition hover:bg-[#285c2d]"
          >
            <span className="text-3xl">◔</span>
            <span>+503 0000 0000</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default memo(HomePage);