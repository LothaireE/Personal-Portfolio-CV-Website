import { useContext } from "react"
import LanguageContext from "@/context/useLanguageContext"


export function useLanguageContext() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }

  return context
}


