import { useLanguageContext } from "@/context/appContext"
import { HeaderToggleButton } from "@/components/header/HeaderToggleButton"

type LanguageToggleProps = {
  isTransparent?: boolean
}

export function LanguageToggle({ isTransparent = false }: LanguageToggleProps) {
  const { locale, setLocale } = useLanguageContext()

  return (
    <HeaderToggleButton
      isTransparent={isTransparent}
      value={locale}
      onChange={setLocale}
      options={[
        { label: "EN", value: "en", ariaLabel: "English", title: "English" },
        { label: "FR", value: "fr", ariaLabel: "Français", title: "Français" },
      ]}
    />
  )
}