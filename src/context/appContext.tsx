import { useContext } from "react"
import LanguageContext from "@/context/LanguageContext"
import ProfileContext from "@/context/ProfileContext"


export function useLanguageContext() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }

  return context
}


export function useProfileContext() {
  const context = useContext(ProfileContext)

  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider")
  }

  return context
}


