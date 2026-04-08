import type { ReactNode } from "react"
import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import CertificationsList from "@/components/home/CertificationsList"


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


describe("CertificationsList", () => {
  const certifications = [
    "AWS Certified Developer",
    "Google Cloud Engineer",
    "Scrum Master",
  ]

  it("Displays texts", () => {
    render(<CertificationsList certifications={certifications} />)

    expect(
      screen.getByText("resume.certifications.eyebrow")
    ).toBeInTheDocument()
    expect(
      screen.getByText("resume.certifications.title")
    ).toBeInTheDocument()
  })

  it("Displays certifications", () => {
    render(<CertificationsList certifications={certifications} />)

    expect(
      screen.getByText("AWS Certified Developer")
    ).toBeInTheDocument()
    expect(
      screen.getByText("Google Cloud Engineer")
    ).toBeInTheDocument()
    expect(screen.getByText("Scrum Master")).toBeInTheDocument()
  })

  it("Displays correct amount of certifications", () => {
    render(<CertificationsList certifications={certifications} />)

    const items = screen.getAllByText(
      /AWS Certified Developer|Google Cloud Engineer|Scrum Master/
    )
    expect(items).toHaveLength(3)
  })

  it("Does not crash with empty list", () => {
    render(<CertificationsList certifications={[]} />)

    expect(
      screen.getByText("resume.certifications.title")
    ).toBeInTheDocument()
  })
})