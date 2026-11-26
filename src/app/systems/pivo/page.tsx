import { permanentRedirect } from "next/navigation";

export default function LegacyPivoRedirectPage() {
  permanentRedirect("/cortex");
}
