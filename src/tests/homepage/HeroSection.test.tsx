import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import HeroSection from "../../components/home/HeroSection"
import type { ReactNode } from "react"


vi.mock("@/context/appContext", () => ({
  useLanguageContext: () => ({
    t: (key: string) => key,
  }),
}))

vi.mock("react-router", () => ({
  Link: ({ to, children }: {to: string, children?: ReactNode }) => <a href={to}>{children}</a>,
}))

vi.mock("./ScrollIndicator", () => ({
  default: ({ textContent }: {textContent:string}) => (
    <div>{textContent}</div>
  ),
}))

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: { children?: ReactNode }) => <div>{children}</div>,
    p: ({ children }: { children?: ReactNode }) => <p>{children}</p>,
    h1: ({ children }: { children?: ReactNode }) => <h1>{children}</h1>,
  },
}))

vi.mock("@/components/ui/button", () => ({
  Button: ({ children }: { children?: ReactNode }) => <button>{children}</button>,
}))

describe("HeroSection", () => {
  const props = {
    portraitImage: "/image.jpg",
    name: "Jane Doe",
    heroIntroduction: "Hello world",
    tagline: "Fullstack Developer",
  }

  it("display profile main infos", () => {
    render(<HeroSection {...props} />)

    expect(screen.getByText("Hello world")).toBeInTheDocument()
    expect(screen.getByText("Jane Doe")).toBeInTheDocument()
    expect(screen.getByText("Fullstack Developer")).toBeInTheDocument()
  })

  it("display image with good alt", () => {
    render(<HeroSection {...props} />)

    const img = screen.getByAltText("Jane Doe portrait")
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute("src", "/image.jpg")
  })

  it("display buttons and links", () => {
    render(<HeroSection {...props} />)

    const aboutLink = screen.getByText("home.hero.ctaAbout")
    const contactLink = screen.getByText("home.hero.ctaContact")

    expect(aboutLink.closest("a")).toHaveAttribute("href", "/about")
    expect(contactLink.closest("a")).toHaveAttribute("href", "/contact")
  })

  it("display scroll indicator with proper texte", () => {
    render(<HeroSection {...props} />)

    const scrollIndicator = screen.getByText("home.scroll")
    expect(scrollIndicator).toBeInTheDocument()
  })
})