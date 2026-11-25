"use client";

import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RESEARCH_NOTES, type ResearchNote } from "@/data/site-content";

interface ResearchNoteCardProps {
  note: ResearchNote;
}

function ResearchNoteCard({ note }: ResearchNoteCardProps) {
  return (
    <article className="flex flex-col justify-between bg-surface p-6 transition-colors hover:bg-field sm:p-8">
      <div>
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-ink">
            {note.code}
          </span>
          <span className="rounded-sm border border-border-grey bg-field px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-graphite">
            {note.discipline}
          </span>
        </div>
        <h3 className="mt-6 font-display text-xl font-medium leading-snug tracking-[-0.015em] text-graphite sm:text-2xl">
          {note.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-ink sm:text-[15px]">
          {note.summary}
        </p>
      </div>

      <div className="mt-8 border-t border-border-grey pt-4">
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-graphite transition-colors hover:text-muted-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
            >
              <span>Read Technical Note</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </DialogTrigger>
          <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto">
            <DialogHeader>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-ink">
                {note.code} · {note.discipline}
              </p>
              <DialogTitle className="pt-1 text-2xl font-medium tracking-tight text-graphite">
                {note.title}
              </DialogTitle>
              <DialogDescription className="text-[15px] leading-relaxed text-muted-ink">
                {note.summary}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4 space-y-6 border-t border-border-grey pt-6">
              {note.sections.map((section) => (
                <section key={section.heading}>
                  <h4 className="font-mono text-xs uppercase tracking-[0.12em] text-graphite">
                    {section.heading}
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-muted-ink sm:text-[15px]">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </article>
  );
}

export function ResearchReader() {
  return (
    <div className="grid gap-px border border-border-grey bg-border-grey md:grid-cols-2">
      {RESEARCH_NOTES.map((note) => (
        <ResearchNoteCard key={note.slug} note={note} />
      ))}
    </div>
  );
}
