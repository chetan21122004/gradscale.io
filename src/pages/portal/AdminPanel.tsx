import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Users, CheckCircle, Clock, DollarSign, Shield, XCircle } from "lucide-react";

const PIPELINE_STEPS = ["received", "meeting", "onboarded", "delivered"];
const PIPELINE_LABELS = ["Lead Received", "Meeting", "Onboarded", "Delivered"];

const MOCK_STUDENTS = [
  { id: "GS-2026-001", name: "Priya Thakur", college: "MIT-WPU, Pune", leads: 5, delivered: 2, status: "active" },
  { id: "GS-2026-042", name: "Rahul Sharma", college: "FLAME University", leads: 4, delivered: 1, status: "active" },
  { id: "GS-2026-099", name: "Ananya Mehta", college: "Symbiosis, Pune", leads: 2, delivered: 0, status: "pending" },
  { id: "GS-2026-017", name: "Siddharth Rao", college: "COEP, Pune", leads: 7, delivered: 3, status: "active" },
  { id: "GS-2026-055", name: "Divya Nair", college: "VIT University", leads: 1, delivered: 0, status: "banned" },
];

const MOCK_LEADS = [
  { id: 1, client: "Rishi Enterprises", ref: "GS-2026-042", business: "E-Commerce", status: "onboarded" },
  { id: 2, client: "NexaTech Solutions", ref: "GS-2026-042", business: "SaaS", status: "meeting" },
  { id: 3, client: "Artisan Home Décor", ref: "GS-2026-042", business: "E-Commerce", status: "received" },
  { id: 4, client: "Dr. Mehra Clinic", ref: "GS-2026-001", business: "Healthcare", status: "delivered" },
  { id: 5, client: "Joshi Law Firm", ref: "GS-2026-001", business: "Portfolio", status: "onboarded" },
  { id: 6, client: "SpeedCraft Motors", ref: "GS-2026-017", business: "E-Commerce", status: "delivered" },
  { id: 7, client: "Bloom Organics", ref: "GS-2026-017", business: "E-Commerce", status: "delivered" },
  { id: 8, client: "Sunrise Events", ref: "GS-2026-017", business: "Events", status: "delivered" },
];

const STATUS_BADGE: Record<string, string> = {
  active: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  banned: "bg-red-100 text-red-800",
};

const LEAD_BADGE: Record<string, string> = {
  received: "bg-blue-100 text-blue-800",
  meeting: "bg-yellow-100 text-yellow-800",
  onboarded: "bg-purple-100 text-purple-800",
  delivered: "bg-green-100 text-green-800",
};

