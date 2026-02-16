import { Phone, Mail, MapPin, Clock } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

const Contact = () => (
  <main className="pb-16 md:pb-0">
    {/* Hero */}
    <section className="bg-hero py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">Contact & Book</h1>
        <p className="text-lg text-primary-foreground/80 max-w-lg mx-auto">
          Ready to book? Fill out the form or give us a call. We respond fast.
        </p>
      </div>
    </section>

    <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Form */}
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">Request a Quote</h2>
          <p className="text-muted-foreground mb-6">Fill in your details and we'll get back to you within the hour during business hours.</p>
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
            <QuoteForm />
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Get in Touch Directly</h2>
          <div className="space-y-6">
            <a href="tel:01234567890" className="flex items-start gap-4 p-5 rounded-xl bg-card shadow-card group hover:shadow-card-hover transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-0.5">Call Us Now</h3>
                <p className="text-accent font-bold text-lg">+447588886112</p>
                <p className="text-xs text-muted-foreground mt-1">Available 24/7 for emergencies</p>
              </div>
            </a>

            <a href="mailto:info@jdplumbing.co.uk" className="flex items-start gap-4 p-5 rounded-xl bg-card shadow-card">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-0.5">Email Us</h3>
                <p className="text-sm text-muted-foreground">info@jdplumbing.co.uk</p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-card shadow-card">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-0.5">Service Areas</h3>
                <p className="text-sm text-muted-foreground">All London boroughs, Essex, Hertfordshire, Kent, Surrey, and surrounding areas.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-card shadow-card">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-0.5">Working Hours</h3>
                <p className="text-sm text-muted-foreground">Mon–Fri: 7am – 8pm<br />Sat: 8am – 5pm<br />Sun & Emergencies: 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Contact;
