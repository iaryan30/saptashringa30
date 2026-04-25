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
                                An eco-luxury retreat at the doorstep of one of Bihar's last
                                remaining tiger habitats. Experience the wild, responsibly.
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.instagram.com/saptashringa_valmikitigerresrv/"
                                    target="_blank"
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
                                    href="https://mail.google.com/mail/?view=cm&to=saptashringa@gmail.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-sand-light/10 flex items-center justify-center text-sand-light/70 hover:bg-brass hover:text-accent-foreground transition-all"
                                >
                                    <Mail size={18} />
                                </a>
                                <a
                                   href="https://maps.app.goo.gl/EwscaVcJ4pguiCcSA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-sand-light/10 flex items-center justify-center text-sand-light/70 hover:bg-brass hover:text-accent-foreground transition-all"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 92.3 132.3" fill="currentColor">
                                        <path fill="#1a73e8" d="M60.2 2.2C55.8.8 51 0 46.1 0 32 0 19.3 6.4 10.6 16.5l21.8 18.3L60.2 2.2z"/>
                                        <path fill="#ea4335" d="M10.6 16.5C4 24.1 0 34.1 0 46.1c0 8.7 1.6 15.7 4.6 22l27.8-33.3-21.8-18.3z"/>
                                        <path fill="#fbbc04" d="M46.2 28.5c9.8 0 17.6 7.8 17.6 17.6 0 4.3-1.6 8.3-4.2 11.4l.1-.1 27.5-32.9c-4.5-9.3-12.1-16.7-21-21.3L32.4 34.8c3.5-3.9 8.5-6.3 13.8-6.3z"/>
                                        <path fill="#34a853" d="M46.2 63.7c-9.8 0-17.6-7.8-17.6-17.6 0-4.1 1.4-7.8 3.8-10.8L4.6 68.1c4.8 10.2 12.8 19.5 23 28.9l28.7-34.3c-3.5 0.6-6.9-.9-10.1-1z" />
                                        <path fill="#1a73e8" d="M56.6 113.2c12.6-20.3 35.7-42.8 35.7-67.1 0-9.1-2.4-17.7-6.5-25.2L27.6 96.9c2.6 2.4 5.3 4.9 7.9 7.6 9.6 10 14.9 19.7 16.8 27.8.4 1.7 2.6 1.7 3 0 .3-1.5.8-3 1.3-19.1z"/>
                                    </svg>
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

                    {/* Contact / WhatsApp */}
                        <div>
                            <h4 className="text-sand-light font-medium mb-4">Quick Connect</h4>
                            <p className="text-sand-light/60 text-sm mb-4">
                                Book your stay or ask anything instantly.
                            </p>
                        
                            <div className="flex flex-col gap-3">
                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/919122261611?text=Hi%2C%20I%20want%20to%20book%20a%20stay%20at%20Saptashringa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-brass text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-brass-dark transition-all"
                                >
                                    Chat on WhatsApp
                                </a>
                        
                                {/* Call */}
                                <a
                                    href="tel:+919122261611"
                                    className="flex items-center justify-center gap-2 border border-sand-light/30 text-sand-light px-4 py-2 rounded-lg text-sm font-medium hover:bg-sand-light/10 transition-all"
                                >
                                    Call Us
                                </a>
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
            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/919122261611?text=Hi%2C%20I%20want%20to%20book%20a%20stay%20at%20Saptashringa"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.5 3.5A11.8 11.8 0 0012.02 0C5.4 0 .02 5.38.02 12c0 2.1.55 4.15 1.6 5.97L0 24l6.18-1.6A11.96 11.96 0 0012.02 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.2-3.52-8.5z"/>
                </svg>
            
                <span className="hidden sm:inline text-sm font-medium">
                    Chat with us
                </span>
            </a>
        </footer>
    );
};
