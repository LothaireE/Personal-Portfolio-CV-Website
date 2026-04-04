
import { useLanguageContext, useProfileContext } from "@/context/appContext"
import { SeoHead } from "@/components/common/SeoHead"
import PageTransition from "@/components/common/PageTransition"
import HeroSection from "@/components/home/HeroSection"
import ExperienceSummary from "@/components/home/ExperienceSummary"
import SkillsGrid from "@/components/home/SkillsGrid"
import CertificationsList from "@/components/home/CertificationsList"


export default function HomePage() {
  const { t } = useLanguageContext()
  const { profile } = useProfileContext()
  const featuredExperiences = profile.experiences.slice(0, 4)

  return (
    <>
    <SeoHead
      title={t("home.seo.title")}
      description={t("home.seo.description")}
    />
     <PageTransition className="bg-background text-foreground">
       <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-900 text-white">
      <HeroSection 
              portraitImage={profile.portraitImage}
              name={profile.name}
              heroIntroduction={profile.heroIntroduction}
              tagline={profile.tagline}
            />

       </section>
      
      <section className="py-24 md:py-32">
        <ExperienceSummary featuredExperiences={featuredExperiences} />
      </section>
      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <SkillsGrid skills={profile.skills} />
          <CertificationsList certifications={profile.certifications} />
        </div>
      </section>
      </PageTransition>
    </>

  )
}
