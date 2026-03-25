import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Eye, EyeOff, Copy, Check } from "lucide-react";

const generateRefId = () => {
  const year = new Date().getFullYear();
  const num = String(Math.floor(Math.random() * 900) + 100).padStart(3, "0");
  return `GS-${year}-${num}`;
};

const InputField = ({
  label, type = "text", placeholder, value, onChange, required = false,
  rightSlot,
}: {
  label: string; type?: string; placeholder: string; value: string;
  onChange: (v: string) => void; required?: boolean; rightSlot?: React.ReactNode;
}) => (
  <div>
    <label className="text-minimal text-muted-foreground block mb-2">
      {label}{required && <span className="text-destructive ml-1">*</span>}
    </label>
    <div className="relative">
      <input
        type={type} required={required} placeholder={placeholder} value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors duration-200 placeholder:text-muted-foreground/50 pr-12"
      />
      {rightSlot && <div className="absolute right-4 top-1/2 -translate-y-1/2">{rightSlot}</div>}
    </div>
  </div>
);

const StudentLogin = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [showPass, setShowPass] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [generatedId, setGeneratedId] = useState("");
  const [copied, setCopied] = useState(false);

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const setLogin = (k: keyof typeof loginForm) => (v: string) => setLoginForm(f => ({ ...f, [k]: v }));

  const [form, setForm] = useState({ name: "", college: "", email: "", whatsapp: "", password: "" });
  const set = (k: keyof typeof form) => (v: string) => setForm(f => ({ ...f, [k]: v }));


  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setGeneratedId(generateRefId());
    setRegistered(true);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/portal/student/dashboard");
  };

  const copyId = () => {
    navigator.clipboard.writeText(generatedId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // ── Success screen ──────────────────────────────────────────────────────────
  if (registered) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <header className="border-b border-border px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-minimal text-muted-foreground hover:text-foreground transition-colors">
            <ChevronRight size={12} className="rotate-180" /> GRADSCALE
          </a>
          <span className="text-minimal text-muted-foreground">REGISTRATION COMPLETE</span>
        </header>

        <div className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="w-full max-w-lg">
            {/* Check mark */}
            <div className="w-20 h-20 border border-foreground flex items-center justify-center mb-10">
              <Check size={32} strokeWidth={1.5} />
            </div>

            <p className="text-minimal text-muted-foreground mb-3">ACCOUNT CREATED</p>
            <h1 className="text-5xl md:text-6xl font-light text-architectural mb-4">
              You're in.
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Your GradScale partner account is active. Share your unique ID with clients as proof of referral.
            </p>

            {/* ID Card */}
            <div className="border border-border p-8 mb-3 bg-muted/10">
              <p className="text-minimal text-muted-foreground mb-4">YOUR REFERENCE ID</p>
              <div className="flex items-center justify-between">
                <span className="text-4xl md:text-5xl font-light text-architectural tracking-widest">{generatedId}</span>
                <button
                  onClick={copyId}
                  className="flex items-center gap-2 text-minimal text-muted-foreground hover:text-foreground border border-border px-4 py-2 hover:border-foreground transition-all"
                >
                  {copied ? <><Check size={13} /> COPIED</> : <><Copy size={13} /> COPY</>}
                </button>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-12">
              Every client who enters this code on the inquiry form will be linked to your account and tracked in real time.
            </p>

            <button
              onClick={() => navigate("/portal/student/dashboard")}
              className="w-full bg-foreground text-background py-4 text-minimal hover:opacity-80 transition-opacity"
            >
              OPEN DASHBOARD →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Auth form ───────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Left: info panel */}
      <div className="hidden md:flex md:w-2/5 bg-foreground text-background flex-col justify-between p-16">
        <div>
          <a href="/" className="text-minimal text-background/50 hover:text-background transition-colors flex items-center gap-2">
            <ChevronRight size={12} className="rotate-180" /> GRADSCALE
          </a>
        </div>
        <div>
          <p className="text-minimal text-background/50 mb-6">STUDENT / PARTNER PORTAL</p>
          <h2 className="text-4xl font-light mb-8 leading-tight">
            Build Experience.<br />Earn While You Learn.
          </h2>
          <div className="space-y-4 border-t border-background/20 pt-8">
            {[
              ["01", "Get a unique referral ID"],
              ["02", "Refer clients to GradScale"],
              ["03", "Track conversions live"],
              ["04", "Earn ₹5,000 per delivery"],
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

      {/* Right: form panel */}
      <div className="flex-1 flex flex-col">
        <header className="border-b border-border px-8 py-4 flex items-center justify-between md:hidden">
          <a href="/" className="text-minimal text-muted-foreground">← GRADSCALE</a>
          <span className="text-minimal text-muted-foreground">STUDENT PORTAL</span>
        </header>

        <div className="flex-1 flex items-center justify-center px-8 py-16">
          <div className="w-full max-w-md">
            <div className="mb-10">
              <p className="text-minimal text-muted-foreground mb-3">STUDENT / PARTNER</p>
              <h1 className="text-4xl md:text-5xl font-light text-architectural">
                {mode === "login" ? "Welcome back." : "Create account."}
              </h1>
            </div>

            {/* Tab toggle */}
            <div className="flex border border-border mb-10 overflow-hidden">
              {(["login", "register"] as const).map(m => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`flex-1 py-3 text-minimal transition-colors duration-300 ${mode === m ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {m === "login" ? "SIGN IN" : "REGISTER"}
                </button>
              ))}
            </div>

            {mode === "login" ? (
              <form onSubmit={handleLogin} className="space-y-5">
                <InputField label="EMAIL ADDRESS" type="email" placeholder="your@email.com" value={loginForm.email} onChange={setLogin("email")} required />
                <InputField
                  label="PASSWORD" type={showPass ? "text" : "password"}
                  placeholder="••••••••" value={loginForm.password} onChange={setLogin("password")} required
                  rightSlot={
                    <button type="button" onClick={() => setShowPass(!showPass)} className="text-muted-foreground hover:text-foreground transition-colors">
                      {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  }
                />
                <div className="flex justify-end">
                  <button type="button" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Forgot password?</button>
                </div>
                <button type="submit" className="w-full bg-foreground text-background py-4 text-minimal hover:opacity-80 transition-opacity mt-2">
                  SIGN IN →
                </button>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-5">
                <InputField label="FULL NAME" placeholder="As per college records" value={form.name} onChange={set("name")} required />
                <InputField label="COLLEGE / UNIVERSITY" placeholder="Institution name" value={form.college} onChange={set("college")} required />
                <div className="grid grid-cols-2 gap-4">
                  <InputField label="EMAIL" type="email" placeholder="your@email.com" value={form.email} onChange={set("email")} required />
                  <InputField label="WHATSAPP" type="tel" placeholder="+91 98765 43210" value={form.whatsapp} onChange={set("whatsapp")} required />
                </div>
                <InputField
                  label="PASSWORD" type={showPass ? "text" : "password"}
                  placeholder="Min 8 characters" value={form.password} onChange={set("password")} required
                  rightSlot={
                    <button type="button" onClick={() => setShowPass(!showPass)} className="text-muted-foreground hover:text-foreground transition-colors">
                      {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  }
                />
                <p className="text-xs text-muted-foreground">A unique Reference ID (e.g. GS-2026-042) will be generated after registration.</p>
                <button type="submit" className="w-full bg-foreground text-background py-4 text-minimal hover:opacity-80 transition-opacity">
                  CREATE ACCOUNT →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
