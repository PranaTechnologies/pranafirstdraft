import { describe, it, expect, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from "@/app/page";
import ContactPage from "@/app/contact/page";
import ResearchPage from "@/app/research/page";
import { Navbar } from "@/components/Navbar";
import { CONTACT_INFO } from "@/data/site-content";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
}));

describe("Perception Labs website", () => {
  it("renders the homepage narrative, autonomy stack, and approved public systems without legacy claims", () => {
    const { container } = render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        name: /Machines that understand the world they move through\./i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/The real world doesn't operate in perfect conditions\./i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/From sensor data to autonomous action\./i),
    ).toBeInTheDocument();

    // All 5 Autonomy Stack layers link to technology detail routes
    expect(screen.getByRole("link", { name: /LAYER 01.*Sensing/i })).toHaveAttribute(
      "href",
      "/technology/sensing",
    );
    expect(screen.getByRole("link", { name: /LAYER 02.*Estimation/i })).toHaveAttribute(
      "href",
      "/technology/state-estimation",
    );
    expect(screen.getByRole("link", { name: /LAYER 03.*Perception/i })).toHaveAttribute(
      "href",
      "/technology/perception",
    );
    expect(screen.getByRole("link", { name: /LAYER 04.*Intelligence/i })).toHaveAttribute(
      "href",
      "/technology/spatial-intelligence",
    );
    expect(screen.getByRole("link", { name: /LAYER 05.*Autonomy/i })).toHaveAttribute(
      "href",
      "/technology/embedded-autonomy",
    );

    // Approved public systems
    expect(screen.getByRole("heading", { name: "PIVO" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "GPS-Denied Navigation" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Perception Modules" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Custom Integration" })).toBeInTheDocument();

    // Guardrail: no unverified legacy metrics or internal codenames
    const text = container.textContent ?? "";
    expect(text).not.toMatch(/<5ms|99\.97%|L5 Autonomy|Cortex/i);
  });

  it("supports accessible mobile navigation open and escape-to-close", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggle = screen.getByRole("button", { name: /Open navigation menu/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("button", { name: /Close navigation menu/i })).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("preserves the Google Form new-tab link and accessible Direct Contact dialog", async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    const formLink = screen.getByRole("link", { name: /Open Partner Intake Form/i });
    expect(formLink).toHaveAttribute("href", CONTACT_INFO.googleFormUrl);
    expect(formLink).toHaveAttribute("target", "_blank");
    expect(formLink).toHaveAttribute("rel", "noopener noreferrer");

    const directTrigger = screen.getByRole("button", { name: /Directly Reach Us Out/i });
    await user.click(directTrigger);

    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getByRole("link", { name: new RegExp(CONTACT_INFO.email) })).toHaveAttribute(
      "href",
      `mailto:${CONTACT_INFO.email}`,
    );
    expect(within(dialog).getByRole("link", { name: new RegExp(CONTACT_INFO.phone) })).toHaveAttribute(
      "href",
      `tel:${CONTACT_INFO.phone}`,
    );

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("opens readable technical briefings on the research page", async () => {
    const user = userEvent.setup();
    render(<ResearchPage />);

    const readButtons = screen.getAllByRole("button", { name: /Read Technical Note/i });
    expect(readButtons).toHaveLength(4);

    await user.click(readButtons[0]);
    const dialog = screen.getByRole("dialog");
    expect(
      within(dialog).getByText(/Building Reliable Navigation Without GPS/i),
    ).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
