import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Entry from "./pages/portal/Entry";
import StudentLogin from "./pages/portal/StudentLogin";
import StudentDashboard from "./pages/portal/StudentDashboard";
import ClientInquiry from "./pages/portal/ClientInquiry";
import ClientTracker from "./pages/portal/ClientTracker";
import AdminPanel from "./pages/portal/AdminPanel";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Landing site */}
          <Route path="/" element={<Index />} />

          {/* Portal entry */}
          <Route path="/portal" element={<Entry />} />

          {/* Student routes */}
          <Route path="/portal/student/login" element={<StudentLogin />} />
          <Route path="/portal/student/dashboard" element={<StudentDashboard />} />

          {/* Client routes */}
          <Route path="/portal/client/inquiry" element={<ClientInquiry />} />
          <Route path="/portal/client/track" element={<ClientTracker />} />

          {/* Admin */}
          <Route path="/portal/admin" element={<AdminPanel />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
