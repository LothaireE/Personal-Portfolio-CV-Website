import { LinkedInIcon } from "@/components/icons/LinkedInIcon"
import { useLanguageContext, useProfileContext } from "@/context/appContext"


function Footer() {
  const { t } = useLanguageContext()
  const { profile } = useProfileContext()
  const year = new Date().getFullYear()

  return (
<footer className="border-t border-border bg-background">
  <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-2 lg:px-8">
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
        {profile.name}
      </p>
      <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
        © {year} {profile.name}. {t("footer.rights")}
      </p>
    </div>

    <div className="flex items-start justify-start lg:justify-end">
      <a
        href={profile.socialLinks.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label={t("footer.linkedin")}
        className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
      >
        <LinkedInIcon className="h-4 w-4" />
        <span>LinkedIn</span>
      </a>
    </div>
  </div>
</footer>
  )
}

export default Footer