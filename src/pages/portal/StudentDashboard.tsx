import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Users, CheckCircle, Clock, IndianRupee, Copy, Check, TrendingUp } from "lucide-react";

const MOCK_REF_ID = "GS-2026-042";

const MOCK_LEADS = [
  { id: 1, client: "Rishi Enterprises",  business: "E-Commerce",    date: "Mar 18", status: "onboarded" },
  { id: 2, client: "NexaTech Solutions",  business: "SaaS",          date: "Mar 22", status: "meeting"   },
  { id: 3, client: "Artisan Home Décor", business: "E-Commerce",    date: "Mar 24", status: "received"  },
  { id: 4, client: "Dr. Mehra Clinic",   business: "Healthcare",    date: "Feb 28", status: "delivered" },
];

const STATUS_CONFIG = {
  received:  { label: "Lead Received",     dot: "bg-blue-500",   pill: "bg-blue-50 text-blue-700 border-blue-200",      step: 1 },
  meeting:   { label: "Meeting Scheduled", dot: "bg-amber-500",  pill: "bg-amber-50 text-amber-700 border-amber-200",    step: 2 },
  onboarded: { label: "Onboarded",         dot: "bg-violet-500", pill: "bg-violet-50 text-violet-700 border-violet-200", step: 3 },
  delivered: { label: "Delivered ✓",       dot: "bg-emerald-500",pill: "bg-emerald-50 text-emerald-700 border-emerald-200", step: 4 },
};

const STEPS = ["Received", "Meeting", "Onboarded", "Delivered"];

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const delivered  = MOCK_LEADS.filter(l => l.status === "delivered").length;
  const inPipeline = MOCK_LEADS.filter(l => l.status !== "delivered").length;
  const earnings   = delivered * 5000;

  const copyId = () => {
    navigator.clipboard.writeText(MOCK_REF_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="border-b border-border px-6 md:px-10 py-4 flex items-center justify-between sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <button onClick={() => navigate("/portal")} className="flex items-center gap-2 text-minimal text-muted-foreground hover:text-foreground transition-colors group">
          <ChevronRight size={12} className="rotate-180 group-hover:-translate-x-0.5 transition-transform" />
          PORTAL
        </button>
        <span className="text-minimal font-semibold text-foreground">GRADSCALE</span>
        <span className="text-minimal text-muted-foreground hidden sm:block">STUDENT DASHBOARD</span>
      </header>

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">
        {/* ── Profile header ── */}
        <div className="mb-12 grid md:grid-cols-[1fr_auto] gap-6 items-end border-b border-border pb-12">
          <div>
            <p className="text-minimal text-muted-foreground mb-2">WELCOME BACK</p>
            <h1 className="text-5xl md:text-6xl font-light text-architectural">Rahul Sharma</h1>
            <p className="text-muted-foreground mt-2 text-sm">FLAME University, Pune &nbsp;·&nbsp; Partner since Mar 2026</p>
          </div>

          {/* Ref ID card */}
          <div className="border border-border p-6 min-w-[260px] bg-muted/20">
            <p className="text-minimal text-muted-foreground mb-3">REFERENCE ID</p>
            <div className="flex items-center justify-between gap-4">
              <span className="text-2xl font-light text-architectural tracking-widest">{MOCK_REF_ID}</span>
              <button
                onClick={copyId}
                className="flex items-center gap-1.5 text-minimal text-muted-foreground hover:text-foreground border border-border px-3 py-1.5 hover:border-foreground transition-all text-[10px]"
              >
                {copied ? <><Check size={11} /> COPIED</> : <><Copy size={11} /> COPY</>}
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed">Share this code with clients so it links to your account.</p>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-12">
          {[
            { Icon: Users,        label: "TOTAL LEADS",   value: MOCK_LEADS.length,              sub: "all time"        },
            { Icon: Clock,        label: "IN PIPELINE",   value: inPipeline,                     sub: "active"          },
            { Icon: CheckCircle,  label: "DELIVERED",     value: delivered,                      sub: "projects"        },
            { Icon: IndianRupee,  label: "EARNINGS",      value: `₹${earnings.toLocaleString("en-IN")}`, sub: "pending payout" },
          ].map(({ Icon, label, value, sub }) => (
            <div key={label} className="bg-background px-6 py-8 group hover:bg-muted/30 transition-colors">
              <Icon size={16} className="text-muted-foreground mb-5" />
              <p className="text-minimal text-muted-foreground mb-1">{label}</p>
              <p className="text-3xl md:text-4xl font-light text-architectural">{value}</p>
              <p className="text-xs text-muted-foreground mt-1">{sub}</p>
            </div>
          ))}
        </div>

        {/* ── Lead table ── */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <TrendingUp size={18} className="text-muted-foreground" />
              <h2 className="text-xl font-light text-architectural">Lead Pipeline</h2>
            </div>
            <span className="text-minimal text-muted-foreground">{MOCK_LEADS.length} LEADS</span>
          </div>

          <div className="border border-border overflow-hidden">
            {/* Table head */}
            <div className="grid grid-cols-12 px-6 py-3 bg-muted/30 border-b border-border">
              <div className="col-span-4 text-minimal text-muted-foreground">CLIENT</div>
              <div className="col-span-3 text-minimal text-muted-foreground">INDUSTRY</div>
              <div className="col-span-2 text-minimal text-muted-foreground">DATE</div>
              <div className="col-span-3 text-minimal text-muted-foreground">STATUS</div>
            </div>

            {MOCK_LEADS.map(lead => {
              const cfg = STATUS_CONFIG[lead.status as keyof typeof STATUS_CONFIG];
              return (
                <div key={lead.id} className="grid grid-cols-12 px-6 py-5 items-center border-b border-border last:border-0 hover:bg-muted/10 transition-colors">
                  <div className="col-span-4 font-light text-sm text-foreground">{lead.client}</div>
                  <div className="col-span-3 text-sm text-muted-foreground">{lead.business}</div>
                  <div className="col-span-2 text-sm text-muted-foreground">{lead.date}</div>
                  <div className="col-span-3">
                    {/* progress bar */}
                    <div className="flex gap-0.5 mb-2">
                      {STEPS.map((_, i) => (
                        <div key={i} className={`h-0.5 flex-1 rounded-full ${i < cfg.step ? "bg-foreground" : "bg-border"}`} />
                      ))}
                    </div>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${cfg.pill}`}>{cfg.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Payout banner ── */}
        {delivered > 0 && (
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center border border-foreground p-8">
            <div>
              <p className="text-minimal text-muted-foreground mb-2">PAYOUT READY</p>
              <p className="text-4xl font-light text-architectural">₹{earnings.toLocaleString("en-IN")}</p>
              <p className="text-sm text-muted-foreground mt-2">
                {delivered} project{delivered > 1 ? "s" : ""} delivered &nbsp;×&nbsp; ₹5,000 per project
              </p>
            </div>
            <button className="border border-foreground px-8 py-4 text-minimal hover:bg-foreground hover:text-background transition-all whitespace-nowrap">
              REQUEST PAYOUT →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
