import { permanentRedirect } from "next/navigation";

export default function ApplicationsRedirectPage() {
  permanentRedirect("/solutions");
}
