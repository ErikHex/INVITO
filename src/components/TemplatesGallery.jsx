import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Heart } from "lucide-react";

function TemplatePreview({ template }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative h-72 overflow-hidden bg-gray-100">
      {hasError ? (
        <img
          src={template.image}
          alt={`Vista previa de ${template.title}`}
          className="w-full h-full object-cover object-top"
        />
      ) : (
        <iframe
          src={template.demoUrl}
          title={`Vista previa de ${template.title}`}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-top-navigation-by-user-activation"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className="absolute inset-0 w-full h-full border-0 bg-white"
        />
      )}

      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-sm text-gray-500">
          Cargando invitación...
        </div>
      )}

      {hasError && (
        <div className="absolute inset-x-0 bottom-0 bg-gray-950/75 px-3 py-2 text-center text-xs text-white">
          Mostrando imagen de respaldo
        </div>
      )}
    </div>
  );
}

export default function TemplatesGallery({
  activeFilter,
  setActiveFilter,
  activePackage,
  setActivePackage,
  filteredTemplates,
  categories,
  packages,
}) {
  const templatesPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredTemplates.length / templatesPerPage);
  const displayedPage = Math.min(currentPage, Math.max(1, totalPages));
  const firstTemplateIndex = (displayedPage - 1) * templatesPerPage;
  const visibleTemplates = filteredTemplates.slice(
    firstTemplateIndex,
    firstTemplateIndex + templatesPerPage,
  );

  const categoryColors = {
    Todas: "bg-gray-900 text-white border-gray-900",
    Bodas: "bg-rose-600 text-white border-rose-600",
    Cumpleaños: "bg-amber-500 text-white border-amber-500",
    "XV Años": "bg-fuchsia-600 text-white border-fuchsia-600",
    "Baby Shower": "bg-teal-600 text-white border-teal-600",
  };
  const packageBarColors = {
    Básico: "bg-gray-900 text-white",
    Premium: "bg-red-600 text-white",
    "A Medida": "bg-amber-500 text-gray-950",
  };

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
            No usamos plantilas, ni canva, cada invitacion es personalizada y
            diseñada por nuestro equipo de diseñadores y programadores para que
            tu invitación sea única y memorable.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium border transition-colors ${
                  activeFilter === cat
                    ? categoryColors[cat]
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {packages.map((packageName) => (
              <button
                key={packageName}
                onClick={() => setActivePackage(packageName)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activePackage === packageName
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-500"
                }`}
              >
                {packageName}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleTemplates.map((template) => (
            <div
              key={template.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative">
                <TemplatePreview template={template} />
                <div className="absolute inset-0 bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a
                    href={template.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold transform translate-y-0 md:-translate-y-4 md:group-hover:translate-y-0 transition-all flex items-center gap-2 hover:bg-rose-50"
                  >
                    Abrir invitación <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <div
                  className={`absolute inset-x-0 top-0 flex items-center justify-between px-4 py-4 text-sm font-bold ${packageBarColors[template.package]}`}
                >
                  <span>{template.category}</span>
                  <span className="text-white/85">{template.package}</span>
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

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={displayedPage === 1}
              aria-label="Página anterior"
              className="p-2 rounded-full bg-white text-gray-700 border border-gray-200 hover:border-rose-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm font-medium text-gray-600">
              Página {displayedPage} de {totalPages}
            </span>
            <button
              type="button"
              onClick={() =>
                setCurrentPage((page) => Math.min(totalPages, page + 1))
              }
              disabled={displayedPage === totalPages}
              aria-label="Página siguiente"
              className="p-2 rounded-full bg-white text-gray-700 border border-gray-200 hover:border-rose-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
