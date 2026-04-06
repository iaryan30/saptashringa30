import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/website_banner.jpg";

export const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt="Luxury forest cottage at Valmiki Tiger Reserve"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 hero-gradient" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-brass font-medium tracking-[0.3em] uppercase text-sm mb-6"
                    >
                        Eco-Luxury Retreat
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="font-display text-5xl md:text-7xl lg:text-8xl text-sand-light font-medium leading-tight mb-6"
                    >
                        Where Wilderness
                        <span className="block italic text-brass">Meets Luxury</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="text-sand-light/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
                    >
                        Experience the untouched beauty of Valmiki Tiger Reserve.
                        Wake to birdsong, dine under stars, and discover the wild heart of Bihar.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                            <a href="https://www.makemytrip.com/hotels/hotel-details/?checkin=date_7&checkout=date_8&city=abc&country=in&currency=INR&filterData=FREE_BREAKFAST_AVAIL%7CBREAKFAST_AVAIL&hotelId=202603242221084502&locusId=abc&locusType=city&roomStayQualifier=2e0e&source=INGO" target="_blank" rel="noopener noreferrer">
                                <Button variant="hero" size="xl" className="flex items-center gap-2">
                                    <img
                                        src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
                                        alt="MakeMyTrip"
                                        className="h-5 w-auto object-contain"
                                        onError={(e) => { e.target.style.display = 'none' }}
                                    />
                                    Book on MakeMyTrip
                                </Button>
                            </a>
                        <a href="https://www.goibibo.com/hotels/Saptashringa-Holiday-Home-hotel-in-Bettiah-202603242221084502/?hquery=%7B%22ci%22%3A%2220260413%22%2C%22co%22%3A%2220260414%22%7D" target="_blank" rel="noopener noreferrer">
                            <Button variant="heroOutline" size="xl" className="flex items-center gap-2">
                                <img
                                    src="https://www.goibibo.com/favicon.ico"
                                    alt="Goibibo"
                                    className="h-5 w-5 object-contain"
                                    onError={(e) => { e.target.style.display = 'none' }}
                                />
                                Book on Goibibo
                            </Button>
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.a
                    href="#about"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center text-sand-light/70 hover:text-brass transition-colors"
                >
                    <span className="text-xs tracking-widest uppercase mb-2">Discover</span>
                    <ChevronDown size={24} />
                </motion.a>
            </motion.div>
        </section>
    );
};
