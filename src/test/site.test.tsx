import { describe, it, expect, vi } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from "@/app/page";
import PivoPage from "@/app/systems/pivo/page";
import AboutPage from "@/app/about/page";
import ContactPage from "@/app/contact/page";
import ResearchPage from "@/app/research/page";
import ResearchArticlePage from "@/app/research/[slug]/page";
import { Navbar } from "@/components/Navbar";
import { CONTACT_INFO, FEATURED_BLOG_POST, TECHNOLOGY_LAYERS } from "@/data/site-content";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
}));

describe("Perception Labs website", () => {
  it("renders unified 5-layer numbering, PIVO focus, and illustrative viewport without legacy claims", () => {
    const { container } = render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        name: /Machines that understand the world they move through\./i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(/ILLUSTRATIVE RECONSTRUCTION/i)).toBeInTheDocument();

    // Unified 5-layer sequence: 01 Sensing -> 02 Perception -> 03 State Estimation -> 04 Spatial Intelligence -> 05 Autonomy
    TECHNOLOGY_LAYERS.forEach((layer) => {
      expect(
        screen.getByRole("link", {
          name: new RegExp(`LAYER ${layer.layerNumber}.*${layer.shortTitle}`, "i"),
        }),
      ).toHaveAttribute("href", `/technology/${layer.slug}`);
    });

    expect(screen.getByRole("link", { name: /Explore PIVO/i })).toHaveAttribute(
      "href",
      "/systems/pivo",
    );

    const text = container.textContent ?? "";
    expect(text).not.toMatch(/<5ms|99\.97%|L5 Autonomy|Cortex|pranatechnologies15/i);
  });

  it("renders dedicated PIVO technical specs and honest limitations", () => {
    render(<PivoPage />);

    expect(
      screen.getByRole("heading", { name: /PIVO — Parallel Visual-Inertial Odometry/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Relative motion vs\. absolute position/i)).toBeInTheDocument();
    expect(screen.getByText(/PX4 and ROS 2 compatible interfaces/i)).toBeInTheDocument();
  });

  it("renders founders and Bhubaneswar engineering origin on About page", () => {
    render(<AboutPage />);

    expect(screen.getByText("Ayushman Bansal")).toBeInTheDocument();
    expect(screen.getByText("Lakshya Agrawal")).toBeInTheDocument();
    expect(screen.getByText(/ayushman@perceptionlab\.com/i)).toBeInTheDocument();
    expect(screen.getByText(/lakshya@perceptionlab\.com/i)).toBeInTheDocument();
  });

  it("renders technical blog index and individual shareable article route without modal dialogs", async () => {
    render(<ResearchPage />);

    const articleLink = screen.getByRole("link", { name: /Read Full Technical Blog/i });
    expect(articleLink).toHaveAttribute(
      "href",
      `/research/${FEATURED_BLOG_POST.slug}`,
    );

    cleanup();
    const article = await ResearchArticlePage({
      params: Promise.resolve({ slug: FEATURED_BLOG_POST.slug }),
    });
    render(article);

    expect(
      screen.getByRole("heading", { level: 1, name: FEATURED_BLOG_POST.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(/1\. The Engineering Problem/i)).toBeInTheDocument();
  });

  it("supports accessible mobile navigation and Reach Us Directly contact dialog", async () => {
    const user = userEvent.setup();
    render(
      <>
        <Navbar />
        <ContactPage />
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

    const directTrigger = screen.getByRole("button", { name: /Reach Us Directly/i });
    await user.click(directTrigger);

    const dialog = screen.getByRole("dialog");
    expect(
      within(dialog).getByRole("link", { name: new RegExp(CONTACT_INFO.primaryEmail) }),
    ).toHaveAttribute("href", `mailto:${CONTACT_INFO.primaryEmail}`);
    expect(
      within(dialog).getByRole("link", { name: new RegExp(CONTACT_INFO.phone.replace("+", "\\+")) }),
    ).toHaveAttribute("href", CONTACT_INFO.phoneHref);

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
