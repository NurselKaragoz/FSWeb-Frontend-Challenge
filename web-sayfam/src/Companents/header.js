import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);

    document.body.classList.toggle("dark", savedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;

    localStorage.setItem("darkMode", newDarkMode);

    document.body.classList.toggle("dark", newDarkMode);

    setDarkMode(newDarkMode);
  };
  const { t, i18n } = useTranslation();

  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang);
  };
  return (
    <div className="flex justify-end dark:bg-colors-black200">
      <button
        onClick={toggleDarkMode}
        className="bg-blue-500 text-colors-graytext px-4 py-2 "
      >
        <p className=" text-colors-graytext">
          {darkMode ? "LIGHT MODE" : "DARK MODE"}
        </p>
      </button>

      <p className="border-l-2 pl-5 text-colors-graytext">
        <button onClick={() => clickHandle("en")}>
          <span className="text-colors-bluex">TÜRKÇE </span>'YE GEÇ
        </button>
        <button onClick={() => clickHandle("tr")}>
          <span className="text-colors-bluex">İngilizce </span>'YE GEÇ
        </button>
        <h3>{t("hoşgeldin")}</h3>
      </p>
    </div>
  );
}

export default Header;
