import { describe, it, expect, vi } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from "@/app/page";
import TechnologyPage from "@/app/technology/page";
import SolutionsPage from "@/app/solutions/page";
import CortexPage from "@/app/solutions/cortex/page";
import AboutPage from "@/app/about/page";
import ContactPage from "@/app/contact/page";
import ResearchPage from "@/app/research/page";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  CONTACT_INFO,
  FOUNDERS,
  SYSTEM_CATEGORIES,
  TECHNOLOGY_LAYERS,
  UPCOMING_BLOG_TOPICS,
} from "@/data/site-content";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
}));

describe("Perception Labs website", () => {
  it("renders decluttered perception & autonomy Home page with Cortex focus and upcoming blog preview", () => {
    const { container } = render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        name: /Machines that understand the world they move through\./i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(/ILLUSTRATIVE RECONSTRUCTION/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^Explore Cortex$/i })).toHaveAttribute(
      "href",
      "/solutions/cortex",
    );
    expect(screen.getByRole("link", { name: /^Explore Cortex Specs$/i })).toHaveAttribute(
      "href",
      "/solutions/cortex",
    );
    expect(screen.getByRole("link", { name: /Upcoming Technical Notes/i })).toHaveAttribute(
      "href",
      "/research",
    );

    TECHNOLOGY_LAYERS.forEach((layer) => {
      expect(
        screen.getByRole("link", {
          name: new RegExp(`LAYER ${layer.layerNumber}.*${layer.shortTitle}`, "i"),
        }),
      ).toHaveAttribute("href", `/technology/${layer.slug}`);
    });

    const text = container.textContent ?? "";
    expect(text).not.toMatch(/Placeholder Technical Blog|PIVO|₹35,000|₹10,000|Phase 4/i);
  });

  it("renders new volumetric background graphic on Technology page without framed duplicate", () => {
    const { container } = render(<TechnologyPage />);

    expect(
      screen.getByRole("heading", {
        name: /Perception Intelligence for Real-World Environments\./i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/VOLUMETRIC PERCEPTION LATTICE · COUPLED SENSOR STRATA/i),
    ).toBeInTheDocument();
    expect(screen.getByText("Real-Time Machine Perception")).toBeInTheDocument();
    expect(screen.getByText("Multi-Sensor.")).toBeInTheDocument();

    const text = container.textContent ?? "";
    expect(text).not.toMatch(/3D VIEWPORT|PIVO/i);
  });

  it("renders distinct non-overlapping Solutions product hierarchy without pricing and Cortex specs", () => {
    const solutionsView = render(<SolutionsPage />);
    expect(
      screen.getByRole("heading", {
        name: /Machines operating reliably in the physical world\./i,
      }),
    ).toBeInTheDocument();
    for (const tier of SYSTEM_CATEGORIES) {
      expect(screen.getByRole("heading", { name: tier.name })).toBeInTheDocument();
    }
    const solutionsText = solutionsView.container.textContent ?? "";
    expect(solutionsText).not.toMatch(/₹35,000|₹10,000|Stack License|PIVO|Onboard Autonomy Stack/i);

    cleanup();
    const cortexView = render(<CortexPage />);
    expect(
      screen.getByRole("heading", {
        name: /Cortex — Unified Perception & Navigation Engine/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Relative motion vs\. absolute position/i)).toBeInTheDocument();
    expect(cortexView.container.textContent ?? "").not.toMatch(/₹35,000|₹10,000|PIVO/i);
  });

  it("renders pitch-deck founder emails, personal LinkedIns, and company LinkedIn on About", () => {
    const { container } = render(<AboutPage />);

    for (const founder of FOUNDERS) {
      expect(screen.getByRole("link", { name: founder.email })).toHaveAttribute(
        "href",
        `mailto:${founder.email}`,
      );
    }

    const linkedinLinks = screen.getAllByRole("link", { name: /^LinkedIn$/i });
    expect(linkedinLinks[0]).toHaveAttribute("href", FOUNDERS[0].linkedin);
    expect(linkedinLinks[1]).toHaveAttribute("href", FOUNDERS[1].linkedin);
    expect(
      screen.getByRole("link", { name: /Perception Labs on LinkedIn/i }),
    ).toHaveAttribute("href", CONTACT_INFO.companyLinkedin);

    expect(container.textContent ?? "").not.toMatch(/DEVELOPMENT TRAJECTORY|Phase 01|Phase 4/i);
  });

  it("renders Research page with ONLY upcoming blog section and no placeholder blog post", () => {
    const { container } = render(<ResearchPage />);

    expect(screen.getByText(/UPCOMING TECHNICAL BLOGS/i)).toBeInTheDocument();
    for (const topic of UPCOMING_BLOG_TOPICS) {
      expect(screen.getByText(topic.title)).toBeInTheDocument();
    }
    const text = container.textContent ?? "";
    expect(text).not.toMatch(/Placeholder Technical Blog|Draft Template|Read Full Technical Blog/i);
  });

  it("renders updated Footer without separate Cortex link, with Privacy in bottom bar and icon links", async () => {
    const user = userEvent.setup();
    render(
      <>
        <Navbar />
        <ContactPage />
        <Footer />
      </>,
    );

    const toggle = screen.getByRole("button", { name: /Open navigation menu/i });
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    await user.keyboard("{Escape}");
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    const footer = screen.getByRole("contentinfo");
    const footerNav = within(footer).getByRole("navigation", { name: /Footer navigation/i });
    expect(within(footerNav).queryByRole("link", { name: /Cortex/i })).not.toBeInTheDocument();
    expect(within(footerNav).queryByRole("link", { name: /Privacy/i })).not.toBeInTheDocument();
    expect(within(footerNav).getByRole("link", { name: /Contact/i })).toHaveAttribute(
      "href",
      "/contact",
    );

    expect(within(footer).getByRole("link", { name: /^Privacy Policy$/i })).toHaveAttribute(
      "href",
      "/privacy",
    );
    expect(
      within(footer).getByRole("link", { name: new RegExp(`Email Perception Labs.*${CONTACT_INFO.email}`) }),
    ).toHaveAttribute("href", `mailto:${CONTACT_INFO.email}`);

    const footerLinkedin = within(footer).getByRole("link", { name: /^Perception Labs on LinkedIn$/i });
    expect(footerLinkedin).toHaveAttribute("href", CONTACT_INFO.companyLinkedin);

    const directTrigger = screen.getAllByRole("button", { name: /Reach Us Directly/i })[0];
    await user.click(directTrigger);
    const dialog = screen.getByRole("dialog");
    expect(
      within(dialog).getByRole("link", { name: new RegExp(CONTACT_INFO.email.replace(".", "\\.")) }),
    ).toHaveAttribute("href", `mailto:${CONTACT_INFO.email}`);
  });
});
