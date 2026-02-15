import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wrench, Flame, Thermometer, ShieldCheck, AlertTriangle, Phone, CheckCircle } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

const serviceData = [
  {
    id: "plumbing",
    icon: Wrench,
    title: "Plumbing Repairs & Installations",
    desc: "From dripping taps and leaking pipes to full bathroom installations — our skilled plumbers deliver fast, lasting solutions.",
    points: ["Tap & toilet repairs", "Pipe replacements & leak fixes", "Bathroom fitting & refurbishment", "Water tank installation", "Unblocking drains & toilets"],
  },
  {
    id: "boiler",
    icon: Flame,
    title: "Boiler Installation & Repairs",
    desc: "Keep your home warm and safe with expert boiler services. We work with all major brands and offer competitive pricing.",
    points: ["New boiler installation", "Boiler breakdowns & repairs", "Annual boiler servicing", "System upgrades & conversions", "Warranty-backed work"],
  },
  {
    id: "heating",
    icon: Thermometer,
    title: "Central Heating Services",
    desc: "Full heating system design, installation and maintenance to keep your home comfortable all year round.",
    points: ["Radiator installation & replacement", "Powerflush services", "Underfloor heating", "Heating system design", "Thermostat & controls setup"],
  },
  {
    id: "gas",
    icon: ShieldCheck,
    title: "Gas Engineering & Safety Checks",
    desc: "Safety is our priority. We provide all required gas safety checks and certifications for homeowners and landlords.",
    points: ["Landlord Gas Safety Certificates (CP12)", "Gas leak detection & repair", "Gas cooker & hob installation", "Gas fire servicing", "Carbon monoxide testing"],
  },
  {
    id: "emergency",
    icon: AlertTriangle,
    title: "Emergency Callouts",
    desc: "Plumbing emergencies don't wait — and neither do we. Our 24/7 emergency team responds fast to protect your property.",
    points: ["Burst pipes", "Boiler breakdowns in winter", "Gas leaks", "Major leaks & flooding", "No hot water or heating"],
  },
];

const Services = () => (
  <main className="pb-16 md:pb-0">
    {/* Hero */}
    <section className="bg-hero py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">Our Services</h1>
        <p className="text-lg text-primary-foreground/80 max-w-lg mx-auto">
          Professional plumbing, heating and gas services for homes and rental properties across Greater London.
        </p>
      </div>
    </section>

    {/* Services */}
    <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 space-y-16">
      {serviceData.map((s, i) => (
        <div
          key={s.id}
          id={s.id}
          className={`flex flex-col lg:flex-row gap-8 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <s.icon className="w-6 h-6 text-accent" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{s.title}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
            <ul className="space-y-2 mb-6">
              {s.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <Link to="/contact">
                <Button className="bg-cta-gradient text-accent-foreground shadow-cta hover:opacity-90 font-semibold">
                  Get a Quote
                </Button>
              </Link>
              <a href="tel:01234567890">
                <Button variant="outline" className="font-semibold">
                  <Phone className="w-4 h-4 mr-2" /> Call Us
                </Button>
              </a>
            </div>
          </div>
          <div className="flex-1 w-full lg:max-w-md">
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <h3 className="font-display text-lg font-bold mb-4 text-foreground">Quick Quote for {s.title.split(" ")[0]}</h3>
              <QuoteForm variant="compact" />
            </div>
          </div>
        </div>
      ))}
    </section>
  </main>
);

export default Services;
