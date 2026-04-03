import { Button } from "@/components/ui/button"
import { useLanguageContext } from "@/context/appContext"

interface LanguageToggleProps {
  isTransparent?: boolean
}

export function LanguageToggle({ isTransparent = false }: LanguageToggleProps) {
  const { locale, setLocale } = useLanguageContext()


  const baseClass = isTransparent
    ? "text-foreground hover:bg-accent/10"
    : ""

  const activeClass = isTransparent
    ? "bg-accent/20 text-foreground"
    : ""
  return (
      <div className="flex items-center gap-1">
        <Button
          type="button"
          variant={isTransparent ? "ghost" : locale === "en" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLocale("en")}
          className={`${baseClass} ${locale === "en" ? activeClass : ""}`}
        >
          EN
        </Button>

        <Button
          type="button"
          variant={isTransparent ? "ghost" : locale === "fr" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLocale("fr")}
          className={`${baseClass} ${locale === "fr" ? activeClass : ""}`}
        >
          FR
        </Button>
      </div>
    )
}