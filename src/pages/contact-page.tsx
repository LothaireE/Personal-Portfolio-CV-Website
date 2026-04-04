import { Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { LinkedInIcon } from "@/components/icons/LinkedInIcon"
import { SeoHead } from "@/components/common/SeoHead"
import  PageTransition  from "@/components/common/PageTransition"
import { useLanguageContext, useProfileContext } from "@/context/appContext"
import ContactForm, { ContactFormData } from "@/components/contact/ContactForm"
import ContactCard from "@/components/contact/ContactCard"
import { fadeUp } from "@/lib/animations";


export default function ContactPage() {
  const { t } = useLanguageContext()
  const { profile } = useProfileContext()


  const handleFormSubmit = async (data: ContactFormData) => {
    try {
      console.log("Form submitted:", data)

      // TODO: implementer l'envoiu
      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data),
      // })
      //
      // if (!response.ok) {
      //   throw new Error("Failed to submit contact form")
      // }

      // retourner quelque chose
      return { success: true }
    } catch (error) {
      console.error("Contact form submission failed:", error)
      throw error instanceof Error
        ? error
        : new Error("Unknown submission error")
    }
  }

  const handleFormError = (error: Error) => {
    console.error("Contact form error:", error)
  }

  return (
    <>
      <SeoHead
        title={t("contact.seo.title")}
        description={t("contact.seo.description")}
      />

      <PageTransition className="bg-background pt-20 text-foreground">
        <section className="border-b border-border py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-muted-foreground">
                {t("contact.hero.eyebrow")}
              </p>
              <h1 className="text-4xl font-light md:text-6xl">
                {t("contact.hero.title")}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                {t("contact.hero.description")}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
            <motion.div {...fadeUp}>
              <Card className="border-border shadow-none">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-8">
                    <p className="mb-3 text-sm uppercase tracking-[0.25em] text-muted-foreground">
                      {t("contact.form.eyebrow")}
                    </p>
                    <h2 className="text-2xl font-light md:text-3xl">
                      {t("contact.form.title")}
                    </h2>
                  </div>

                  <ContactForm 
                    handleFormSubmit={handleFormSubmit}
                    onError={handleFormError}
                   />
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeUp} className="space-y-6">
              <div className="grid gap-4">
                <ContactCard
                  icon={<Mail className="h-5 w-5" />}
                  title={t("contact.cards.email.title")}
                  value={profile.email}
                  href={`mailto:${profile.email}`}
                />

                <ContactCard
                  icon={<Phone className="h-5 w-5" />}
                  title={t("contact.cards.phone.title")}
                  value={profile.phone}
                  href={`tel:${profile.phone}`}
                />

                <ContactCard
                  icon={<MapPin className="h-5 w-5" />}
                  title={t("contact.cards.location.title")}
                  value={profile.location}
                />

                <ContactCard
                  icon={<LinkedInIcon className="h-5 w-5" />}
                  title={t("contact.cards.linkedin.title")}
                  value={t("contact.cards.linkedin.value")}
                  href={profile.socialLinks.linkedin}
                  external
                />
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {t("contact.availability.label")}
                </p>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  {profile.availability}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </>
  )
}
