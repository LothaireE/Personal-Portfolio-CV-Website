import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import ThemeToggle from "@/components/layout/ThemeToggle"
import { LanguageToggle } from "@/components/common/LanguageToggle"
import { MobileNav } from "@/components/layout/MobileNav"
import { profile } from "@/data/profile"
import { useLanguageContext } from "@/context/appContext"

function navLinkClassName({ isActive }: { isActive: boolean }) {
  return [
    "text-sm uppercase tracking-[0.2em] transition-colors",
    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
  ].join(" ")
}

export default function Header() {
  const location = useLocation()
  const { t } = useLanguageContext()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const isHome = location.pathname === "/"
  const isTransparent = isHome && !isScrolled

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isTransparent
          ? "bg-transparent text-foreground"
          : "border-b border-border bg-background/90 text-foreground backdrop-blur-md",
      ].join(" ")}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link
          to="/"
          className="text-xs uppercase tracking-[0.35em] transition-opacity hover:opacity-80"
        >
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClassName}>
            {t("header.nav.home")}
          </NavLink>
          <NavLink to="/about" className={navLinkClassName}>
            {t("header.nav.about")}
          </NavLink>
          <NavLink to="/contact" className={navLinkClassName}>
            {t("header.nav.contact")}
          </NavLink>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageToggle isTransparent={isTransparent} />
          <ThemeToggle isTransparent={isTransparent} />
        </div>

        <div className="md:hidden">
          <MobileNav
            isOpen={isOpen}
            onOpenChange={setIsOpen}
            isTransparent={isTransparent}
          />
        </div>
      </div>
    </header>
  )
}