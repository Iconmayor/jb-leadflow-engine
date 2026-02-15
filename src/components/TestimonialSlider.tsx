import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    text: "JD Plumbing fixed our boiler within 2 hours of calling. Brilliant service, fair price, and the engineer was lovely. Can't recommend enough!",
    rating: 5,
  },
  {
    name: "James W.",
    text: "We had a burst pipe emergency on a Sunday. They were here in under an hour. Professional, clean, and sorted it quickly. Lifesavers!",
    rating: 5,
  },
  {
    name: "Linda T.",
    text: "Had a full central heating system installed. The team was punctual, tidy and explained everything clearly. Fantastic value for money.",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <div className="relative max-w-2xl mx-auto text-center">
      <div className="flex justify-center gap-1 mb-3">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
        ))}
      </div>
      <blockquote className="text-lg text-foreground leading-relaxed mb-4 italic">
        "{t.text}"
      </blockquote>
      <cite className="text-sm font-semibold text-muted-foreground not-italic">— {t.name}</cite>

      <div className="flex justify-center gap-3 mt-6">
        <button
          onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)}
          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => setIdx((idx + 1) % testimonials.length)}
          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
