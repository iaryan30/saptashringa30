import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";

const contactInfo = [
    {
        icon: MapPin,
        label: "Location",
        value: "Near Valmiki Tiger Reserve, West Champaran, Bihar 845457",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 98765 43210",
    },
    {
        icon: Mail,
        label: "Email",
        value: "stay@saptashringa.com",
    },
    {
        icon: Clock,
        label: "Check-in / Check-out",
        value: "2:00 PM / 11:00 AM",
    },
];

export const ContactSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="py-24 md:py-32 bg-forest-deep relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brass/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest-moss/20 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative">
                <div ref={ref} className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Left Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-brass font-medium tracking-[0.2em] uppercase text-sm mb-4">
                                Get in Touch
                            </p>
                            <h2 className="font-display text-4xl md:text-5xl text-sand-light mb-6">
                                Begin Your
                                <span className="block italic text-brass">Wilderness Journey</span>
                            </h2>
                            <p className="text-sand-light/80 text-lg leading-relaxed mb-10">
                                Whether you're planning a romantic getaway, family adventure, or solo retreat,
                                we're here to craft your perfect experience. Reach out, and let's start planning.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-6">
                                {contactInfo.map((info) => (
                                    <div key={info.label} className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-brass/20 flex items-center justify-center flex-shrink-0">
                                            <info.icon className="w-5 h-5 text-brass" />
                                        </div>
                                        <div>
                                            <p className="text-sand-light/60 text-sm mb-1">{info.label}</p>
                                            <p className="text-sand-light">{info.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Column - Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-sand-light/5 backdrop-blur-sm rounded-2xl p-8 border border-sand-light/10"
                        >
                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sand-light/70 text-sm mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-sand-light/10 border border-sand-light/20 rounded-lg px-4 py-3 text-sand-light placeholder:text-sand-light/40 focus:outline-none focus:border-brass transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sand-light/70 text-sm mb-2">Email</label>
                                        <input
                                            type="email"
                                            className="w-full bg-sand-light/10 border border-sand-light/20 rounded-lg px-4 py-3 text-sand-light placeholder:text-sand-light/40 focus:outline-none focus:border-brass transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sand-light/70 text-sm mb-2">Check-in Date</label>
                                        <input
                                            type="date"
                                            className="w-full bg-sand-light/10 border border-sand-light/20 rounded-lg px-4 py-3 text-sand-light focus:outline-none focus:border-brass transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sand-light/70 text-sm mb-2">Guests</label>
                                        <select className="w-full bg-sand-light/10 border border-sand-light/20 rounded-lg px-4 py-3 text-sand-light focus:outline-none focus:border-brass transition-colors">
                                            <option value="1">1 Guest</option>
                                            <option value="2">2 Guests</option>
                                            <option value="3">3 Guests</option>
                                            <option value="4">4 Guests</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sand-light/70 text-sm mb-2">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-sand-light/10 border border-sand-light/20 rounded-lg px-4 py-3 text-sand-light placeholder:text-sand-light/40 focus:outline-none focus:border-brass transition-colors resize-none"
                                        placeholder="Tell us about your trip plans..."
                                    />
                                </div>

                                <Button variant="hero" size="xl" className="w-full">
                                    Send Inquiry
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
