import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";

const contactInfo = [
    {
        icon: MapPin,
        label: "Location",
        url: "https://maps.app.goo.gl/EwscaVcJ4pguiCcSA",
        value: "Saptashringa, Piprakutti, Valmikinagar, Bagaha 2, West Champaran, Bihar-845107",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 9122261611",
    },
    {
        icon: Mail,
        label: "Email",
        value: "saptashringa@gmail.com",
    },
    {
        icon: Clock,
        label: "Check-in / Check-out",
        value: "2:00 PM / 11:00 AM",
    },
];

export const ContactSection = () => {
    const ref = useRef(null);
    const formRef = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");

        emailjs.sendForm(
            "service_uk2smgn",    // replace with your EmailJS Service ID
            "template_rmopjsq",   // replace with your EmailJS Template ID
            formRef.current,
            "WXRTNXAWvR4Q4UoJ8"     // replace with your EmailJS Public Key
        ).then(() => {
            setStatus("success");
        }).catch(() => {
            setStatus("error");
        });
    };

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
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sand-light/70 text-sm mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            name="from_name"
                                            className="w-full bg-sand-light/10 border border-sand-light/20 rounded-lg px-4 py-3 text-sand-light placeholder:text-sand-light/40 focus:outline-none focus:border-brass transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sand-light/70 text-sm mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="from_email"
                                            className="w-full bg-sand-light/10 border border-sand-light/20 rounded-lg px-4 py-3 text-sand-light placeholder:text-sand-light/40 focus:outline-none focus:border-brass transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Phone Number Field */}
                                <div>
                                    <label className="block text-sand-light/70 text-sm mb-2">Phone Number</label>
                                    <div className="flex">
                                        <select
                                            name="country_code"
                                            className="bg-sand-light/10 border border-sand-light/20 rounded-l-lg px-3 py-3 text-sand-light focus:outline-none focus:border-brass transition-colors"
                                        >
                                            <option value="+91" selected>🇮🇳 +91 India</option>
                                            <option value="+95">🇲🇲 +95 Myanmar</option>
                                            <option value="+855">🇰🇭 +855 Cambodia</option>
                                            <option value="+856">🇱🇦 +856 Laos</option>
                                            <option value="+66">🇹🇭 +66 Thailand</option>
                                            <option value="+94">🇱🇰 +94 Sri Lanka</option>
                                            <option value="+975">🇧🇹 +975 Bhutan</option>
                                            <option value="+976">🇲🇳 +976 Mongolia</option>
                                            <option value="+886">🇹🇼 +886 Taiwan</option>
                                            <option value="+81">🇯🇵 +81 Japan</option>
                                            <option value="+82">🇰🇷 +82 South Korea</option>
                                            <option value="+86">🇨🇳 +86 China</option>
                                            <option value="+84">🇻🇳 +84 Vietnam</option>
                                            <option value="+1">🇺🇸 +1 USA</option>
                                            <option value="+44">🇬🇧 +44 UK</option>
                                            <option value="+61">🇦🇺 +61 Australia</option>
                                            <option value="+33">🇫🇷 +33 France</option>
                                            <option value="+49">🇩🇪 +49 Germany</option>
                                            <option value="+971">🇦🇪 +971 UAE</option>
                                            <option value="+65">🇸🇬 +65 Singapore</option>
                                        </select>
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="w-full bg-sand-light/10 border border-sand-light/20 border-l-0 rounded-r-lg px-4 py-3 text-sand-light text-lg placeholder:text-sand-light/40 placeholder:text-lg focus:outline-none focus:border-brass transition-colors"
                                            placeholder="123 456 7890"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sand-light/70 text-sm mb-2">Check-in Date</label>
                                        <input
                                            type="date"
                                            name="checkin"
                                            className="w-full bg-sand-light/10 border border-sand-light/20 rounded-lg px-4 py-3 text-sand-light focus:outline-none focus:border-brass transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sand-light/70 text-sm mb-2">Guests</label>
                                        <select
                                            name="guests"
                                            className="w-full bg-sand-light/10 border border-sand-light/20 rounded-lg px-4 py-3 text-sand-light focus:outline-none focus:border-brass transition-colors"
                                        >
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
                                        name="message"
                                        className="w-full bg-sand-light/10 border border-sand-light/20 rounded-lg px-4 py-3 text-sand-light placeholder:text-sand-light/40 focus:outline-none focus:border-brass transition-colors resize-none"
                                        placeholder="Tell us about your trip plans..."
                                    />
                                </div>

                                {/* Status Messages */}
                                {status === "success" && (
                                    <p className="text-green-400 text-sm">✅ Inquiry sent successfully!</p>
                                )}
                                {status === "error" && (
                                    <p className="text-red-400 text-sm">❌ Something went wrong. Please try again.</p>
                                )}

                                <Button
                                    variant="hero"
                                    size="xl"
                                    className="w-full"
                                    disabled={status === "sending"}
                                >
                                    {status === "sending" ? "Sending..." : "Send Inquiry"}
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
