import {
  CheckCircle2,
  Clock,
  Music,
  Camera,
  MapPin,
  Smartphone,
} from "lucide-react";

const iconMap = {
  Clock,
  CheckCircle2,
  MapPin,
  Music,
  Camera,
  Smartphone,
};

export default function FeatureGrid({ features }) {
  return (
    <section
      id="caracteristicas"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Más que una simple imagen
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nuestras invitaciones web son mini-páginas interactivas que ofrecen
            una experiencia completa para ti y tus invitados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, idx) => {
            const Icon = iconMap[feature.icon];

            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-rose-50 transition-colors"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center mb-6 transform -rotate-3 border border-rose-100">
                  <Icon className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
