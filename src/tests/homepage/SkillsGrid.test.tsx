import type { ReactNode } from "react"
import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import SkillsGrid from "@/components/home/SkillsGrid"

const skills = ["React", "TypeScript", "Node.js"]

const mockT = vi.fn((key: string) => key)

vi.mock("@/context/appContext", () => ({
  useLanguageContext: () => ({
    t: mockT,
  }),
}))

vi.mock("@/lib/animations", () => ({
  fadeUp: {},
}))

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: { children?: ReactNode }) => <div>{children}</div>,
  },
}))


describe("SkillsGrid", () => {

  it("display text", () => {
    render(<SkillsGrid skills={skills} />)

    expect(screen.getByText("resume.skills.eyebrow")).toBeInTheDocument()
    expect(screen.getByText("resume.skills.title")).toBeInTheDocument()
  })

  it("Display skills list", () => {
    render(<SkillsGrid skills={skills} />)

    expect(screen.getByText("React")).toBeInTheDocument()
    expect(screen.getByText("TypeScript")).toBeInTheDocument()
    expect(screen.getByText("Node.js")).toBeInTheDocument()
  })

  it("display proper number of skills", () => {
    render(<SkillsGrid skills={skills} />)

    const renderedSkills = screen.getAllByText(/React|TypeScript|Node\.js/)
    expect(renderedSkills).toHaveLength(3)
  })

  it("Do not crash with empty list", () => {
    render(<SkillsGrid skills={[]} />)

    expect(screen.getByText("resume.skills.title")).toBeInTheDocument()
  })
})