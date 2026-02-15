import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  email: z.string().trim().email("Invalid email").max(255).optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().max(1000).optional(),
});

type FormData = z.infer<typeof formSchema>;

const QuoteForm = ({ variant = "default" }: { variant?: "default" | "compact" }) => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [form, setForm] = useState<FormData>({
    name: "", phone: "", email: "", service: "", message: "",
  });
  // Honeypot
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // bot detected

    const result = formSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    toast.success("Thank you! We'll be in touch shortly.");
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <CheckCircle className="w-12 h-12 text-accent mb-3" />
        <h3 className="font-display text-xl font-bold text-foreground mb-1">Quote Request Received!</h3>
        <p className="text-muted-foreground text-sm">We'll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Honeypot - hidden */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="absolute opacity-0 -z-10 h-0 w-0"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className={variant === "compact" ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "space-y-4"}>
        <div>
          <Input
            placeholder="Your Name *"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="bg-card"
          />
          {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <Input
            placeholder="Phone Number *"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="bg-card"
          />
          {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <Input
        placeholder="Email (optional)"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="bg-card"
      />
      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}

      <div>
        <Select value={form.service} onValueChange={(val) => setForm({ ...form, service: val })}>
          <SelectTrigger className="bg-card">
            <SelectValue placeholder="Select a Service *" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="plumbing">Plumbing Repairs & Installation</SelectItem>
            <SelectItem value="boiler">Boiler Installation & Repair</SelectItem>
            <SelectItem value="heating">Central Heating</SelectItem>
            <SelectItem value="gas">Gas Engineering & Safety</SelectItem>
            <SelectItem value="emergency">Emergency Callout</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
      </div>

      <Textarea
        placeholder="Tell us about your issue (optional)"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="bg-card min-h-[80px]"
      />

      <Button type="submit" className="w-full bg-cta-gradient text-accent-foreground shadow-cta hover:opacity-90 font-semibold text-base py-6">
        Request a Free Quote
      </Button>
    </form>
  );
};

export default QuoteForm;
