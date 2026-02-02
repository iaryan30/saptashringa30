import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Maximize2, Users, Wifi, Wind } from "lucide-react";
import { Button } from "./ui/button";
import cottageInterior from "@/assets/cottage-interior.jpg";

const amenities = [
    { icon: Maximize2, label: "400 sq ft" },
    { icon: Users, label: "2-4 Guests" },
    { icon: Wifi, label: "Free WiFi" },
    { icon: Wind, label: "AC & Heating" },
];

export const AccommodationsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="accommodations" className="py-24 md:py-32 bg-forest-deep">
            <div className="container mx-auto px-6">
                <div ref={ref} className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative overflow-hidden rounded-2xl">
                                <img
                                    src={cottageInterior}
                                    alt="Luxury cottage interior with forest views"
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 to-transparent" />
                            </div>
                            {/* Floating badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="absolute -bottom-6 -right-6 bg-brass text-accent-foreground px-6 py-4 rounded-xl shadow-brass"
                            >
                                <p className="font-display text-2xl font-semibold">₹8,500</p>
                                <p className="text-xs opacity-80">per night</p>
                            </motion.div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p className="text-brass font-medium tracking-[0.2em] uppercase text-sm mb-4">
                                Stay With Us
                            </p>
                            <h2 className="font-display text-4xl md:text-5xl text-sand-light mb-6">
                                Presidential
                                <span className="block italic text-brass">Suites</span>
                            </h2>
                            <p className="text-sand-light/80 text-lg leading-relaxed mb-8">
                                Each room is designed to give panaromic view of the Himalayan Shivalik. 
                                Our Presidential suites offers everything you and your family might need for the utmost comfort luxury and convenience.
                            </p>

                            {/* Amenities */}
                            <div className="grid grid-cols-2 gap-4 mb-10">
                                {amenities.map((amenity) => (
                                    <div key={amenity.label} className="flex items-center gap-3 text-sand-light/70">
                                        <div className="w-10 h-10 rounded-lg bg-sand-light/10 flex items-center justify-center">
                                            <amenity.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-sm">{amenity.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Features List */}
                            <ul className="space-y-3 mb-10 text-sand-light/70">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-brass rounded-full" />
                                    Sink into the comfort with our King-size bed
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-brass rounded-full" />
                                    En-suite bathroom with bathtub and rain shower
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-brass rounded-full" />
                                    Private veranda overlooking the himalayas and pool
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-brass rounded-full" />
                                    4 seater living space, work desk and dressing room
                                </li>
                            </ul>

                            <Button variant="hero" size="xl">
                                Check Availability
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
