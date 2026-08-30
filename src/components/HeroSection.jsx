import { CheckCircle2, Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-orange-50 -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <Heart className="w-4 h-4" />
              <span>Invitaciones 100% Ecológicas y Modernas</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Invitaciones Digitales que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-500">
                Dejan Huella
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Sorprende a tus invitados con invitaciones interactivas, elegantes
              y fáciles de compartir por WhatsApp. Bodas, XV años, cumpleaños y
              más.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#plantillas"
                className="w-full sm:w-auto text-center bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-xl shadow-rose-200"
              >
                Ver Plantillas
              </a>
              <a
                href="#como-funciona"
                className="w-full sm:w-auto text-center bg-white border-2 border-gray-200 hover:border-rose-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                ¿Cómo funciona?
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-full lg:mt-0 mt-12">
            <div className="relative rounded-[2.5rem] overflow-hidden border-[8px] border-white shadow-2xl bg-gray-50 aspect-[9/16] transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800"
                alt="Invitación de boda en celular"
                className="object-cover w-full h-full opacity-90"
              />
              <div className="absolute top-10 right-[-20px] bg-white p-3 rounded-xl shadow-lg flex items-center space-x-3 transform -rotate-6 animate-bounce">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">
                    ¡Carlos ha confirmado!
                  </p>
                  <p className="text-[10px] text-gray-500">
                    Mesa 4 • 2 Personas
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-rose-200 to-orange-100 rounded-full blur-3xl -z-10 opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
