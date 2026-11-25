"use client";

import { ArrowUpRight, Mail, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CONTACT_INFO } from "@/data/site-content";

interface DirectContactDialogProps {
  triggerLabel?: string;
  triggerClassName?: string;
}

export function DirectContactDialog({
  triggerLabel = "Directly Reach Us Out",
  triggerClassName = "font-mono text-xs uppercase tracking-[0.12em] underline underline-offset-4 transition-colors",
}: DirectContactDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className={triggerClassName}>
          {triggerLabel}
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
            PL / DIRECT ENGINEERING CONTACT
          </p>
          <DialogTitle>Reach Perception Labs directly</DialogTitle>
          <DialogDescription>
            Contact our engineering team directly by email or phone, or submit mission integration details through our intake form.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2 divide-y divide-border-grey border border-border-grey bg-field">
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center justify-between gap-4 px-4 py-4 text-sm text-graphite transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
          >
            <span className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-ink" aria-hidden="true" />
              <span>{CONTACT_INFO.email}</span>
            </span>
            <ArrowUpRight className="h-4 w-4 text-muted-ink" aria-hidden="true" />
          </a>
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex items-center justify-between gap-4 px-4 py-4 text-sm text-graphite transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
          >
            <span className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-muted-ink" aria-hidden="true" />
              <span className="font-mono">{CONTACT_INFO.phone}</span>
            </span>
            <ArrowUpRight className="h-4 w-4 text-muted-ink" aria-hidden="true" />
          </a>
        </div>

        <div className="pt-2">
          <a
            href={CONTACT_INFO.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-graphite px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-field transition-colors hover:bg-graphite/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
          >
            Open Partner Intake Form
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
