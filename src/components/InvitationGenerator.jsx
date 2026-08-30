import { Check, Copy, Loader2, Sparkles } from "lucide-react";

export default function InvitationGenerator({
  aiEventType,
  setAiEventType,
  aiNames,
  setAiNames,
  aiTone,
  setAiTone,
  aiResult,
  aiError,
  isGenerating,
  isCopied,
  onGenerate,
  onCopy,
}) {
  return (
    <section
      id="magia-ia"
      className="py-20 bg-rose-50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-10 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-rose-300 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 bg-white text-rose-600 px-4 py-2 rounded-full mb-4 shadow-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Magia con Gemini AI</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            ¿No sabes qué escribir?
          </h2>
          <p className="text-gray-600">
            Deja que nuestra Inteligencia Artificial redacte el mensaje perfecto
            para tu invitación en segundos.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-rose-100 p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de Evento
                </label>
                <select
                  value={aiEventType}
                  onChange={(e) => setAiEventType(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                >
                  <option value="Boda">Boda</option>
                  <option value="XV Años">XV Años</option>
                  <option value="Cumpleaños">Cumpleaños</option>
                  <option value="Baby Shower">Baby Shower</option>
                  <option value="Bautizo">Bautizo</option>
                  <option value="Fiesta de Graduación">
                    Fiesta de Graduación
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombres de los Festejados
                </label>
                <input
                  type="text"
                  placeholder="Ej. Ana y Carlos"
                  value={aiNames}
                  onChange={(e) => setAiNames(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tono del Mensaje
                </label>
                <select
                  value={aiTone}
                  onChange={(e) => setAiTone(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                >
                  <option value="Romántico">Romántico y emotivo</option>
                  <option value="Formal">Formal y elegante</option>
                  <option value="Divertido">Divertido y casual</option>
                  <option value="Poético">Poético</option>
                </select>
              </div>

              {aiError && (
                <p className="text-red-500 text-sm font-medium animate-pulse">
                  {aiError}
                </p>
              )}

              <button
                onClick={onGenerate}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-rose-600 to-orange-500 hover:from-rose-700 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generando magia...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />✨ Generar Texto Ideal
                  </>
                )}
              </button>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col h-full relative">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                Resultado
              </h4>

              {aiResult ? (
                <div className="flex-grow flex flex-col justify-between">
                  <p className="text-gray-800 whitespace-pre-wrap font-serif text-lg leading-relaxed italic">
                    "{aiResult}"
                  </p>
                  <button
                    onClick={onCopy}
                    className="mt-6 self-end flex items-center gap-2 text-sm font-medium bg-white border border-gray-200 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-lg transition-colors shadow-sm"
                  >
                    {isCopied ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    {isCopied ? "¡Copiado!" : "Copiar texto"}
                  </button>
                </div>
              ) : (
                <div className="flex-grow flex items-center justify-center text-center text-gray-400">
                  <div>
                    <Sparkles className="w-10 h-10 mx-auto mb-3 opacity-20" />
                    <p className="text-sm">
                      Completa los datos y presiona generar para ver tu texto
                      personalizado aquí.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
