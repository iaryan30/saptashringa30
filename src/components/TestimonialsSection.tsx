import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Priya & Arun",
        location: "Mumbai",
        text: "The perfect escape from city chaos. We spotted a tiger on our first safari, and the stargazing from our cottage veranda was magical. Already planning our return!",
        rating: 5,
    },
    {
        name: "Michael Chen",
        location: "Singapore",
        text: "As a wildlife photographer, I've stayed at many lodges. Valmiki Wilderness stands out for its authentic eco-practices and incredible access to pristine forest trails.",
        rating: 5,
    },
    {
        name: "The Sharma Family",
        location: "Delhi",
        text: "Our kids learned more about nature in three days here than in years of textbooks. The staff treated us like family. An experience our children will never forget.",
        rating: 5,
    },
];

export const TestimonialsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 md:py-32 bg-forest-moss/10">
            <div className="container mx-auto px-6">
                <div ref={ref} className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <p className="text-brass font-medium tracking-[0.2em] uppercase text-sm mb-4">
                            Guest Stories
                        </p>
                        <h2 className="font-display text-4xl md:text-5xl text-forest-deep">
                            Voices from the
                            <span className="italic text-forest-moss"> Wilderness</span>
                        </h2>
                    </motion.div>

                    {/* Testimonials Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                                className="bg-card p-8 rounded-2xl shadow-soft relative"
                            >
                                <Quote className="absolute top-6 right-6 w-10 h-10 text-brass/20" />

                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-brass text-brass" />
                                    ))}
                                </div>

                                <p className="text-muted leading-relaxed mb-6 italic">
                                    "{testimonial.text}"
                                </p>

                                <div className="border-t border-border pt-4">
                                    <p className="font-display text-forest-deep font-medium">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-muted text-sm">{testimonial.location}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
