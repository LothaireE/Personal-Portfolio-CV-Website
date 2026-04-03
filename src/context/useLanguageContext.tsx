import { createContext } from "react";

type Locale = "fr" | "en"

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  t: (path: string) => string
}

const LanguageContext = createContext<LanguageContextValue >({
    locale: "en",
    setLocale: () => {},
    toggleLocale: () => {},
    t: (path: string) => path,
})

export default LanguageContext

