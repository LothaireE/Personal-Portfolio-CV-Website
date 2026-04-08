import type { ReactNode } from "react"
import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import ExperienceSummary from "@/components/home/ExperienceSummary"
import { ExperienceProps } from "@/types/types"

const featuredExperiences : ExperienceProps[] = [
  {
      id: "1",
      title: "Frontend Developer",
      company: "Company B",
      type: "CDI",
      period: "2022 — today",
      duration: "4 years",
      location: "London",
      workMode: "Hybrid",
      description: "Web interfaces development",
      skills: ["Quality Planning", "Project Management"],
    },
     {
      id: "2",
      title: "Backend Developer",
      company: "Company A",
      type: "CDI",
      period: "2020 - 2022",
      duration: "2 years",
      location: "",
      workMode: "Hybrid",
      description: "Paris",
      skills: [],
    },
  ]
  
const mockT = vi.fn((key: string) => key)

vi.mock("@/context/appContext", () => ({
  useLanguageContext: () => ({
    t: mockT,
  }),
}))

vi.mock("@/lib/animations", () => ({
  fadeUp: {
    initial: {},
    whileInView: {},
    transition: {},
  },
}))

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: { children?: ReactNode }) => <div>{children}</div>,
    article: ({ children }: { children?: ReactNode }) => <article>{children}</article>,
  },
}))


describe("ExperienceSummary", () => {
  

  it("displays proper text", () => {
    render(<ExperienceSummary featuredExperiences={featuredExperiences} />)

    expect(screen.getByText("resume.experience.eyebrow")).toBeInTheDocument()
    expect(screen.getByText("resume.experience.title")).toBeInTheDocument()
  })

  it("display experiences from props", () => {
    render(<ExperienceSummary featuredExperiences={featuredExperiences} />)

    expect(screen.getByText("Frontend Developer")).toBeInTheDocument()
    expect(screen.getByText("Backend Developer")).toBeInTheDocument()
    expect(screen.getByText("Company A")).toBeInTheDocument()
    expect(screen.getByText("2020 - 2022")).toBeInTheDocument()
  })

  it("displays location if it exist", () => {
    render(<ExperienceSummary featuredExperiences={featuredExperiences} />)

    expect(screen.getByText("Company B · London")).toBeInTheDocument()
  })

  it("displays description if it exist", () => {
    render(<ExperienceSummary featuredExperiences={featuredExperiences} />)

    expect(screen.getByText("Web interfaces development")).toBeInTheDocument()
  })

  it("display skills if they exist", () => {
    render(<ExperienceSummary featuredExperiences={featuredExperiences} />)

    expect(screen.getByText("Quality Planning")).toBeInTheDocument()
    expect(screen.getByText("Project Management")).toBeInTheDocument()
  })

  it("does no display empty location", () => {
    render(<ExperienceSummary featuredExperiences={featuredExperiences} />)

    expect(screen.queryByText("Company A ·")).not.toBeInTheDocument()
    expect(screen.getByText("Company A")).toBeInTheDocument()
  })
})