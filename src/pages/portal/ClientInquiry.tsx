import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Check, Copy } from "lucide-react";

const INDUSTRIES = ["E-Commerce", "SaaS / Tech", "Healthcare", "Finance", "Education", "Real Estate", "Events", "Logistics", "Portfolio / Personal", "Other"];
const REQUIREMENTS = ["E-Commerce Store", "Portfolio Website", "Landing Page", "Corporate Website", "Web Application", "Other"];
const BUDGETS = ["Under ₹10,000", "₹10,000 – ₹25,000", "₹25,000 – ₹50,000", "₹50,000 – ₹1,00,000", "Above ₹1,00,000"];

const ClientInquiry = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [trackLink] = useState(`GS-CLT-${Math.random().toString(36).substr(2, 8).toUpperCase()}`);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    refId: "", business: "", industry: "", requirement: "", budget: "",
    name: "", email: "", phone: "", notes: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  // Static mode — no validation, always submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const copyTrackLink = () => {
    navigator.clipboard.writeText(trackLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // ── Success screen ─────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <header className="border-b border-border px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-minimal text-muted-foreground hover:text-foreground transition-colors">
            <ChevronRight size={12} className="rotate-180" /> GRADSCALE
          </a>
          <span className="text-minimal text-muted-foreground">INQUIRY SUBMITTED</span>
        </header>

        <div className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="w-full max-w-lg">
            <div className="w-20 h-20 border border-foreground flex items-center justify-center mb-10">
              <Check size={32} strokeWidth={1.5} />
            </div>

            <p className="text-minimal text-muted-foreground mb-3">INQUIRY RECEIVED</p>
            <h1 className="text-5xl md:text-6xl font-light text-architectural mb-4">
              We're on it.
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Your project inquiry has been submitted. Our team will reach out within 24 hours to discuss next steps.
            </p>

            {/* Tracking ID Card */}
            <div className="border border-border p-8 mb-3 bg-muted/10">
              <p className="text-minimal text-muted-foreground mb-4">YOUR TRACKING ID</p>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <span className="text-3xl font-light text-architectural tracking-widest">{trackLink}</span>
                <button
                  onClick={copyTrackLink}
                  className="flex items-center gap-1.5 text-minimal text-muted-foreground hover:text-foreground border border-border px-4 py-2 hover:border-foreground transition-all text-[10px]"
                >
                  {copied ? <><Check size={11} /> COPIED</> : <><Copy size={11} /> COPY</>}
                </button>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-12">
              Save this ID — use it to track your project status from design all the way to delivery.
            </p>

            <button
              onClick={() => navigate(`/portal/client/track?id=${trackLink}`)}
              className="w-full bg-foreground text-background py-4 text-minimal hover:opacity-80 transition-opacity mb-4"
            >
              TRACK MY PROJECT →
            </button>
            <button
              onClick={() => navigate("/")}
              className="w-full border border-border py-4 text-minimal text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              BACK TO HOME
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Inquiry form ───────────────────────────────────────────────────────────
  const inputCls = "w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50";
  const labelCls = "text-minimal text-muted-foreground block mb-2";

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Left info panel */}
      <div className="hidden md:flex md:w-2/5 bg-foreground text-background flex-col justify-between p-16">
        <div>
          <a href="/" className="text-minimal text-background/50 hover:text-background transition-colors flex items-center gap-2">
            <ChevronRight size={12} className="rotate-180" /> GRADSCALE
          </a>
        </div>
        <div>
          <p className="text-minimal text-background/50 mb-6">CLIENT / BUSINESS PORTAL</p>
          <h2 className="text-4xl font-light mb-8 leading-tight">
            Let's Build<br />Something Great.
          </h2>
          <div className="space-y-4 border-t border-background/20 pt-8">
            {[
              ["01", "Enter your referral code"],
              ["02", "Describe your project"],
              ["03", "Get matched with a team"],
              ["04", "Track progress live"],
            ].map(([n, t]) => (
              <div key={n} className="flex items-center gap-4">
                <span className="text-minimal text-background/40 w-6">{n}</span>
                <span className="text-sm text-background/80">{t}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-background/30">© 2026 GradScale</p>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <header className="border-b border-border px-8 py-4 flex items-center justify-between md:hidden">
          <a href="/" className="text-minimal text-muted-foreground">← GRADSCALE</a>
          <span className="text-minimal text-muted-foreground">PROJECT INQUIRY</span>
        </header>

        <div className="flex-1 px-8 md:px-12 py-16">
          <div className="max-w-xl">
            <div className="mb-12">
              <p className="text-minimal text-muted-foreground mb-3">CLIENT / BUSINESS</p>
              <h1 className="text-4xl md:text-5xl font-light text-architectural">
                Project Inquiry.
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Reference ID */}
              <div className="border border-border p-6 bg-muted/10">
                <label className={labelCls}>
                  REFERENCE ID <span className="text-destructive">*</span>
                </label>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                  Enter the unique code shared by the student who referred you (e.g. GS-2026-001).
                  Any code is accepted for now.
                </p>
                <input
                  type="text"
                  required
                  className={`${inputCls} uppercase tracking-widest`}
                  placeholder="GS-XXXX-XXX"
                  value={form.refId}
                  onChange={set("refId")}
                />
              </div>

              {/* Business details */}
              <div className="space-y-5">
                <h3 className="text-minimal text-foreground border-b border-border pb-3">BUSINESS DETAILS</h3>
                <div>
                  <label className={labelCls}>BUSINESS / BRAND NAME <span className="text-destructive">*</span></label>
                  <input type="text" required className={inputCls} placeholder="Your business name" value={form.business} onChange={set("business")} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>INDUSTRY <span className="text-destructive">*</span></label>
                    <select required className={inputCls} value={form.industry} onChange={set("industry")}>
                      <option value="">Select...</option>
                      {INDUSTRIES.map(i => <option key={i}>{i}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>REQUIREMENT <span className="text-destructive">*</span></label>
                    <select required className={inputCls} value={form.requirement} onChange={set("requirement")}>
                      <option value="">Select...</option>
                      {REQUIREMENTS.map(r => <option key={r}>{r}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className={labelCls}>BUDGET RANGE <span className="text-destructive">*</span></label>
                  <select required className={inputCls} value={form.budget} onChange={set("budget")}>
                    <option value="">Select...</option>
                    {BUDGETS.map(b => <option key={b}>{b}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>ADDITIONAL NOTES</label>
                  <textarea rows={3} className={`${inputCls} resize-none`} placeholder="Specific features, design preferences, deadline..." value={form.notes} onChange={set("notes")} />
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-5">
                <h3 className="text-minimal text-foreground border-b border-border pb-3">CONTACT DETAILS</h3>
                <div>
                  <label className={labelCls}>YOUR NAME <span className="text-destructive">*</span></label>
                  <input type="text" required className={inputCls} placeholder="Full name" value={form.name} onChange={set("name")} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>EMAIL <span className="text-destructive">*</span></label>
                    <input type="email" required className={inputCls} placeholder="your@email.com" value={form.email} onChange={set("email")} />
                  </div>
                  <div>
                    <label className={labelCls}>WHATSAPP <span className="text-destructive">*</span></label>
                    <input type="tel" required className={inputCls} placeholder="+91 98765 43210" value={form.phone} onChange={set("phone")} />
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full bg-foreground text-background py-4 text-minimal hover:opacity-80 transition-opacity">
                SUBMIT INQUIRY →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientInquiry;
