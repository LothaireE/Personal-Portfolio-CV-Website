import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import { useLanguageContext } from "@/context/appContext";

const CertificationsList = ({ certifications } : {certifications: string[]}) => {
    const { t } = useLanguageContext()
    return (

      <motion.div {...fadeUp}>
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-muted-foreground">
          {t("resume.certifications.eyebrow")}
        </p>
        <h2 className="mb-8 text-3xl font-light md:text-5xl">
          {t("resume.certifications.title")}
        </h2>

        <div className="space-y-4">
          {certifications?.map((certification) => (
            <div
              key={certification}
              className="border-b border-border pb-4 text-base text-muted-foreground"
            >
              {certification}
            </div>
          ))}
        </div>
      </motion.div>

    );
};

export default CertificationsList;