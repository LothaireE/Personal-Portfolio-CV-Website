import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguageContext } from "@/context/appContext"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

interface ThemeToggleProps {
  isTransparent?: boolean
  variant?: "icon" | "group"
}

const ThemeToggle = ({
  isTransparent = false,
  variant = "icon",
}: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme()
  const { t } = useLanguageContext()

  const currentTheme = theme === "dark" ? "dark" : "light"

  const containerClass = isTransparent
    ? "border-white/10 bg-transparent text-foreground"
    : "bg-background"

    const itemClass = isTransparent
    ? "text-foreground hover:bg-accent/10 data-[state=on]:bg-accent/20 data-[state=on]:text-foreground"
    : ""

  if (variant === "group") {
    return (
      <ToggleGroup
        type="single"
        value={currentTheme}
        onValueChange={(value) => {
          if (value) setTheme(value)
        }}
        className={`inline-flex rounded-full border p-1 ${containerClass}`}
      >
        <ToggleGroupItem
          value="light"
          aria-label={t("theme.light")}
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm ${itemClass}`}
        >
          <Sun className="h-4 w-4" />
          <span>{t("theme.light")}</span>
        </ToggleGroupItem>

        <ToggleGroupItem
          value="dark"
          aria-label={t("theme.dark")}
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm ${itemClass}`}
        >
          <Moon className="h-4 w-4" />
          <span>{t("theme.dark")}</span>
        </ToggleGroupItem>
      </ToggleGroup>
    )
  }

  return (
    <ToggleGroup
      type="single"
      value={currentTheme}
      onValueChange={(value) => {
        if (value) setTheme(value)
      }}
      className={`inline-flex rounded-full border ${containerClass}`}
    >
      <ToggleGroupItem
        value="light"
        aria-label={t("theme.light")}
        title={t("theme.light")}
        className={`rounded-full px-3 ${itemClass}`}
      >
        <span>{t("theme.light")}</span>
      </ToggleGroupItem>

      <ToggleGroupItem
        value="dark"
        aria-label={t("theme.dark")}
        title={t("theme.dark")}
        className={`rounded-full px-3 ${itemClass}`}
      >
        <span>{t("theme.dark")}</span>
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export default ThemeToggle;