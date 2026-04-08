import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import HomePage from "@/pages/home-page"
import type { ReactNode } from "react"

const mockT = vi.fn((key: string) => key)

const mockProfile = {
  portraitImage: "/image.jpg",
  name: "John Doe",
  heroIntroduction: "Hello",
  tagline: "Dev",
  skills: ["React"],
  certifications: ["AWS"],
  experiences: [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ],
}

vi.mock("@/context/appContext", () => ({
  useLanguageContext: () => ({ t: mockT }),
  useProfileContext: () => ({ profile: mockProfile }),
}))

vi.mock("@/components/common/SeoHead", () => ({
  SeoHead: () => <div data-testid="seo-head" />,
}))

vi.mock("@/components/common/PageTransition", () => ({
  default: ({ children }: { children : ReactNode }) => (
    <div data-testid="page-transition">{children}</div>
  ),
}))

vi.mock("@/components/home/HeroSection", () => ({
  default: () => <div data-testid="hero-section" />,
}))

vi.mock("@/components/home/ExperienceSummary", () => ({
  default: () => <div data-testid="experience-summary" />,
}))

vi.mock("@/components/home/SkillsGrid", () => ({
  default: () => <div data-testid="skills-grid" />,
}))

vi.mock("@/components/home/CertificationsList", () => ({
  default: () => <div data-testid="certifications-list" />,
}))

describe("HomePage", () => {
  it("calls correct components", () => {
    render(<HomePage />)

    expect(screen.getByTestId("seo-head")).toBeInTheDocument()
    expect(screen.getByTestId("page-transition")).toBeInTheDocument()
    expect(screen.getByTestId("hero-section")).toBeInTheDocument()
    expect(screen.getByTestId("experience-summary")).toBeInTheDocument()
    expect(screen.getByTestId("skills-grid")).toBeInTheDocument()
    expect(screen.getByTestId("certifications-list")).toBeInTheDocument()
  })
})