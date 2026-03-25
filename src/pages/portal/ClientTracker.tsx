import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronRight, Calendar, MessageSquare, Check, ExternalLink } from "lucide-react";

const STAGES = [
  { id: "gathering",   label: "Requirement Gathering", desc: "We collect all your project needs and goals." },
  { id: "design",      label: "Design",                desc: "Wireframes and visual design crafted by our team." },
  { id: "development", label: "Development",           desc: "Your project is being built by our interns." },
  { id: "testing",     label: "Testing & Review",      desc: "Quality checks, revisions, and client feedback." },
  { id: "live",        label: "Live 🎉",               desc: "Your project is deployed and ready for the world." },
];

const MOCK_CURRENT_STAGE = 2; // Development

const ClientTracker = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const trackId = searchParams.get("id") || "GS-CLT-DEMO";
  const [query, setQuery] = useState("");
  const [querySent, setQuerySent] = useState(false);

  const progressPct = Math.round(((MOCK_CURRENT_STAGE + 0.5) / STAGES.length) * 100);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border px-8 py-4 flex items-center justify-between sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <button onClick={() => navigate("/portal")} className="flex items-center gap-2 text-minimal text-muted-foreground hover:text-foreground transition-colors group">
          <ChevronRight size={12} className="rotate-180 group-hover:-translate-x-0.5 transition-transform" /> PORTAL
        </button>
        <span className="text-minimal font-semibold text-foreground">GRADSCALE</span>
        <span className="text-minimal text-muted-foreground hidden sm:block">PROJECT TRACKER</span>
      </header>

      <div className="flex-1 max-w-3xl w-full mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          <p className="text-minimal text-muted-foreground mb-3">CLIENT TRACKING</p>
          <h1 className="text-5xl md:text-6xl font-light text-architectural mb-6">Your Project.</h1>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-minimal text-muted-foreground">TRACKING ID</span>
              <span className="font-mono text-sm border border-border px-3 py-1.5 bg-muted/20">{trackId}</span>
            </div>
            <span className="text-minimal text-muted-foreground">·</span>
            <span className="text-minimal text-muted-foreground">{progressPct}% COMPLETE</span>
          </div>
        </div>

        {/* Overall progress bar */}
        <div className="mb-16">
          <div className="h-px bg-border w-full relative overflow-hidden rounded-full">
            <div
              className="h-px bg-foreground absolute left-0 top-0 transition-all duration-1000"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        {/* Stage timeline */}
        <div className="mb-16 border border-border overflow-hidden">
          <div className="px-8 py-5 border-b border-border bg-muted/20">
            <h2 className="text-minimal text-muted-foreground">PROJECT PROGRESS</h2>
          </div>
          <div className="divide-y divide-border">
            {STAGES.map((stage, idx) => {
              const isDone    = idx < MOCK_CURRENT_STAGE;
              const isCurrent = idx === MOCK_CURRENT_STAGE;
              const isPending = idx > MOCK_CURRENT_STAGE;

              return (
                <div
                  key={stage.id}
                  className={`px-8 py-6 flex items-start gap-6 transition-colors ${isCurrent ? "bg-foreground text-background" : isPending ? "opacity-40" : ""}`}
                >
                  {/* Step indicator */}
                  <div className={`w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full border-2 mt-0.5 transition-colors ${
                    isDone    ? "bg-foreground border-foreground text-background" :
                    isCurrent ? "bg-background border-background text-foreground" :
                                "border-border"
                  }`}>
                    {isDone ? <Check size={13} strokeWidth={2.5} /> : (
                      <span className="text-minimal text-[10px]">{String(idx + 1).padStart(2, "0")}</span>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <p className={`font-light text-base ${isCurrent ? "text-background" : "text-foreground"}`}>{stage.label}</p>
                      {isCurrent && (
                        <span className="text-[10px] font-medium bg-background text-foreground px-3 py-1 rounded-full uppercase tracking-wider">
                          In Progress
                        </span>
                      )}
                      {isDone && <span className="text-minimal text-muted-foreground text-[10px]">DONE</span>}
                    </div>
                    <p className={`text-xs mt-1 leading-relaxed ${isCurrent ? "text-background/70" : "text-muted-foreground"}`}>{stage.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {/* Schedule Meeting */}
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-border p-7 flex flex-col justify-between hover:border-foreground hover:bg-muted/10 transition-all min-h-[160px]"
          >
            <div className="flex items-start justify-between">
              <Calendar size={20} className="text-muted-foreground group-hover:text-foreground transition-colors" />
              <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <p className="text-minimal text-foreground mb-1">SCHEDULE MEETING</p>
              <p className="text-xs text-muted-foreground">Book a slot with our team via Calendly.</p>
            </div>
          </a>

          {/* Raise query */}
          <div className="border border-border p-7 flex flex-col justify-between min-h-[160px]">
            <div className="flex items-start justify-between">
              <MessageSquare size={20} className="text-muted-foreground" />
            </div>
            <div>
              <p className="text-minimal text-foreground mb-3">RAISE A QUERY</p>
              {querySent ? (
                <div className="flex items-center gap-2 text-sm text-emerald-600">
                  <Check size={14} /> Query sent — we'll respond within 24 hrs.
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    onKeyDown={e => { if (e.key === "Enter" && query.trim()) setQuerySent(true); }}
                    className="flex-1 border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50 min-w-0"
                    placeholder="Ask anything..."
                  />
                  <button
                    onClick={() => { if (query.trim()) setQuerySent(true); }}
                    className="bg-foreground text-background px-4 py-2 text-minimal hover:opacity-80 transition-opacity text-[10px] whitespace-nowrap"
                  >
                    SEND
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTracker;
