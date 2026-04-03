import { motion } from "framer-motion"
import { useLanguageContext } from "@/context/appContext"
import { fadeUp } from "@/lib/animations";
import { Button } from "../ui/button";
import { LinkedInIcon } from "../icons/LinkedInIcon";

const BiographySection = ({
    portraitImage,
    name,
    biography,
    socialLinks
} : {
    portraitImage: string;
    name: string;
    biography: string;
    socialLinks: {
        linkedin: string;
    };
}) => {
    const { t } = useLanguageContext()
    return (
<div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[minmax(280px,360px)_1fr] lg:px-8">
            <motion.div {...fadeUp}>
              <div className="overflow-hidden  border border-border bg-muted">
                <img
                  src={portraitImage}
                  alt={name}
                  className="aspect-3/4 w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="flex flex-col justify-center">
              <p className="mb-6 text-sm uppercase tracking-[0.25em] text-muted-foreground">
                {t("about.biography.eyebrow")}
              </p>

              <div className="space-y-6 text-base leading-8 text-muted-foreground md:text-lg">
                  <p>{biography}</p>
              </div>

              <div className="mt-10">
                <Button asChild variant="outline" className="gap-2">
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                    <span>{t("about.biography.linkedin")}</span>
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
    );
};

export default BiographySection;