import { motion } from "framer-motion"
import { useLanguageContext } from "@/context/appContext"
import { fadeUp } from "@/lib/animations";
import { ExperienceProps } from "@/types/types";



const ExperienceTimeline = ({
    experiences
} : {
    experiences: ExperienceProps[]
}) => {
    const { t } = useLanguageContext()

    return (
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <motion.div {...fadeUp} className="mb-16 max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-muted-foreground">
                {t("about.experience.eyebrow")}
              </p>
              <h2 className="text-3xl font-light md:text-5xl">
                {t("about.experience.title")}
              </h2>
            </motion.div>

            <div className="space-y-12">
              {experiences?.map((experience, index) => (
                <motion.article
                  key={experience.id}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                  className="grid gap-6 border-l border-border pl-6 md:grid-cols-[180px_1fr]"
                >
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                      {experience.period}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {experience.duration}
                    </p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-7.75 top-1.5 h-3 w-3 rounded-full bg-primary" />

                    <h3 className="text-2xl font-light">{experience.title}</h3>

                    <p className="mt-1 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                      {experience.company}
                      {experience.type ? ` · ${experience.type}` : ""}
                      {experience.location ? ` · ${experience.location}` : ""}
                      {experience.workMode ? ` · ${experience.workMode}` : ""}
                    </p>

                    {experience.description && (
                      <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
                        {experience.description}
                      </p>
                    )}

                    {experience.skills?.length ? (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.12em] text-muted-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
    );
};

export default ExperienceTimeline;