const AdminPanel = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(false);
  const [leads, setLeads] = useState(MOCK_LEADS);
  const [students, setStudents] = useState(MOCK_STUDENTS);
  const [activeTab, setActiveTab] = useState<"students" | "leads" | "payouts">("students");

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") { setAuthenticated(true); }
    else { setAuthError(true); }
  };

  const updateLeadStatus = (id: number, status: string) => {
    setLeads(leads.map(l => l.id === id ? { ...l, status } : l));
  };

  const toggleStudentStatus = (id: string) => {
    setStudents(students.map(s => s.id === id ? { ...s, status: s.status === "active" ? "banned" : "active" } : s));
  };

  const deliveredPayouts = students
    .filter(s => s.delivered > 0 && s.status === "active")
    .map(s => ({ ...s, owed: s.delivered * 5000 }));

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <div className="border-b border-border px-8 py-5 flex items-center justify-between">
          <button onClick={() => navigate("/portal")} className="flex items-center gap-2 text-minimal text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={14} /> BACK
          </button>
          <span className="text-minimal text-muted-foreground">ADMIN ACCESS</span>
        </div>
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="w-full max-w-sm">
            <div className="mb-10 flex flex-col items-center">
              <div className="w-16 h-16 border border-border flex items-center justify-center mb-6">
                <Shield size={24} />
              </div>
              <h1 className="text-3xl font-light text-architectural">Admin Access</h1>
              <p className="text-muted-foreground text-sm mt-2">Restricted area</p>
            </div>
            <form onSubmit={handleAuth} className="space-y-5">
              <div>
                <label className="text-minimal text-muted-foreground block mb-2">ADMIN PASSWORD</label>
                <input
                  type="password"
                  required
                  className={`w-full border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors ${authError ? "border-destructive" : "border-border"}`}
                  value={password}
                  onChange={e => { setPassword(e.target.value); setAuthError(false); }}
                  placeholder="••••••••"
                />
                {authError && <p className="text-destructive text-xs mt-2">Incorrect password.</p>}
              </div>
              <button type="submit" className="w-full bg-foreground text-background py-4 text-minimal hover:opacity-80 transition-opacity">
                SIGN IN →
              </button>
            </form>
            <p className="text-xs text-muted-foreground text-center mt-6">Demo password: <code>admin123</code></p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Bar */}
      <div className="border-b border-border px-6 md:px-10 py-5 flex items-center justify-between sticky top-0 bg-background z-50">
        <button onClick={() => navigate("/portal")} className="flex items-center gap-2 text-minimal text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft size={14} /> PORTAL
        </button>
        <span className="text-minimal text-foreground font-semibold">GRADSCALE ADMIN</span>
        <span className="text-minimal text-muted-foreground">PANEL</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 w-full">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-12">
          {[
            { icon: Users, label: "STUDENTS", value: students.length },
            { icon: Clock, label: "OPEN LEADS", value: leads.filter(l => l.status !== "delivered").length },
            { icon: CheckCircle, label: "DELIVERED", value: leads.filter(l => l.status === "delivered").length },
            { icon: DollarSign, label: "PAYOUTS DUE (₹)", value: deliveredPayouts.reduce((a, s) => a + s.owed, 0).toLocaleString("en-IN") },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-background px-6 py-8">
              <Icon size={18} className="text-muted-foreground mb-4" />
              <p className="text-minimal text-muted-foreground mb-1">{label}</p>
              <p className="text-4xl font-light text-architectural">{value}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex border border-border mb-10 w-fit">
          {(["students", "leads", "payouts"] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 text-minimal transition-colors capitalize ${activeTab === tab ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Students Tab */}
        {activeTab === "students" && (
          <div className="border border-border divide-y divide-border">
            <div className="grid grid-cols-12 px-6 py-3 bg-muted/30">
              {["ID", "NAME & COLLEGE", "LEADS", "DELIVERED", "STATUS", "ACTION"].map(h => (
                <div key={h} className={`text-minimal text-muted-foreground ${h === "NAME & COLLEGE" ? "col-span-4" : h === "ACTION" ? "col-span-2" : "col-span-1"}`}>{h}</div>
              ))}
            </div>
            {students.map((student) => (
              <div key={student.id} className="grid grid-cols-12 px-6 py-5 items-center hover:bg-muted/10 transition-colors">
                <div className="col-span-1 text-xs text-muted-foreground font-mono">{student.id.split("-").pop()}</div>
                <div className="col-span-4">
                  <p className="text-sm font-light text-foreground">{student.name}</p>
                  <p className="text-xs text-muted-foreground">{student.college}</p>
                </div>
                <div className="col-span-1 text-sm text-foreground">{student.leads}</div>
                <div className="col-span-1 text-sm text-foreground">{student.delivered}</div>
                <div className="col-span-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${STATUS_BADGE[student.status]}`}>{student.status}</span>
                </div>
                <div className="col-span-2 flex gap-2">
                  <button onClick={() => toggleStudentStatus(student.id)} className={`text-xs border px-3 py-1.5 transition-colors ${student.status === "banned" ? "border-green-500 text-green-700 hover:bg-green-50" : "border-red-400 text-red-600 hover:bg-red-50"}`}>
                    {student.status === "banned" ? "UNBAN" : "BAN"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Leads Tab */}
        {activeTab === "leads" && (
          <div className="border border-border divide-y divide-border">
            <div className="grid grid-cols-12 px-6 py-3 bg-muted/30">
              {["CLIENT", "REF ID", "INDUSTRY", "STATUS", "UPDATE STATUS"].map(h => (
                <div key={h} className={`text-minimal text-muted-foreground ${h === "CLIENT" ? "col-span-3" : h === "UPDATE STATUS" ? "col-span-4" : "col-span-2"}`}>{h}</div>
              ))}
            </div>
            {leads.map((lead) => (
              <div key={lead.id} className="grid grid-cols-12 px-6 py-5 items-center hover:bg-muted/10 transition-colors">
                <div className="col-span-3 text-sm font-light text-foreground">{lead.client}</div>
                <div className="col-span-2 text-xs font-mono text-muted-foreground">{lead.ref.split("-").slice(-2).join("-")}</div>
                <div className="col-span-2 text-sm text-muted-foreground">{lead.business}</div>
                <div className="col-span-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${LEAD_BADGE[lead.status]}`}>{lead.status}</span>
                </div>
                <div className="col-span-3">
                  <select
                    value={lead.status}
                    onChange={e => updateLeadStatus(lead.id, e.target.value)}
                    className="border border-border bg-background px-3 py-1.5 text-xs focus:outline-none focus:border-foreground transition-colors w-full"
                  >
                    {PIPELINE_STEPS.map((step, i) => <option key={step} value={step}>{PIPELINE_LABELS[i]}</option>)}
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Payouts Tab */}
        {activeTab === "payouts" && (
          <div>
            <div className="border border-border divide-y divide-border">
              <div className="grid grid-cols-12 px-6 py-3 bg-muted/30">
                {["STUDENT", "COLLEGE", "PROJECTS DELIVERED", "AMOUNT DUE", "ACTION"].map(h => (
                  <div key={h} className={`text-minimal text-muted-foreground ${h === "STUDENT" ? "col-span-3" : h === "COLLEGE" ? "col-span-3" : h === "ACTION" ? "col-span-2" : "col-span-2"}`}>{h}</div>
                ))}
              </div>
              {deliveredPayouts.length === 0 && (
                <div className="px-6 py-12 text-center text-muted-foreground text-sm">No payouts pending.</div>
              )}
              {deliveredPayouts.map((student) => (
                <div key={student.id} className="grid grid-cols-12 px-6 py-5 items-center hover:bg-muted/10 transition-colors">
                  <div className="col-span-3 text-sm font-light text-foreground">{student.name}</div>
                  <div className="col-span-3 text-sm text-muted-foreground">{student.college}</div>
                  <div className="col-span-2 text-sm text-foreground">{student.delivered}</div>
                  <div className="col-span-2 text-sm font-light text-foreground">₹{student.owed.toLocaleString("en-IN")}</div>
                  <div className="col-span-2">
                    <button className="border border-green-500 text-green-700 text-xs px-4 py-1.5 hover:bg-green-50 transition-colors">
                      MARK PAID
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {deliveredPayouts.length > 0 && (
              <div className="border border-border border-t-0 px-6 py-4 bg-muted/10 flex justify-between items-center">
                <p className="text-minimal text-muted-foreground">TOTAL PAYOUTS DUE</p>
                <p className="text-2xl font-light text-foreground">₹{deliveredPayouts.reduce((a, s) => a + s.owed, 0).toLocaleString("en-IN")}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
