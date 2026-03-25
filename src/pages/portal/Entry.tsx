import { useNavigate } from "react-router-dom";
import { GraduationCap, Briefcase, ArrowRight } from "lucide-react";

const Entry = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar */}
      <div className="border-b border-border px-8 py-5 flex items-center justify-between">
        <a href="/" className="text-minimal text-foreground font-semibold hover:opacity-70 transition-opacity">
          ← GRADSCALE
        </a>
        <span className="text-minimal text-muted-foreground">PORTAL ACCESS</span>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-architectural leading-none mb-4">
            Welcome Back.
          </h1>
          <p className="text-muted-foreground text-lg">
            Select how you want to continue with GradScale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border w-full max-w-3xl">
          {/* Student Card */}
          <button
            onClick={() => navigate("/portal/student/login")}
            className="group bg-background p-12 text-left hover:bg-foreground transition-colors duration-500 flex flex-col justify-between min-h-[340px]"
          >
            <div className="w-16 h-16 border border-border group-hover:border-background/20 flex items-center justify-center transition-colors duration-500">
              <GraduationCap size={28} className="text-foreground group-hover:text-background transition-colors duration-500" />
            </div>
            <div>
              <p className="text-minimal text-muted-foreground group-hover:text-background/60 mb-3 transition-colors duration-500">STUDENT / PARTNER</p>
              <h2 className="text-3xl font-light text-foreground group-hover:text-background transition-colors duration-500 mb-2">
                I'm a Student
              </h2>
              <p className="text-muted-foreground text-sm group-hover:text-background/70 transition-colors duration-500 leading-relaxed">
                Access your dashboard, track leads, and monitor your commission earnings.
              </p>
              <div className="mt-8 flex items-center gap-2 text-minimal text-muted-foreground group-hover:text-background/60 transition-colors duration-500">
                <span>Enter Portal</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </button>

          {/* Client Card */}
          <button
            onClick={() => navigate("/portal/client/inquiry")}
            className="group bg-background p-12 text-left hover:bg-foreground transition-colors duration-500 flex flex-col justify-between min-h-[340px]"
          >
            <div className="w-16 h-16 border border-border group-hover:border-background/20 flex items-center justify-center transition-colors duration-500">
              <Briefcase size={28} className="text-foreground group-hover:text-background transition-colors duration-500" />
            </div>
            <div>
              <p className="text-minimal text-muted-foreground group-hover:text-background/60 mb-3 transition-colors duration-500">CLIENT / BUSINESS</p>
              <h2 className="text-3xl font-light text-foreground group-hover:text-background transition-colors duration-500 mb-2">
                I'm a Client
              </h2>
              <p className="text-muted-foreground text-sm group-hover:text-background/70 transition-colors duration-500 leading-relaxed">
                Submit your project inquiry or track the progress of your ongoing project.
              </p>
              <div className="mt-8 flex items-center gap-2 text-minimal text-muted-foreground group-hover:text-background/60 transition-colors duration-500">
                <span>Submit Inquiry</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </button>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Admin?{" "}
          <button onClick={() => navigate("/portal/admin")} className="underline hover:text-foreground transition-colors">
            Sign in here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Entry;
