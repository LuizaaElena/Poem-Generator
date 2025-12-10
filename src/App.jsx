import { useState } from "react";
import "./App.css";

function App() {
  const [topic, setTopic] = useState("");
  const [style, setStyle] = useState("romantic");
  const [language, setLanguage] = useState("English"); 
  const [poem, setPoem] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

 
  const placeholders = {
    Romanian: "ex: o noapte ploioasă în oraș, galaxii, mare, cafea și cod...",
    English: "e.g.: a rainy night in the city, galaxies, the sea, coffee and code...",
    French: "ex : une nuit pluvieuse en ville, des galaxies, la mer, du café et du code...",
    Spanish: "ej.: una noche lluviosa en la ciudad, galaxias, el mar, café y código..."
  };

  
  const outputTexts = {
    Romanian: {
      title: "Gata când ești tu gata 🌙",
      description:
        "Alege un topic, un stil și o limbă, apoi apasă Generate poem. Gemini va scrie pentru tine."
    },
    English: {
      title: "Ready when you are 🌙",
      description:
        "Choose a topic, a style, and a language, then press Generate poem. Gemini will write for you."
    },
    French: {
      title: "Prêt quand tu l'es 🌙",
      description:
        "Choisis un thème, un style et une langue, puis appuie sur Generate poem. Gemini écrira pour toi."
    },
    Spanish: {
      title: "Listo cuando tú lo estés 🌙",
      description:
        "Elige un tema, un estilo y un idioma, luego presiona Generate poem. Gemini escribirá para ti."
    }
  };

  const labels = {
    Romanian: {
      topic: "Subiect / Tema poeziei",
      style: "Stil",
      language: "Limbă"
    },
    English: {
      topic: "Topic / Poem theme",
      style: "Style",
      language: "Language"
    },
    French: {
      topic: "Sujet / Thème du poème",
      style: "Style",
      language: "Langue"
    },
    Spanish: {
      topic: "Tema / Tema del poema",
      style: "Estilo",
      language: "Idioma"
    }
  };

  const styleOptions = {
    Romanian: [
      { value: "romantic", label: "Romantic" },
      { value: "sad", label: "Trist / melancolic" },
      { value: "funny", label: "Amuzant" },
      { value: "motivational", label: "Motivațional" },
      { value: "haiku", label: "Haiku" },
      { value: "dark", label: "Dark / dramatic" }
    ],
    English: [
      { value: "romantic", label: "Romantic" },
      { value: "sad", label: "Sad / melancholic" },
      { value: "funny", label: "Funny" },
      { value: "motivational", label: "Motivational" },
      { value: "haiku", label: "Haiku" },
      { value: "dark", label: "Dark / dramatic" }
    ],
    French: [
      { value: "romantic", label: "Romantique" },
      { value: "sad", label: "Triste / mélancolique" },
      { value: "funny", label: "Drôle" },
      { value: "motivational", label: "Motivant" },
      { value: "haiku", label: "Haïku" },
      { value: "dark", label: "Sombre / dramatique" }
    ],
    Spanish: [
      { value: "romantic", label: "Romántico" },
      { value: "sad", label: "Triste / melancólico" },
      { value: "funny", label: "Divertido" },
      { value: "motivational", label: "Motivacional" },
      { value: "haiku", label: "Haiku" },
      { value: "dark", label: "Oscuro / dramático" }
    ]
  };

  const buttonTexts = {
    Romanian: "Generează poezia",
    English: "Generate poem",
    French: "Générer le poème",
    Spanish: "Generar poema"
  };

  const generatedLabel = {
    Romanian: "Poezie generată",
    English: "Generated poem",
    French: "Poème généré",
    Spanish: "Poema generado"
  };

  const currentPlaceholder = placeholders[language] || placeholders.English;
  const currentOutputText = outputTexts[language] || outputTexts.English;
  const currentLabels = labels[language] || labels.English;
  const currentStyleOptions = styleOptions[language] || styleOptions.English;
  const currentButtonText = buttonTexts[language] || buttonTexts.English;
  const currentGeneratedLabel = generatedLabel[language] || generatedLabel.English;

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setPoem("");

    try {
      const response = await fetch("http://localhost:5000/api/poem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic, style, language }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate poem");
      }

      const data = await response.json();
      setPoem(data.poem);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while generating the poem.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-root">
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      <main className="poem-layout">
        <section className="poem-card">
          <header className="poem-header">
            <span className="logo-dot" />
            <div>
              <h1>Poem Generator</h1>
              <p>Powered by Google Gemini ✨</p>
            </div>
          </header>

          <form className="poem-form" onSubmit={handleGenerate}>
            <div className="field">
              <label>{currentLabels.topic}</label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder={currentPlaceholder}
              />
            </div>

            <div className="field-row">
              <div className="field">
                <label>{currentLabels.style}</label>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                >
                  {currentStyleOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label>{currentLabels.language}</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="English">English</option>
                  <option value="Romanian">Română</option>
                  <option value="French">Français</option>
                  <option value="Spanish">Español</option>
                </select>
              </div>
            </div>

            <button className="generate-btn" type="submit" disabled={loading}>
              {loading ? (
                <span className="btn-loader">
                  <span className="loader-dot" />
                  {currentButtonText}
                </span>
              ) : (
                currentButtonText
              )}
            </button>

            {error && <p className="error-text">{error}</p>}
          </form>
        </section>

        <section className="poem-output">
          {!poem && !loading && (
            <div className="placeholder">
              <h2>{currentOutputText.title}</h2>
              <p>{currentOutputText.description}</p>
            </div>
          )}

          {poem && (
            <div className="poem-box">
              <div className="poem-box-header">
                <span className="pill">{currentGeneratedLabel}</span>
              </div>
              <pre className="poem-text">{poem}</pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
