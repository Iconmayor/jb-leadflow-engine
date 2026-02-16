import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-display font-bold text-lg">JD</span>
            </div>
            <div>
              <span className="font-display font-bold text-lg block leading-tight">JD Plumbing</span>
              <span className="text-xs opacity-70 block -mt-0.5">& Heating</span>
            </div>
          </div>
          <p className="text-sm opacity-80 leading-relaxed max-w-xs">
            Trusted plumbing, heating & gas services for homeowners and landlords. Available for emergencies 24/7.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "Services", path: "/services" },
              { label: "About Us", path: "/about" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <Link key={link.path} to={link.path} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-bold text-lg mb-4">Get in Touch</h4>
          <div className="flex flex-col gap-3 text-sm">
            <a href="tel:01234567890" className="flex items-center gap-2 opacity-80 hover:opacity-100">
              <Phone className="w-4 h-4 text-accent" /> +447588886112
            </a>
            <a href="mailto:info@jdplumbing.co.uk" className="flex items-center gap-2 opacity-80 hover:opacity-100">
              <Mail className="w-4 h-4 text-accent" /> info@jdplumbing.co.uk
            </a>
            <span className="flex items-center gap-2 opacity-80">
              <MapPin className="w-4 h-4 text-accent" /> Serving Greater London & Surrounding Areas
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} JD Plumbing & Heating. All rights reserved. Gas Safe Registered.
      </div>
    </div>
  </footer>
);

export default Footer;
