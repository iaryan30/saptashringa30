import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
    { src: "/assets/gallery1.jpg", caption: "Morning Safari" },
    { src: "/assets/gallery2.jpg", caption: "Forest Trails" },
    { src: "/assets/gallery3.jpg", caption: "Cottage Veranda" },
    { src: "/assets/gallery4.jpg", caption: "Wildlife Spotting" },
    { src: "/assets/gallery5.jpg", caption: "Stargazing Nights" },
];

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
    const [current, setCurrent] = useState(0);

    // Auto scroll every 4 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % galleryImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const prev = () => setCurrent((current - 1 + galleryImages.length) % galleryImages.length);
    const next = () => setCurrent((current + 1) % galleryImages.length);

    return (
        <section className="py-24 md:py-32 bg-forest-moss/10">
            <div className="container mx-auto px-6">
                <div ref={ref} className="max-w-7xl mx-auto">

                    {/* Gallery Slider */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="mb-24"
                    >
                        <div className="text-center mb-10">
                            <p className="text-brass font-medium tracking-[0.2em] uppercase text-sm mb-4">
                                Our Gallery
                            </p>
                            <h2 className="font-display text-4xl md:text-5xl text-forest-deep">
                                Glimpses of the
                                <span className="italic text-forest-moss"> Wild</span>
                            </h2>
                        </div>

                        <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-soft">
                            {/* Image */}
                            <img
                                src={galleryImages[current].src}
                                alt={galleryImages[current].caption}
                                className="w-full h-[500px] object-cover transition-all duration-700"
                            />

                            {/* Caption */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-6 py-4">
                                <p className="text-white font-display text-lg italic">
                                    {galleryImages[current].caption}
                                </p>
                            </div>

                            {/* Left Arrow */}
                            <button
                                onClick={prev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            {/* Right Arrow */}
                            <button
                                onClick={next}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Dots */}
                            <div className="absolute bottom-4 right-6 flex gap-2">
                                {galleryImages.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrent(i)}
                                        className={`w-2 h-2 rounded-full transition-all ${
                                            i === current ? "bg-white w-4" : "bg-white/50"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

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
