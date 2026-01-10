import { motion } from "framer-motion";
import { Instagram, Facebook, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-forest-deep border-t border-sand-light/10">
            <div className="container mx-auto px-6 py-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-12 mb-12">
                        {/* Brand */}
                        <div>
                            <h3 className="font-display text-2xl text-sand-light mb-4">
                                Saptashringa
                            </h3>
                            <p className="text-sand-light/60 text-sm leading-relaxed mb-6">
                                An eco-luxury retreat at the doorstep of one of India's last
                                remaining tiger habitats. Experience the wild, responsibly.
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.instagram.com/saptashringa_valmikitigerresrv/"
                                    className="w-10 h-10 rounded-full bg-sand-light/10 flex items-center justify-center text-sand-light/70 hover:bg-brass hover:text-accent-foreground transition-all"
                                >
                                    <Instagram size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-sand-light/10 flex items-center justify-center text-sand-light/70 hover:bg-brass hover:text-accent-foreground transition-all"
                                >
                                    <Facebook size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-sand-light/10 flex items-center justify-center text-sand-light/70 hover:bg-brass hover:text-accent-foreground transition-all"
                                >
                                    <Mail size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-sand-light font-medium mb-4">Quick Links</h4>
                            <ul className="space-y-3">
                                {["About Us", "Accommodations", "Experiences", "Gallery", "Contact"].map((link) => (
                                    <li key={link}>
                                        <a
                                            href={`#${link.toLowerCase().replace(" ", "")}`}
                                            className="text-sand-light/60 text-sm hover:text-brass transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="text-sand-light font-medium mb-4">Stay Connected</h4>
                            <p className="text-sand-light/60 text-sm mb-4">
                                Subscribe for seasonal updates and exclusive offers.
                            </p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 bg-sand-light/10 border border-sand-light/20 rounded-lg px-4 py-2 text-sm text-sand-light placeholder:text-sand-light/40 focus:outline-none focus:border-brass transition-colors"
                                />
                                <button className="bg-brass text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-brass-dark transition-colors">
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="border-t border-sand-light/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sand-light/50 text-sm">
                            © 2025 Saptashringa. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sand-light/50 text-sm">
                            <a href="#" className="hover:text-brass transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-brass transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-brass transition-colors">Cancellation Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
