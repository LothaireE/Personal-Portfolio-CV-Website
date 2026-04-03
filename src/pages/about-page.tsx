import { motion } from "framer-motion"
import { profile } from "@/data/profile"
import { SeoHead } from "@/components/common/SeoHead"
import  PageTransition  from "@/components/common/PageTransition"
import { useLanguageContext } from "@/context/appContext"
import ExperienceTimeline from "@/components/about/ExperienceTimeline"
import EducationTimeline from "@/components/about/EducationTimeline"
import BiographySection from "@/components/about/BiographySection"
import { fadeUp } from "@/lib/animations";

export default function AboutPage() {
  const { t } = useLanguageContext()

  return (
    <>
      <SeoHead
        title={t("about.seo.title")}
        description={t("about.seo.description")}
      />
      <PageTransition className="bg-background pt-20 text-foreground">
        <section className="border-b border-border py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-muted-foreground">
                {t("about.hero.eyebrow")}
              </p>
              <h1 className="text-4xl font-light md:text-6xl">
                {t("about.hero.title")}
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <BiographySection
            portraitImage={profile.portraitImage}
            name={profile.name}
            biography={profile.biography}
            socialLinks={profile.socialLinks}
          />
        </section>

        <section className="border-t border-border py-24 md:py-32">
          <ExperienceTimeline experiences={profile.experiences} />
        </section>

        <section className="border-t border-border py-24 md:py-32">
          <EducationTimeline education={profile.education} />
        </section>
      </PageTransition>
    </>
  )
}