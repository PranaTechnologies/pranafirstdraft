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
import ResearchArticlePage from "@/app/research/[slug]/page";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  CONTACT_INFO,
  FEATURED_BLOG_POST,
  FOUNDERS,
  TECHNOLOGY_LAYERS,
} from "@/data/site-content";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
}));

describe("Perception Labs website", () => {
  it("renders decluttered perception & autonomy Home page with Cortex focus and no PIVO/pricing claims", () => {
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

    TECHNOLOGY_LAYERS.forEach((layer) => {
      expect(
        screen.getByRole("link", {
          name: new RegExp(`LAYER ${layer.layerNumber}.*${layer.shortTitle}`, "i"),
        }),
      ).toHaveAttribute("href", `/technology/${layer.slug}`);
    });

    const text = container.textContent ?? "";
    expect(text).not.toMatch(/PIVO|₹35,000|₹10,000|<5ms|99\.97%|L5 Autonomy|Phase 4/i);
  });

  it("renders restructured Technology architecture page without PIVO", () => {
    const { container } = render(<TechnologyPage />);

    expect(
      screen.getByRole("heading", {
        name: /Perception Intelligence for Real-World Environments\./i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Real-Time Machine Perception")).toBeInTheDocument();
    expect(screen.getByText("Unified Field Autonomy")).toBeInTheDocument();
    expect(screen.getByText("Multi-Sensor.")).toBeInTheDocument();
    expect(screen.getByText(/Three coupled engines powering Cortex\./i)).toBeInTheDocument();

    const text = container.textContent ?? "";
    expect(text).not.toMatch(/PIVO/i);
  });

  it("renders integrated Solutions without pricing and dedicated Cortex specs", () => {
    const solutionsView = render(<SolutionsPage />);
    expect(
      screen.getByRole("heading", {
        name: /Machines operating reliably in the physical world\./i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Aerial Inspection")).toBeInTheDocument();
    expect(screen.getByText("GNSS-Denied Flight")).toBeInTheDocument();
    const solutionsText = solutionsView.container.textContent ?? "";
    expect(solutionsText).not.toMatch(/₹35,000|₹10,000|Stack License|PIVO/i);

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

    expect(screen.getByText("Ayushman Bansal")).toBeInTheDocument();
    expect(screen.getByText("Lakshya Agrawal")).toBeInTheDocument();

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

  it("renders technical blog index and individual article linking to Cortex", async () => {
    render(<ResearchPage />);

    const articleLink = screen.getByRole("link", { name: /Read Full Technical Blog/i });
    expect(articleLink).toHaveAttribute("href", `/research/${FEATURED_BLOG_POST.slug}`);

    cleanup();
    const article = await ResearchArticlePage({
      params: Promise.resolve({ slug: FEATURED_BLOG_POST.slug }),
    });
    const rendered = render(article);

    expect(
      screen.getByRole("heading", { level: 1, name: FEATURED_BLOG_POST.title }),
    ).toBeInTheDocument();
    expect(rendered.container.textContent ?? "").not.toMatch(/PIVO/i);
  });

  it("supports accessible mobile navigation, Reach Us Directly contact dialog, and Footer LinkedIn", async () => {
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

    const formLink = screen.getByRole("link", { name: /Open Partner Intake Form/i });
    expect(formLink).toHaveAttribute("href", CONTACT_INFO.googleFormUrl);
    expect(formLink).toHaveAttribute("target", "_blank");
    expect(formLink).toHaveAttribute("rel", "noopener noreferrer");

    const footerLinkedin = screen.getByRole("link", { name: /^LinkedIn$/i });
    expect(footerLinkedin).toHaveAttribute("href", CONTACT_INFO.companyLinkedin);

    const directTrigger = screen.getAllByRole("button", { name: /Reach Us Directly/i })[0];
    await user.click(directTrigger);

    const dialog = screen.getByRole("dialog");
    expect(
      within(dialog).getByRole("link", { name: new RegExp(CONTACT_INFO.email.replace(".", "\\.")) }),
    ).toHaveAttribute("href", `mailto:${CONTACT_INFO.email}`);
    expect(
      within(dialog).getByRole("link", { name: /Perception Labs on LinkedIn/i }),
    ).toHaveAttribute("href", CONTACT_INFO.companyLinkedin);
    expect(
      within(dialog).getByRole("link", { name: new RegExp(CONTACT_INFO.phone.replace("+", "\\+")) }),
    ).toHaveAttribute("href", CONTACT_INFO.phoneHref);

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
