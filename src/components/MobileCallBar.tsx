import { Phone } from "lucide-react";

const MobileCallBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
    <a
      href="tel:01234567890"
      className="flex items-center justify-center gap-2 bg-cta-gradient text-accent-foreground py-4 font-semibold text-base shadow-cta"
    >
      <Phone className="w-5 h-5" />
      Call Now — 0123 456 789
    </a>
  </div>
);

export default MobileCallBar;
