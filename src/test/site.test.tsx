import { describe, it, expect, vi } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from "@/app/page";
import CortexPage from "@/app/cortex/page";
import TechnologyPage from "@/app/technology/page";
import SolutionsPage from "@/app/solutions/page";
import CompanyPage from "@/app/company/page";
import ContactPage from "@/app/contact/page";
import ResearchPage from "@/app/research/page";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  CONTACT_INFO,
  FOUNDERS,
  HOME_CLOSING,
  HOME_CORTEX,
  HOME_PURPOSE,
  HOME_SOLUTIONS,
  HOME_TECHNOLOGY,
  RESEARCH_TRACKS,
  TECH_COUPLED_ENGINES,
} from "@/data/site-content";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
}));

describe("Perception Labs website", () => {
  it("renders approved 6-section Homepage matching Chapter 12 V1.1 structure and copy", () => {
    const { container } = render(<HomePage />);

    // 01 · Landing
    expect(
      screen.getByRole("heading", { name: /Intelligence for the physical world\./i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Enabling machines to understand and navigate the world around them\./i),
    ).toBeInTheDocument();

    // 02 · Our Purpose
    expect(
      screen.getByRole("heading", { name: HOME_PURPOSE.heading }),
    ).toBeInTheDocument();
    for (const pillar of HOME_PURPOSE.pillars) {
      expect(screen.getByRole("heading", { name: pillar.name })).toBeInTheDocument();
    }

    // 03 · Cortex introduction (compact indicators only, no spec strip on Home)
    expect(
      screen.getByRole("heading", { level: 2, name: HOME_CORTEX.title }),
    ).toBeInTheDocument();
    for (const cap of HOME_CORTEX.capabilities) {
      expect(screen.getByText(cap.name)).toBeInTheDocument();
    }
    expect(screen.queryByText("~30 Hz")).not.toBeInTheDocument();

    // 04 · Technology (4 editorial domains)
    expect(
      screen.getByRole("heading", { name: HOME_TECHNOLOGY.heading }),
    ).toBeInTheDocument();
    for (const domain of HOME_TECHNOLOGY.domains) {
      expect(screen.getByRole("heading", { name: domain.title })).toBeInTheDocument();
    }
    expect(screen.getByRole("link", { name: /Explore our technology/i })).toHaveAttribute(
      "href",
      "/technology",
    );

    // 05 · Solutions (6 application domains + reference disclosure)
    expect(
      screen.getByRole("heading", { name: HOME_SOLUTIONS.heading }),
    ).toBeInTheDocument();
    for (const domain of HOME_SOLUTIONS.domains) {
      expect(screen.getByRole("heading", { name: domain.title })).toBeInTheDocument();
    }
    expect(screen.getByRole("link", { name: /Explore solutions/i })).toHaveAttribute(
      "href",
      "/solutions",
    );

    // 06 · Closing CTA
    expect(
      screen.getByRole("heading", { name: HOME_CLOSING.heading }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Get in touch/i })).toHaveAttribute(
      "href",
      "/contact",
    );

    // No standalone engineering-principles section on Home
    expect(
      screen.queryByRole("heading", { name: /Engineered for physical systems\./i }),
    ).not.toBeInTheDocument();

    const text = container.textContent ?? "";
    expect(text).not.toMatch(/UPCOMING TECHNICAL|Placeholder|PIVO|₹35,000|Phase 4/i);
  });

  it("renders single-color Navbar and 3-column Footer with Research and About links", async () => {
    const user = userEvent.setup();
    render(
      <>
        <Navbar />
        <Footer />
      </>,
    );

    const primaryNav = screen.getByRole("navigation", { name: /Primary navigation/i });
    expect(within(primaryNav).getByRole("link", { name: /^Cortex$/i })).toHaveAttribute("href", "/cortex");
    expect(within(primaryNav).getByRole("link", { name: /^Technology$/i })).toHaveAttribute("href", "/technology");
    expect(within(primaryNav).getByRole("link", { name: /^Solutions$/i })).toHaveAttribute("href", "/solutions");
    expect(within(primaryNav).getByRole("link", { name: /^Company$/i })).toHaveAttribute("href", "/company");
    expect(within(primaryNav).queryByRole("link", { name: /Research/i })).not.toBeInTheDocument();

    const toggle = screen.getByRole("button", { name: /Open navigation menu/i });
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    await user.keyboard("{Escape}");
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    const footer = screen.getByRole("contentinfo");
    const footerNav = within(footer).getByRole("navigation", { name: /Footer navigation/i });
    expect(within(footerNav).getByRole("link", { name: /^About$/i })).toHaveAttribute("href", "/company");
    expect(within(footerNav).getByRole("link", { name: /^Research$/i })).toHaveAttribute("href", "/research");
    expect(within(footerNav).getByRole("link", { name: /^Contact$/i })).toHaveAttribute("href", "/contact");
    expect(within(footer).getByRole("link", { name: /^Privacy Policy$/i })).toHaveAttribute("href", "/privacy");
  });

  it("renders flagship Cortex page with local vs global alignment and engineering maturity boundaries", () => {
    const { container } = render(<CortexPage />);
    expect(screen.getByRole("heading", { level: 1, name: /^Cortex$/i })).toBeInTheDocument();
    expect(screen.getByText(/Local Spatial Estimation/i)).toBeInTheDocument();
    expect(screen.getByText(/Optional Global Map Alignment/i)).toBeInTheDocument();
    expect(screen.getByText(/Current capabilities & boundaries/i)).toBeInTheDocument();
    expect(container.textContent ?? "").not.toMatch(/PIVO|₹35,000|₹10,000/i);
  });

  it("renders Technology page with volumetric hero background, cohesive five-layer diagram, and three coupled engines", () => {
    render(<TechnologyPage />);

    expect(
      screen.getByRole("heading", { name: /From sensing to spatial intelligence\./i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /Cohesive five-layer spatial intelligence/i }),
    ).toBeInTheDocument();
    for (const eng of TECH_COUPLED_ENGINES) {
      expect(screen.getByRole("heading", { name: eng.title })).toBeInTheDocument();
    }
  });

  it("renders Solutions page with deep technical coverage of the two core areas and diagrams", () => {
    const { container } = render(<SolutionsPage />);

    expect(
      screen.getByRole("heading", { name: /Spatial intelligence for real-world autonomy\./i }),
    ).toBeInTheDocument();
    expect(screen.getByText("The GNSS Challenge")).toBeInTheDocument();
    expect(screen.getByText("Local Estimation vs. Global Alignment")).toBeInTheDocument();
    expect(screen.getByText("Unstructured Localization")).toBeInTheDocument();
    expect(screen.getByText("Motion Estimation & Reconstruction")).toBeInTheDocument();

    const text = container.textContent ?? "";
    expect(text).not.toMatch(/Edge Perception Kit|Flight Bridge|OEM Integration & Qualification|Mining|Agriculture|₹35,000/i);
  });

  it("renders Company founder details, Research tracks, and direct Contact flow", () => {
    render(<CompanyPage />);
    for (const founder of FOUNDERS) {
      expect(screen.getByRole("link", { name: founder.email })).toHaveAttribute(
        "href",
        `mailto:${founder.email}`,
      );
    }

    cleanup();
    const research = render(<ResearchPage />);
    for (const track of RESEARCH_TRACKS) {
      expect(screen.getByText(track.topic)).toBeInTheDocument();
    }
    expect(research.container.textContent ?? "").not.toMatch(/Placeholder Technical Blog|Draft Template/i);

    cleanup();
    render(<ContactPage />);
    expect(screen.getByRole("link", { name: /Submit Engineering Enquiry/i })).toHaveAttribute(
      "href",
      CONTACT_INFO.googleFormUrl,
    );
  });
});
