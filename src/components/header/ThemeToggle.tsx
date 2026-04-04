import { useTheme } from "next-themes"
import { useLanguageContext } from "@/context/appContext"
import { HeaderToggleButton } from "@/components/header/HeaderToggleButton"


type ThemeToggleProps = {
  isTransparent?: boolean
}


export function ThemeToggle({ isTransparent = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const { t } = useLanguageContext()

  const currentTheme = theme === "dark" ? "dark" : "light"

  return (
    <HeaderToggleButton
      isTransparent={isTransparent}
      value={currentTheme}
      onChange={setTheme}
      options={[
        {
          label: t("theme.light"),
          value: "light",
          ariaLabel: t("theme.light"),
          title: t("theme.light"),
        },
        {
          label: t("theme.dark"),
          value: "dark",
          ariaLabel: t("theme.dark"),
          title: t("theme.dark"),
        },
      ]}
    />
  )
}