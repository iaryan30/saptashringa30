import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Accommodations", href: "#accommodations" },
    { name: "Experiences", href: "#experiences" },
    { name: "Contact", href: "#contact" },
];

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-sand-soft/95 backdrop-blur-md shadow-soft py-3"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-3">
                    <span className={`font-display text-2xl font-semibold transition-colors duration-300 ${isScrolled ? "text-forest-deep" : "text-sand-light"
                        }`}>
                        Saptashringa
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-brass ${isScrolled ? "text-forest-deep" : "text-sand-light"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant={isScrolled ? "hero" : "heroOutline"} size="lg">
                        Book Now
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-forest-deep" : "text-sand-light"
                        }`}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-sand-soft/98 backdrop-blur-lg border-t border-border"
                    >
                        <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-forest-deep font-medium py-2 hover:text-brass transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button variant="hero" size="lg" className="mt-4">
                                Book Now
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};
