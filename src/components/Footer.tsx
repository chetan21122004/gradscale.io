const Footer = () => {
  return (
    <footer className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h4 className="text-minimal text-foreground font-semibold mb-4">GRADSCALE</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Bridging the gap between learning and earning by empowering students with real-world professional exposure and skill development.
            </p>
          </div>

          <div>
            <h5 className="text-minimal text-muted-foreground mb-4">PROGRAMS</h5>
            <div className="space-y-3">
              <a href="#how-it-works" className="block text-sm text-foreground hover:text-muted-foreground transition-colors duration-300">
                Skill Development Program
              </a>
              <a href="#colleges" className="block text-sm text-foreground hover:text-muted-foreground transition-colors duration-300">
                College Partnerships
              </a>
              <a href="#portfolio" className="block text-sm text-foreground hover:text-muted-foreground transition-colors duration-300">
                Portfolio
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-minimal text-muted-foreground mb-4">COMPANY</h5>
            <div className="space-y-3">
              <a href="#" className="block text-sm text-foreground hover:text-muted-foreground transition-colors duration-300">
                About GradScale
              </a>
              <a href="#" className="block text-sm text-foreground hover:text-muted-foreground transition-colors duration-300">
                Contact
              </a>
              <a href="#" className="block text-sm text-foreground hover:text-muted-foreground transition-colors duration-300">
                Privacy Policy
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-minimal text-muted-foreground mb-4">CONNECT</h5>
            <div className="space-y-3">
              <a href="#" className="block text-sm text-foreground hover:text-muted-foreground transition-colors duration-300">
                LinkedIn
              </a>
              <a href="mailto:hello@gradscale.com" className="block text-sm text-foreground hover:text-muted-foreground transition-colors duration-300">
                hello@gradscale.com
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © 2026 GradScale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
