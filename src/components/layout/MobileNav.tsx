
import { useEffect } from "react"
import { NavLink, useLocation } from "react-router"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/header/ThemeToggle"
import { LanguageToggle } from "@/components/header/LanguageToggle"
import { useLanguageContext, useProfileContext } from "@/context/appContext"

interface MobileNavProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  isTransparent?: boolean
}

function mobileNavLinkClassName({ isActive }: { isActive: boolean }) {
  return [
    "text-lg uppercase tracking-[0.2em] transition-colors",
    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
  ].join(" ")
}

export function MobileNav({
  isOpen,
  onOpenChange,
  isTransparent = false,
}: MobileNavProps) {
  const location = useLocation()
  const { profile } = useProfileContext()
  const { t } = useLanguageContext()

  useEffect(() => {
    onOpenChange(false)
  }, [location.pathname, onOpenChange])

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={isTransparent ? "text-foreground hover:bg-accent/10" : ""}
          aria-label={t("header.mobileMenu.open")}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[320px] border-l border-border">
        <SheetHeader>
          <SheetTitle className="text-left text-xs uppercase tracking-[0.3em]">
            {profile.name}
          </SheetTitle>
        </SheetHeader>

        <div className="mt-10 pl-5 flex h-full flex-col justify-between">
          <div className="space-y-10">
            <nav className="flex flex-col gap-5">
              <NavLink to="/" className={mobileNavLinkClassName}>
                {t("header.nav.home")}
              </NavLink>

              <NavLink to="/about" className={mobileNavLinkClassName}>
                {t("header.nav.about")}
              </NavLink>

              <NavLink to="/contact" className={mobileNavLinkClassName}>
                {t("header.nav.contact")}
              </NavLink>
            </nav>

            <div className="flex flex-col gap-4 border-t border-border pt-6">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {t("header.language.label")}
                </p>
                <LanguageToggle />
              </div>

              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {t("header.theme.label")}
                </p>
                {/* <ThemeToggle /> */}
                <ThemeToggle  />
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}