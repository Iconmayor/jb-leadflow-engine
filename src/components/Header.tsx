import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-hero flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">JD</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-display font-bold text-lg text-foreground leading-tight block">JD Plumbing</span>
            <span className="text-xs text-muted-foreground leading-tight block -mt-0.5">& Heating</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:01onal23456789" className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Phone className="w-4 h-4 text-accent" />
+447588886112          </a>
          <Link to="/contact">
            <Button className="bg-cta-gradient text-accent-foreground shadow-cta hover:opacity-90 transition-opacity font-semibold">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-secondary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium ${
                  location.pathname === link.path
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2">
            <a href="tel:01onal23456789" className="flex items-center justify-center gap-2 py-3 rounded-md bg-primary text-primary-foreground font-semibold">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full bg-cta-gradient text-accent-foreground shadow-cta font-semibold">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
