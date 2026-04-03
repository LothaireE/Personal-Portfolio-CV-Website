import { Suspense, lazy } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { SkipLink } from "@/components/common/SkipLink"
import { useLanguageContext } from "./context/appContext"

const HomePage = lazy(() => import("@/pages/home-page"))
const AboutPage = lazy(() => import("@/pages/about-page"))
const ContactPage = lazy(() => import("@/pages/contact-page"))
const NotFoundPage = lazy(() => import("@/pages/not-found-page"))

function PageLoader() {
    const { t } = useLanguageContext()
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
        {t("common.loading")}
      </p>
    </main>
  )
}

export default function App() {

  const location = useLocation()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkipLink />
      <Header />

      <div className="flex min-h-screen flex-col">
        <div className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <AnimatePresence 
                mode="wait"
                initial={true}
              >
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/404" element={<NotFoundPage />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </div>

        <Footer />
      </div>
    </div>
  )
}