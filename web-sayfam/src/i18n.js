import i18n, { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n.use(initReactI18next).use(Backend).init({
  lang: "tr",
});
export default i18n;
