import { ExternalLink, Heart } from "lucide-react";

export default function TemplatesGallery({
  activeFilter,
  setActiveFilter,
  filteredTemplates,
  categories,
}) {
  return (
    <section
      id="plantillas"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Diseños Profesionales para Cada Ocasión
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Diseños creados por profesionales, listos para ser personalizados
            con tus datos.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === cat
                    ? "bg-rose-600 text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-rose-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a
                    href={template.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold transform -translate-y-4 group-hover:translate-y-0 transition-all flex items-center gap-2 hover:bg-rose-50"
                  >
                    Ver Previa <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-rose-600">
                  {template.category}
                </div>
              </div>
              <div className="p-5 flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-900">
                  {template.title}
                </h3>
                <button className="text-rose-600 hover:text-rose-800 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
