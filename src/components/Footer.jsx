import { Heart, Mail, Send, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <span className="text-3xl font-serif font-bold text-gray-900 tracking-tight block mb-4">
              Invito<span className="text-rose-500">.</span>
            </span>
            <p className="text-gray-500 mb-6 max-w-sm">
              Transformando la manera en que invitas a tus eventos. Elegante,
              rápido, interactivo y amigable con el medio ambiente.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/invito.fun/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visitar Instagram de Invito"
                className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-500 hover:bg-rose-50 hover:text-rose-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/invito.fun/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visitar Instagram de Invito"
                className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-500 hover:bg-rose-50 hover:text-rose-600 transition-colors"
              >
                <Sparkles className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/invito.fun/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visitar Instagram de Invito"
                className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-500 hover:bg-rose-50 hover:text-rose-600 transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Explorar</h4>
            <ul className="space-y-3 text-gray-500">
              <li>
                <a
                  href="#plantillas"
                  className="hover:text-rose-600 transition-colors"
                >
                  Ejemplos de Bodas
                </a>
              </li>
              <li>
                <a
                  href="#plantillas"
                  className="hover:text-rose-600 transition-colors"
                >
                  Ejemplos de XV Años
                </a>
              </li>
              <li>
                <a
                  href="#caracteristicas"
                  className="hover:text-rose-600 transition-colors"
                >
                  Características
                </a>
              </li>
              <li>
                <a
                  href="#precios"
                  className="hover:text-rose-600 transition-colors"
                >
                  Precios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Soporte</h4>
            <ul className="space-y-3 text-gray-500">
              <li>
                <a
                  href="#"
                  className="hover:text-rose-600 transition-colors"
                >
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-600 transition-colors"
                >
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-600 transition-colors"
                >
                  Política de Privacidad
                </a>
              </li>
              <li className="flex items-center space-x-2 mt-4 text-rose-600 font-medium">
                <Mail className="w-4 h-4" />
                <a href="mailto:hola@invito.mx">hola@invito.mx</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Invito. Todos los derechos
            reservados.
          </p>
          <p className="mt-2">
            Hecho con <Heart className="w-3 h-3 inline text-rose-500" /> en
            México.
          </p>
        </div>
      </div>
    </footer>
  );
}
