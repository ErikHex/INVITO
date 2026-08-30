import { Heart, Menu, Sparkles, X } from "lucide-react";

export default function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-3xl font-serif font-bold text-rose-600 tracking-tight">
              Invito<span className="text-rose-400">.</span>
            </span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#como-funciona"
              className="text-gray-600 hover:text-rose-600 font-medium transition-colors"
            >
              ¿Cómo funciona?
            </a>
            <a
              href="#plantillas"
              className="text-gray-600 hover:text-rose-600 font-medium transition-colors"
            >
              Ejemplos
            </a>
            <a
              href="#caracteristicas"
              className="text-gray-600 hover:text-rose-600 font-medium transition-colors"
            >
              Características
            </a>
            <a
              href="#magia-ia"
              className="text-gray-600 hover:text-rose-600 font-medium transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-4 h-4" /> IA
            </a>
            <a
              href="#precios"
              className="text-gray-600 hover:text-rose-600 font-medium transition-colors"
            >
              Precios
            </a>
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-rose-200">
              Crear Invitación
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-rose-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <a
              href="#como-funciona"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-md"
            >
              ¿Cómo funciona?
            </a>
            <a
              href="#plantillas"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-md"
            >
              Plantillas
            </a>
            <a
              href="#caracteristicas"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-md"
            >
              Características
            </a>
            <a
              href="#magia-ia"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-md flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" /> Asistente IA
            </a>
            <a
              href="#precios"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-md"
            >
              Precios
            </a>
            <button className="mt-4 w-full bg-rose-600 text-white px-6 py-3 rounded-full font-medium">
              Crear Invitación
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
