import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "HOW IT WORKS", href: "#how-it-works" },
  { label: "WHY JOIN", href: "#why-join" },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "FOR COLLEGES", href: "#colleges" },
  { label: "FAQ", href: "#faq" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-minimal text-foreground font-semibold">
          GRADSCALE
        </a>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>



        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
