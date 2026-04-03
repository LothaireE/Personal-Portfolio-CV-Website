import { cn } from "@/lib/utils"

interface LinkedInIconProps {
  className?: string
}

export function LinkedInIcon({ className }: LinkedInIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-4 w-4 fill-current", className)}
      aria-hidden="true"
    >
      <path d="M20.447 20.452H17.21V14.8c0-1.348-.027-3.083-1.878-3.083-1.879 0-2.166 1.466-2.166 2.986v5.75H9.03V9h3.112v1.561h.045c.434-.82 1.494-1.683 3.073-1.683 3.287 0 3.894 2.164 3.894 4.977v6.597zM5.337 7.433a1.805 1.805 0 110-3.61 1.805 1.805 0 010 3.61zM6.924 20.452H3.75V9h3.174v11.452z" />
    </svg>
  )
}