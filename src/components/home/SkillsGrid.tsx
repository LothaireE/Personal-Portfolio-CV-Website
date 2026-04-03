import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import { useLanguageContext } from "@/context/appContext";


const SkillsGrid = ({
    skills
}: {
    skills: string[]
}) => {
    const { t } = useLanguageContext()
    return (

      <motion.div {...fadeUp}>
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-muted-foreground">
          {t("resume.skills.eyebrow")}
        </p>
        <h2 className="mb-8 text-3xl font-light md:text-5xl">
          {t("resume.skills.title")}
        </h2>

        <div className="flex flex-wrap gap-3">
          {skills?.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border px-4 py-2 text-sm text-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

    );
};

export default SkillsGrid;

