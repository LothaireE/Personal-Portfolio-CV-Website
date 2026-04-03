import { Link } from "react-router-dom"
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
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_35%),linear-gradient(to_bottom,rgba(15,23,42,0.92),rgba(15,23,42,1))]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-24 text-center lg:px-8">
            <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={heroTransition}
            className="mb-10 overflow-hidden rounded-full border border-white/10 shadow-2xl"
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
            className="mb-4 max-w-2xl text-sm font-light uppercase tracking-[0.35em] text-white/70"
            >
            {heroIntroduction}
            </motion.p>

            <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...heroTransition, delay: 0.2 }}
            className="max-w-4xl text-4xl font-light uppercase tracking-widest md:text-6xl"
            >
            {name}
            </motion.h1>

            <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...heroTransition, delay: 0.3 }}
            className="mt-6 max-w-3xl text-base font-light text-white/80 md:text-xl"
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
                <Link to="/about">
                {t("home.hero.ctaAbout")}
                </Link>
            </Button>

            <Button
                asChild
                size="lg"
                variant="outline"
                className="min-w-45 border-white/20 bg-transparent text-white hover:bg-white hover:text-slate-900"
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