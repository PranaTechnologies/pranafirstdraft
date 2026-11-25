import { ArrowRight } from "lucide-react";

interface FlowDiagramProps {
  label: string;
  steps: string[];
}

const FlowDiagram = ({ label, steps }: FlowDiagramProps) => (
  <div
    role="img"
    aria-label={`${label}: ${steps.join(" to ")}`}
    className="grid items-stretch gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr]"
  >
    {steps.map((step, index) => (
      <div className="contents" key={step}>
        <div className="flex min-h-14 items-center border border-border bg-surface px-4 py-3">
          <span className="mr-3 font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-sm font-medium text-foreground">{step}</span>
        </div>
        {index < steps.length - 1 && (
          <div aria-hidden="true" className="hidden items-center text-accent sm:flex">
            <ArrowRight size={16} strokeWidth={1.5} />
          </div>
        )}
      </div>
    ))}
  </div>
);

export default FlowDiagram;