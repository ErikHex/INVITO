import { CheckCircle2, X } from "lucide-react";

export default function PricingSection() {
  return (
    <section
      id="precios"
      className="py-20 bg-gray-900 text-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-rose-600 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-teal-600 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Planes Transparentes
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sin suscripciones ni cobros ocultos. Pagas una sola vez por tu
            evento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-gray-500 transition-colors">
            <h3 className="text-2xl font-bold mb-2">Básico</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Ideal para eventos pequeños
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$299</span>
              <span className="text-gray-400"> MXN</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-rose-500 mr-3 shrink-0" />{" "}
                <span className="text-gray-300">Diseño Basico</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-rose-500 mr-3 shrink-0" />{" "}
                <span className="text-gray-300">Cuenta regresiva</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-rose-500 mr-3 shrink-0" />{" "}
                <span className="text-gray-300">Ubicación (2 sede)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-rose-500 mr-3 shrink-0" />{" "}
                <span className="text-gray-300 ">
                  Confirmación via Whatsapp
                </span>
              </li>
            </ul>
            <a
              href="https://www.instagram.com/invito.fun/"
              target="_blank"
              rel="noreferrer"
              aria-label="Elegir paquete Básico y contactar a Invito por Instagram"
              className="block w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-full font-semibold text-center transition-colors"
            >
              Elegir Básico
            </a>
          </div>

          <div className="bg-gradient-to-b from-rose-600 to-rose-800 rounded-3xl p-8 transform md:-translate-y-4 shadow-2xl shadow-rose-900/50 border border-rose-500 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-400 to-rose-400 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
              El Más Popular
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Premium</h3>
            <p className="text-rose-200 mb-6 text-sm">Todo lo que necesitas</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">$599</span>
              <span className="text-rose-200"> MXN</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-white mr-3 shrink-0" />{" "}
                <span className="text-white">Diseño personalizado</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-white mr-3 shrink-0" />{" "}
                <span className="text-white font-bold">
                  Confirmación RSVP ilimitada
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-white mr-3 shrink-0" />{" "}
                <span className="text-white">Música de fondo</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-white mr-3 shrink-0" />{" "}
                <span className="text-white">Galería de fotos (hasta 10)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-white mr-3 shrink-0" />{" "}
                <span className="text-white">Sugerencia de regalos</span>
              </li>
            </ul>
            <a
              href="https://www.instagram.com/invito.fun/"
              target="_blank"
              rel="noreferrer"
              aria-label="Elegir paquete Premium y contactar a Invito por Instagram"
              className="block w-full bg-white text-rose-700 hover:bg-gray-100 py-3 rounded-full font-bold text-center transition-colors shadow-lg"
            >
              Elegir Premium
            </a>
          </div>

          <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-gray-500 transition-colors">
            <h3 className="text-2xl font-bold mb-2">A Medida</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Diseño exclusivo desde cero
            </p>
            <div className="mb-6">
              <span className="text-gray-400 mr-2">desde</span>
              <span className="text-4xl font-bold">$1,299</span>
              <span className="text-gray-400"> MXN</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-rose-500 mr-3 shrink-0" />{" "}
                <span className="text-gray-300">Diseño 100% único</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-rose-500 mr-3 shrink-0" />{" "}
                <span className="text-gray-300">
                  Animaciones personalizadas
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-rose-500 mr-3 shrink-0" />{" "}
                <span className="text-gray-300">Dominio propio opcional</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-rose-500 mr-3 shrink-0" />{" "}
                <span className="text-gray-300">Boletos QR </span>
              </li>
            </ul>
            <a
              href="https://www.instagram.com/invito.fun/"
              target="_blank"
              rel="noreferrer"
              aria-label="Elegir paquete A Medida y contactar a Invito por Instagram"
              className="block w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-full font-semibold text-center transition-colors"
            >
              Elegir A Medida
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
