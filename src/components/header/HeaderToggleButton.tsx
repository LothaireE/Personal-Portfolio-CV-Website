import type { ReactNode } from "react"

type HeaderToggleOption<T extends string> = {
  label: ReactNode
  value: T
  ariaLabel?: string
  title?: string
}

type HeaderToggleButtonProps<T extends string> = {
  isTransparent?: boolean
  value: T
  options: [HeaderToggleOption<T>, HeaderToggleOption<T>]
  onChange: (value: T) => void
}

export function HeaderToggleButton<T extends string>({
  isTransparent = false,
  value,
  options,
  onChange,
}: HeaderToggleButtonProps<T>) {
  const containerClass = [
    "inline-flex items-center rounded-full border p-[2px] transition-colors",
    isTransparent
      ? "border-black/10 bg-white/10 text-foreground backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
      : "border-border bg-background/80 text-foreground backdrop-blur-sm",
  ].join(" ")

  const itemClass = [
    "rounded-full px-2 py-1 text-xs uppercase tracking-[0.14em] transition-all",
    "text-muted-foreground hover:text-foreground",
  ].join(" ")

  const activeClass =
    "bg-foreground text-background dark:bg-white dark:text-black"

  return (
    <div className={containerClass}>
      {options.map((option) => {
        const isActive = value === option.value

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`${itemClass} ${isActive ? activeClass : ""}`}
            aria-label={option.ariaLabel}
            title={option.title}
            aria-pressed={isActive}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}