import { useLanguageContext } from "@/context/appContext"

export function SkipLink() {
  const { t } = useLanguageContext()

  return (
    <a
      href="#main-content"
      className="sr-only z-60 rounded-md border bg-background px-4 py-2 text-sm text-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      aria-label={t("common.skipLink.description")}
    >
      {t("common.skipLink.label")}
    </a>
  )
}