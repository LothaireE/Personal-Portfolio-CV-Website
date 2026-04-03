import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useLanguageContext } from "@/context/appContext"

export type ContactFormData = {
  name: string
  email: string
  projectType: string
  message: string
}

type ContactFormProps = {
  handleFormSubmit: (data: ContactFormData) => Promise<unknown> | unknown
  onError?: (error: Error) => void
}

const ContactForm = ({ handleFormSubmit, onError }: ContactFormProps) => {
  const { t } = useLanguageContext()

  const [projectType, setProjectType] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitError, setSubmitError] = React.useState<string | null>(null)

  const validateForm = (data: ContactFormData) => {
    const errors: string[] = []
    if (!data.name.trim()) {
      errors.push(t("contact.form.errors.nameRequired"))
    }

    if (!data.email.trim()) {
      errors.push(t("contact.form.errors.emailRequired"))
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      errors.push(t("contact.form.errors.emailInvalid"))
    }

    if (!data.projectType.trim()) {
      errors.push(t("contact.form.errors.projectTypeRequired"))
    }

    if (!data.message.trim()) {
      errors.push(t("contact.form.errors.messageRequired"))
    }

    if (errors.length > 0) {
      throw new Error(errors.join(". "))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    const data: ContactFormData = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      projectType: projectType.trim(),
      message: String(formData.get("message") ?? "").trim(),
    }

    try {
      validateForm(data)

      setIsSubmitting(true)
      await handleFormSubmit(data)

      form.reset()
      setProjectType("")
    } catch (error) {
      const normalizedError =
        error instanceof Error
          ? error
          : new Error(t("contact.form.errors.generic"))

      setSubmitError(normalizedError.message)
      onError?.(normalizedError)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{t("contact.form.name")}</Label>
          <Input
            id="name"
            name="name"
            placeholder={t("contact.form.namePlaceholder")}
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">{t("contact.form.email")}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={t("contact.form.emailPlaceholder")}
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectType">{t("contact.form.projectType")}</Label>
        <Select value={projectType} onValueChange={setProjectType}>
          <SelectTrigger id="projectType" disabled={isSubmitting}>
            <SelectValue
              placeholder={t("contact.form.projectTypePlaceholder")}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="quality">
              {t("contact.form.options.quality")}
            </SelectItem>
            <SelectItem value="project-management">
              {t("contact.form.options.projectManagement")}
            </SelectItem>
            <SelectItem value="consulting">
              {t("contact.form.options.consulting")}
            </SelectItem>
            <SelectItem value="other">
              {t("contact.form.options.other")}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t("contact.form.message")}</Label>
        <Textarea
          id="message"
          name="message"
          placeholder={t("contact.form.messagePlaceholder")}
          className="min-h-45"
          disabled={isSubmitting}
        />
      </div>

      {submitError ? (
        <p className="text-sm text-destructive">{submitError}</p>
      ) : null}

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting
          ? t("contact.form.submitting")
          : t("contact.form.submit")}
      </Button>
    </form>
  )
}

export default ContactForm