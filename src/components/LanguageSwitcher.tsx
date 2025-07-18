import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const LANGUAGES = [
  { code: "pt", label: "PT", flag: "🇵🇹" },
  { code: "en", label: "EN", flag: "EN" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language.split("-")[0];
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center p-4 animate-fadeIn">
      {/* Botões Empresa e Residencial à esquerda */}
      <div className="flex gap-2">
        <button
          className="w-auto px-4 h-10 rounded-full flex items-center justify-center text-base font-semibold shadow-md border-2 border-gray-200 bg-white text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none"
          type="button"
          onClick={() => navigate("/")}
        >
          Empresa
        </button>
        <button
          className="w-auto px-4 h-10 rounded-full flex items-center justify-center text-base font-semibold shadow-md border-2 border-gray-200 bg-white text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none"
          type="button"
          onClick={() => navigate("/residencial")}
        >
          Residencial
        </button>
      </div>
      {/* Botões de idioma à direita */}
      <div className="flex gap-2">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shadow-md border-2 transition-all duration-200
              ${current === lang.code
                ? "bg-primary text-white border-primary scale-110 ring-2 ring-accent"
                : "bg-white text-primary border-gray-200 hover:bg-primary hover:text-white hover:border-primary hover:scale-105"}
              hover:shadow-lg active:scale-95 focus:outline-none`}
            aria-label={lang.label}
          >
            <span className="sr-only">{lang.label}</span>
            <span aria-hidden>{lang.flag}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default LanguageSwitcher; 