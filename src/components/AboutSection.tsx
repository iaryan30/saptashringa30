import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Heart, Users, TreeDeciduous } from "lucide-react";

const values = [
    {
        icon: Leaf,
        title: "Luxurious",
        description: "Presidential Suits that offers everything you need.",
    },
    {
        icon: Heart,
        title: "Warm Hospitality",
        description: "Personalized service that feels like family, not a hotel with ",
    },
    {
        icon: Users,
        title: "Experience",
        description: "Swimming pool, exotic bathtubs, kids play pool, BBQ, watch movies under the stars and cultural events ",
    },
    {
        icon: TreeDeciduous,
        title: "Heritage Food",
        description: "Curated fusion food from Champaran, Thakali, and Tharu Tribe",
    },
];

export const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-24 md:py-32 bg-sand-soft">
            <div className="container mx-auto px-6">
                <div ref={ref} className="max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <p className="text-brass font-medium tracking-[0.2em] uppercase text-sm mb-4">
                            Our Story
                        </p>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest-deep mb-6">
                            A Sanctuary Born from
                            <span className="block italic text-forest-moss">Love for the Wild</span>
                        </h2>
                        <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
                            Nestled at the edge of Valmiki Tiger Reserve, our holiday home is more than an escape—
                            it's a bridge between slow luxury, modern comfort and ancient wilderness.
                        </p>
                    </motion.div>

                    {/* Values Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                className="group text-center p-8 rounded-2xl bg-card hover:shadow-elevated transition-all duration-500"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-forest-deep/10 flex items-center justify-center group-hover:bg-brass/20 transition-colors duration-500">
                                    <value.icon className="w-8 h-8 text-forest-deep group-hover:text-brass transition-colors duration-500" />
                                </div>
                                <h3 className="font-display text-xl text-forest-deep mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Quote */}
                    <motion.blockquote
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-20 text-center"
                    >
                        <p className="font-display text-2xl md:text-3xl text-forest-moss italic max-w-3xl mx-auto leading-relaxed">
                            "In every walk with nature, one receives far more than they seek."
                        </p>
                        <cite className="block mt-4 text-brass text-sm tracking-wide not-italic">
                            — John Muir
                        </cite>
                    </motion.blockquote>
                </div>
            </div>
        </section>
    );
};
