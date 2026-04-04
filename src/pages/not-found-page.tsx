import { Link } from "react-router"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SeoHead } from "@/components/common/SeoHead"
import PageTransition from "@/components/common/PageTransition"
import { useLanguageContext } from "@/context/appContext"

export default function NotFoundPage() {
  const { t } = useLanguageContext()

  return (
    <>
      <SeoHead
        title={t("notFound.seo.title")}
        description={t("notFound.seo.description")}
      />

      <PageTransition className="flex min-h-screen items-center bg-background px-6 pt-20 text-foreground">
        <div className="mx-auto w-full max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground"
          >
            404
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
            className="text-4xl font-light md:text-6xl"
          >
            {t("notFound.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg"
          >
            {t("notFound.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
            className="mt-10"
          >
            <Button asChild size="lg">
              <Link to="/">{t("notFound.cta")}</Link>
            </Button>
          </motion.div>
        </div>
      </PageTransition>
    </>
  )
}