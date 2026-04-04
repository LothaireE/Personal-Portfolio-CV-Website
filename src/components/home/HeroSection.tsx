import { Link } from "react-router"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useLanguageContext } from "@/context/appContext"
import ScrollIndicator from "./ScrollIndicator"
import { heroTransition } from "@/lib/animations"


const HeroSection = ({
    portraitImage = "",
    name = "",
    heroIntroduction = "",
    tagline = "",
} : {
    portraitImage: string
    name: string
    heroIntroduction: string
    tagline: string
}) => {
    const { t } = useLanguageContext()

    return (
    <>

    {/* radiant  */}
    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(248,250,252,0.96),rgba(241,245,249,0.9),rgba(255,255,255,1))] dark:bg-linear-to-b dark:from-zinc-900 dark:via-zinc-950 dark:to-black" />
    <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-none" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_32%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_30%)]" />
    {/*  */}

  <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-24 pt-32 text-center lg:px-8">
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={heroTransition}
      className="mb-10 overflow-hidden rounded-full border border-slate-300/60 shadow-xl dark:border-white/10 dark:shadow-2xl"
    >
      <img
        src={portraitImage}
        alt={`${name} portrait`}
        className="h-56 w-56 object-cover md:h-72 md:w-72"
      />
    </motion.div>

    <motion.p
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...heroTransition, delay: 0.1 }}
      className="mb-4 max-w-2xl text-sm font-light uppercase tracking-[0.35em] text-slate-600 dark:text-white/70"
    >
      {heroIntroduction}
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...heroTransition, delay: 0.2 }}
      className="max-w-4xl text-4xl font-light uppercase tracking-widest text-slate-900 md:text-6xl dark:text-white"
    >
      {name}
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...heroTransition, delay: 0.3 }}
      className="mt-6 max-w-3xl text-base font-light text-slate-600 md:text-xl dark:text-white/80"
    >
      {tagline}
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...heroTransition, delay: 0.4 }}
      className="mt-10 flex flex-col gap-4 sm:flex-row"
    >
      <Button asChild size="lg" className="min-w-45">
        <Link to="/about">{t("home.hero.ctaAbout")}</Link>
      </Button>

      <Button
        asChild
        size="lg"
        variant="outline"
        className="min-w-45 border-slate-300 bg-white/70 text-slate-900 backdrop-blur-sm hover:bg-slate-100 dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-slate-900"
      >
        <Link to="/contact">{t("home.hero.ctaContact")}</Link>
      </Button>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <ScrollIndicator textContent={t("home.scroll")} />
    </motion.div>
  </div>
</>
    
        

    );
};

export default HeroSection;