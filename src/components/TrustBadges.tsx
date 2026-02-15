import { ShieldCheck, Clock, Award, ThumbsUp } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Gas Safe Registered" },
  { icon: Clock, label: "24/7 Emergency" },
  { icon: Award, label: "15+ Years Experience" },
  { icon: ThumbsUp, label: "5★ Rated Service" },
];

const TrustBadges = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {badges.map((b) => (
      <div key={b.label} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card shadow-card text-center">
        <b.icon className="w-8 h-8 text-accent" />
        <span className="text-sm font-semibold text-foreground">{b.label}</span>
      </div>
    ))}
  </div>
);

export default TrustBadges;
