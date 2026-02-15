import { ShieldCheck, Clock, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => (
  <main className="pb-16 md:pb-0">
    {/* Hero */}
    <section className="bg-hero py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">About JD Plumbing & Heating</h1>
        <p className="text-lg text-primary-foreground/80 max-w-lg mx-auto">
          Over 15 years of trusted plumbing, heating & gas services.
        </p>
      </div>
    </section>

    <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Story</h2>
        <div className="prose prose-lg text-muted-foreground space-y-4">
          <p>
            JD Plumbing & Heating was founded with one simple mission: to provide honest, high-quality plumbing and heating services that homeowners and landlords can truly rely on.
          </p>
          <p>
            With over 15 years of hands-on experience in the trade, our team of Gas Safe registered engineers has earned a reputation for getting the job done right — first time, every time. From emergency callouts to full heating system installations, we treat every job with the same care and professionalism.
          </p>
          <p>
            We believe in transparent pricing, clear communication, and leaving your property cleaner than we found it. That's the JD promise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {[
            { icon: ShieldCheck, title: "Gas Safe Registered", desc: "Fully certified and regulated for your safety and peace of mind." },
            { icon: Clock, title: "15+ Years Experience", desc: "Thousands of jobs completed across London and the Home Counties." },
            { icon: Award, title: "Fully Insured", desc: "Comprehensive public liability and professional indemnity insurance." },
            { icon: Users, title: "Family Values", desc: "We treat your home like our own — respectful, tidy, and professional." },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-xl bg-card shadow-card">
              <item.icon className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-display text-lg font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact">
            <Button className="bg-cta-gradient text-accent-foreground shadow-cta hover:opacity-90 font-semibold px-8 py-5 text-base">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default About;
