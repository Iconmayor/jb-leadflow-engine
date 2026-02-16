import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Wrench, Flame, Thermometer, ShieldCheck, AlertTriangle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-plumbing.jpg";
import TrustBadges from "@/components/TrustBadges";
import TestimonialSlider from "@/components/TestimonialSlider";
import QuoteForm from "@/components/QuoteForm";

const services = [
  { icon: Wrench, title: "Plumbing Repairs", desc: "From leaky taps to full installations — fast and reliable." },
  { icon: Flame, title: "Boiler Services", desc: "Installation, repairs and annual servicing for all boiler brands." },
  { icon: Thermometer, title: "Central Heating", desc: "Radiator installs, powerflushes and full heating system upgrades." },
  { icon: ShieldCheck, title: "Gas Safety", desc: "CP12 certificates, gas leak detection and appliance checks." },
  { icon: AlertTriangle, title: "Emergency Callouts", desc: "24/7 emergency response — we're here when you need us most." },
];

const whyUs = [
  { title: "Fast Response", desc: "Same-day service for most jobs. Emergency? We aim for under 1 hour." },
  { title: "Transparent Pricing", desc: "No hidden fees. We quote before we start so there are no surprises." },
  { title: "Qualified & Insured", desc: "Gas Safe registered, fully insured, and DBS checked engineers." },
  { title: "Guaranteed Work", desc: "All our work comes with a warranty for your complete peace of mind." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <main className="pb-16 md:pb-0">
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero min-h-[520px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Professional plumber servicing a boiler" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
              Reliable Plumbing, Heating & Gas Services You Can Trust
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg">
              Emergency & scheduled services available. Gas Safe registered engineers across Greater London.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact">
                <Button className="bg-cta-gradient text-accent-foreground shadow-cta hover:opacity-90 font-semibold text-base px-8 py-6">
                  Request a Quote
                </Button>
              </Link>
              <a href="tel:+447588886112">
                <Button
  variant="outline"
  className="border-primary-foreground/30 text-black hover:bg-primary-foreground/10 font-semibold text-base px-8 py-6"
>
  <Phone className="w-5 h-5 mr-2" /> Call Now
</Button>

              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="container mx-auto px-4 lg:px-8 -mt-8 relative z-10">
        <TrustBadges />
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Our Services</h2>
          <p className="text-muted-foreground max-w-md mx-auto">Professional solutions for every plumbing, heating and gas need.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
            >
              <Link
                to="/services"
                className="block p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-shadow group"
              >
                <s.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold mt-3">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Why Choose JD Plumbing & Heating?</h2>
            <p className="text-muted-foreground max-w-md mx-auto">We're committed to quality, safety, and your satisfaction.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 rounded-xl bg-card shadow-card"
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">What Our Customers Say</h2>
        </div>
        <TestimonialSlider />
      </section>

      {/* Quote Form */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Get a Free Quote</h2>
              <p className="text-muted-foreground">Tell us what you need and we'll get back to you fast.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="container mx-auto px-4 lg:px-8 py-16 text-center">
        <h2 className="font-display text-2xl font-bold text-foreground mb-3">Serving Greater London & Surrounding Areas</h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-6">
          We cover all London boroughs and the Home Counties. Not sure if we cover your area? Give us a call and we'll let you know.
        </p>
        <a href="tel:01234567890">
          <Button className="bg-cta-gradient text-accent-foreground shadow-cta hover:opacity-90 font-semibold px-8 py-5">
            <Phone className="w-5 h-5 mr-2" /> +447588886112
          </Button>
        </a>
      </section>
    </main>
  );
};

export default Index;
