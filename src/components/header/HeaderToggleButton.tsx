import type { ReactNode } from "react"
import { motion } from "framer-motion"

type HeaderToggleOption<T extends string> = {
  label: ReactNode
  value: T
  ariaLabel?: string
  title?: string
}

type HeaderToggleButtonProps<T extends string> = {
  toggleBtnId: string
  isTransparent?: boolean
  value: T
  options: [HeaderToggleOption<T>, HeaderToggleOption<T>]
  onChange: (value: T) => void
}

export function HeaderToggleButton<T extends string>({
  toggleBtnId,
  isTransparent = false,
  value,
  options,
  onChange,
}: HeaderToggleButtonProps<T>) {
  const containerClass = [
    "relative inline-grid grid-cols-2 items-center rounded-full border p-[2px] transition-colors",
    isTransparent
      ? "border-black/10 bg-white/10 text-foreground backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
      : "border-border bg-background/80 text-foreground backdrop-blur-sm",
  ].join(" ")

  const itemClass = [
    "relative z-10 rounded-full px-2 py-1 text-xs uppercase tracking-[0.14em] transition-colors duration-200 active:scale-[0.98]",
    "flex items-center justify-center",
  ].join(" ")

  return (
    <div className={containerClass}>
      {options.map((option) => {
        const isActive = value === option.value

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`${itemClass} ${
              isActive
                ? "text-background dark:text-black"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label={option.ariaLabel}
            title={option.title}
            aria-pressed={isActive}
          >
            {isActive && (
              <motion.div
                // layoutId="header-toggle-thumb"
                layoutId={`header-toggle-thumb-${toggleBtnId}`}
                className="absolute inset-0 rounded-full bg-foreground dark:bg-white"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}

            <span className="relative z-10">{option.label}</span>
          </button>
        )
      })}
    </div>
  )
}