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
        name: "Travel Atithi",
        location: "Patna",
        text: "We had a wonderful and memorable stay at Saptashringa Holiday Home. We truly enjoyed every moment there. The staff is extremely friendly, polite, and well-behaved, making us feel comfortable throughout our stay. The rooms are luxurious, well-maintained, and offer a beautiful experience. The swimming pool is quite spacious and definitely one of the key highlights of the property. One of the most amazing features is the breathtaking view — you can clearly see all seven Shivalik mountain peaks right from your room, which makes the stay even more special. A special mention to Chef Ramkrishna, who is an amazing person and served delicious food with great care. Manager Mukesh ji is truly a gem of this hotel, always helpful and attentive. Lastly, heartfelt thanks to the owners, Mr. and Mrs. Singh, who are wonderful, humble, and down-to-earth people. Overall, it was a fantastic experience, and we would highly recommend this place to everyone looking for a peaceful and luxurious stay.",
        rating: 5,
    },
    {
        name: "K.K. Sahu",
        location: "Muzaffarpur",
        text: "Excited to review this place. An amazing experience — I never thought this would be available before I came. Italian architecture, a wide garden inside the campus, barbecue facilities, and the personal care give a lovely, cozy, homely, international feeling. The food and the chef are extraordinarily good. The quiet presence of the lady owner managing everything in the background makes this place even more homely — an added attraction. I love this resort very much.",
        rating: 5,
    },
    {
        name: "Avinash Vishwakarma",
        location: "Patna",
        text: "Panaromic scene of shivaliks, good food, well behaved staffs, homely environment",
        rating: 5,
    },
];

export const TestimonialsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [current, setCurrent] = useState(0);

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

                    {/* Gallery */}
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
                            <img
                                src={galleryImages[current].src}
                                alt={galleryImages[current].caption}
                                className="w-full h-[500px] object-cover"
                            />

                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-6 py-4">
                                <p className="text-white font-display text-lg italic">
                                    {galleryImages[current].caption}
                                </p>
                            </div>

                            <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2">
                                <ChevronLeft />
                            </button>

                            <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2">
                                <ChevronRight />
                            </button>
                        </div>
                    </motion.div>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="text-center mb-16"
                    >
                        <p className="text-brass uppercase text-sm mb-4">
                            Guest Stories
                        </p>

                        <h2 className="font-display text-4xl text-forest-deep mb-4">
                            Voices from the <span className="italic text-forest-moss">Wilderness</span>
                        </h2>

                        <div className="flex justify-center gap-2 text-sm text-muted">
                            <span className="text-lg">⭐ 4.8</span>
                            <span>• Rated Excellent on Google</span>
                        </div>
                    </motion.div>

                    {/* Testimonials */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <div key={i} className="bg-card p-8 rounded-2xl shadow-soft">
                                <Quote className="w-8 h-8 text-brass/20 mb-4" />
                                <p className="text-muted italic mb-4">"{t.text}"</p>
                                <p className="font-medium text-forest-deep">{t.name}</p>
                                <p className="text-sm text-muted">{t.location}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-12 flex flex-col items-center gap-4">

                        <a
                            href="https://g.page/r/Ccm-ZAr4Y28gEBM/review"
                            target="_blank"
                            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg text-sm font-medium shadow"
                        >
                            ⭐ Read Reviews on Google
                        </a>

                        <a
                            href="https://wa.me/919122261611?text=Hi%2C%20I%20saw%20your%20reviews%20and%20want%20to%20check%20availability"
                            target="_blank"
                            className="text-brass text-sm hover:underline"
                        >
                            Book via WhatsApp →
                        </a>

                    </div>

                </div>
            </div>
        </section>
    );
};
