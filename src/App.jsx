import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import TemplatesGallery from "./components/TemplatesGallery";
import FeatureGrid from "./components/FeatureGrid";
import InvitationGenerator from "./components/InvitationGenerator";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";
import { templates, features } from "./data/siteData";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Todas");

  const [aiNames, setAiNames] = useState("");
  const [aiEventType, setAiEventType] = useState("Boda");
  const [aiTone, setAiTone] = useState("Romántico");
  const [aiResult, setAiResult] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [aiError, setAiError] = useState("");

  const categories = ["Todas", "Bodas", "Cumpleaños", "XV Años", "Baby Shower"];

  const filteredTemplates =
    activeFilter === "Todas"
      ? templates
      : templates.filter((template) => template.category === activeFilter);

  const generateInvitationText = async () => {
    if (!aiNames.trim()) {
      setAiError("Por favor, ingresa los nombres del/los anfitrión(es).");
      return;
    }

    setIsGenerating(true);
    setAiError("");
    setAiResult("");
    setIsCopied(false);

    const prompt = `Escribe un texto original, hermoso y con un tono ${aiTone.toLowerCase()} para una invitación de ${aiEventType}. Los anfitriones o festejados son: ${aiNames}. El texto debe ser muy corto (máximo 2 párrafos breves), listo para poner en la portada de una invitación digital web. No incluyas marcadores de posición para fecha o lugar, solo el mensaje introductorio de invitación. No uses comillas al inicio o final.`;

    const apiKey = "";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      systemInstruction: {
        parts: [
          {
            text: "Eres un experto redactor y copywriter creativo de invitaciones para eventos especiales en español.",
          },
        ],
      },
    };

    const retries = [1000, 2000, 4000, 8000, 16000];
    let attempt = 0;
    let success = false;

    while (attempt < retries.length && !success) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) throw new Error("Error de red");

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (text) {
          setAiResult(text.trim());
          success = true;
        } else {
          throw new Error("No se devolvió texto");
        }
      } catch (error) {
        if (attempt === retries.length - 1) {
          setAiError(
            "Hubo un error al conectar con la magia de la IA. Por favor, intenta de nuevo más tarde.",
          );
        } else {
          await new Promise((resolve) => setTimeout(resolve, retries[attempt]));
        }
        attempt += 1;
      }
    }

    setIsGenerating(false);
  };

  const copyToClipboard = () => {
    if (!aiResult) return;

    const textArea = document.createElement("textarea");
    textArea.value = aiResult;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Error al copiar", error);
    }

    document.body.removeChild(textArea);
  };

  return (
    <div className="font-sans w-full text-gray-800 bg-white min-h-screen">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <HeroSection />
      <HowItWorks />
      <TemplatesGallery
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filteredTemplates={filteredTemplates}
        categories={categories}
      />
      <FeatureGrid features={features} />
      <InvitationGenerator
        aiEventType={aiEventType}
        setAiEventType={setAiEventType}
        aiNames={aiNames}
        setAiNames={setAiNames}
        aiTone={aiTone}
        setAiTone={setAiTone}
        aiResult={aiResult}
        aiError={aiError}
        isGenerating={isGenerating}
        isCopied={isCopied}
        onGenerate={generateInvitationText}
        onCopy={copyToClipboard}
      />
      <PricingSection />
      <Footer />
    </div>
  );
}
