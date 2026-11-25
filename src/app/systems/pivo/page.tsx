import { permanentRedirect } from "next/navigation";

export default function LegacyPivoRedirectPage() {
  permanentRedirect("/solutions/cortex");
}
