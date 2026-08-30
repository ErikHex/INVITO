const steps = [
  {
    step: "1",
    title: "Elige un Diseño",
    desc: "Explora nuestra galería y selecciona la plantilla que mejor se adapte a la temática de tu evento.",
  },
  {
    step: "2",
    title: "Personaliza los Datos",
    desc: "Añade los nombres, fecha, lugar, fotos, música y toda la información importante.",
  },
  {
    step: "3",
    title: "Comparte y Disfruta",
    desc: "Recibe tu enlace único y compártelo por WhatsApp, Messenger o redes sociales.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            ¿Cómo crear tu invitación?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tener una invitación espectacular para tu evento toma menos de 5
            minutos. Es tan fácil como 1, 2, 3.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative text-center p-6"
            >
              <div className="w-16 h-16 mx-auto bg-rose-100 text-rose-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 relative z-10">
                {item.step}
              </div>
              {idx !== 2 && (
                <div className="hidden md:block absolute top-14 left-1/2 w-full h-[2px] bg-rose-100 -z-0"></div>
              )}

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
