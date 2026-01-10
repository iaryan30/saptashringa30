import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Compass, UtensilsCrossed, Bird } from "lucide-react";
import safariImage from "@/assets/safari-experience.jpg";
import diningImage from "@/assets/dining-experience.jpg";

const experiences = [
    {
        icon: Compass,
        title: "Wildlife Safari",
        description: "Guided jeep safaris into Valmiki Tiger Reserve with expert naturalists",
        image: safariImage,
        duration: "4-6 hours",
    },
    {
        icon: UtensilsCrossed,
        title: "Forest Dining",
        description: "Candlelit dinners on the deck with locally-sourced seasonal cuisine",
        image: diningImage,
        duration: "2 hours",
    },
    {
        icon: Bird,
        title: "Bird Watching",
        description: "Early morning walks to spot over 250 species of resident birds",
        image: null,
        duration: "3 hours",
    },
    {
        icon: Camera,
        title: "Photography Walks",
        description: "Capture the golden hour magic with our in-house photography guide",
        image: null,
        duration: "2 hours",
    },
];

export const ExperiencesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experiences" className="py-24 md:py-32 bg-sand-soft">
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
                            Curated Experiences
                        </p>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest-deep mb-6">
                            Moments That
                            <span className="block italic text-forest-moss">Stay Forever</span>
                        </h2>
                        <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
                            From thrilling tiger safaris to peaceful sunrise meditations,
                            every experience is designed to connect you with nature's rhythm.
                        </p>
                    </motion.div>

                    {/* Experiences Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                className="group relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-all duration-500"
                            >
                                {exp.image ? (
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={exp.image}
                                            alt={exp.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/40 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <div className="flex items-center gap-3 mb-2">
                                                <exp.icon className="w-6 h-6 text-brass" />
                                                <h3 className="font-display text-2xl text-sand-light">{exp.title}</h3>
                                            </div>
                                            <p className="text-sand-light/80 text-sm">{exp.description}</p>
                                            <span className="inline-block mt-3 text-xs text-brass tracking-wide">
                                                Duration: {exp.duration}
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-8 h-64 flex flex-col justify-center bg-gradient-to-br from-forest-deep to-forest-moss">
                                        <div className="w-14 h-14 rounded-full bg-brass/20 flex items-center justify-center mb-4">
                                            <exp.icon className="w-7 h-7 text-brass" />
                                        </div>
                                        <h3 className="font-display text-2xl text-sand-light mb-2">{exp.title}</h3>
                                        <p className="text-sand-light/80 text-sm mb-3">{exp.description}</p>
                                        <span className="text-xs text-brass tracking-wide">
                                            Duration: {exp.duration}
                                        </span>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
