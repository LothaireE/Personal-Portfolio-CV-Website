import { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"


interface ContactCardProps {
  icon: ReactNode
  title: string
  value: string
  href?: string
  external?: boolean
}

const ContactCard = ({
  icon,
  title,
  value,
  href,
  external = false,
}: ContactCardProps) =>{
  const content = (
    <Card className="border-border shadow-none">
      <CardContent className="flex items-start gap-4 p-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            {title}
          </p>
          <p className="mt-2 wrap-break-words text-base text-foreground">{value}</p>
        </div>
      </CardContent>
    </Card>
  )

  if (!href) {
    return content
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="block transition-transform hover:-translate-y-0.5"
    >
      {content}
    </a>
  )
}


export default ContactCard