"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export interface CarouselItem {
    image: string;
    title: string;
    description: string;
}

interface HeroCarouselProps {
    items: CarouselItem[];
}

export default function HeroCarousel({ items }: HeroCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(timer);
    }, [items.length]);

    return (
        <div className="relative w-full h-full bg-gray-900">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={items[currentIndex].image}
                        alt={items[currentIndex].title}
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Text Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/95 via-gray-900/80 to-transparent p-6 pt-12">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-xl font-bold text-white mb-1">
                                {items[currentIndex].title}
                            </h3>
                            <p className="text-sm text-gray-300">
                                {items[currentIndex].description}
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Progress Indicators */}
            <div className="absolute bottom-3 right-4 flex space-x-2 z-10">
                {items.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'w-6 bg-purple-500'
                                : 'w-1.5 bg-gray-600'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
