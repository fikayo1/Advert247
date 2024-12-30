"use client";

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonies = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const testimonials = [
        { name: "Sarah", role: "Driver", image: "/images/sarah.png", text: "I love that I didn't have to talk to get my passenger engaged on this long trip", duration: "56 Minutes 31 Secs" },
        { name: "Moses", role: "Driver", image: "/images/moses.png", text: "These in-ride ad screens are helping with strong ratings and improving my earnings.", duration: "16 Minutes 20 Secs"  },
        { name: "Paul", role: "Driver", image: "/images/paul.png", text: "I keep having recurring trip requests from previous riders due to the in-ride ad screens", duration: "16 Minutes 21 Secs"  },
        { name: "Yetunde", role: "Rider", image: "/images/yetunde.png", text: "I found my trip super exciting, felt like a magic school car.", duration: "46 Minutes 20 Secs"  },
        { name: "Farida", role: "Rider", image: "/images/farida.png", text: "Na driver wey get in-ride screen go get 5 Star review", duration: "26 Minutes 34 Secs"  },
        { name: "Peace", role: "Rider", image: "/images/peace.png", text: "I am definitely requesting this trip again", duration: "32 Minutes 21 Secs"  }
    ];

    const scrollLeft = () => {
        const scroll = scrollRef.current;
        if (scroll) {
            scroll.scrollLeft -= 300;
        }
    };

    const scrollRight = () => {
        const scroll = scrollRef.current;
        if (scroll) {
            scroll.scrollLeft += 300; 
        }
    };

    return (
        <div className="mt-20 relative">
            <h2 className="font-extrabold text-center text-[#0022ee] text-3xl mb-10">
                What Our Riders and Drivers Say
            </h2>
            <div className="flex items-center">
                {/* Left Arrow */}
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 z-10 text-[#0022ee] p-2 rounded-full shadow-lg hover:bg-blue-700 hover:text-white focus:outline-none"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Testimonials Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-scroll scroll-smooth pb-4 no-scrollbar"
                >
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="flex-none w-64 bg-white hover:bg-gray-50 p-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 rounded-full overflow-hidden shadow-md">
                                    <img
                                        src={item.image}
                                        alt={`${item.name}'s testimony`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                                    <span className="text-sm text-[#0022ee]">{item.role}</span>
                                    <div className="text-xs text-gray-500 mt-1">{item.duration}</div> {/* Added the duration */}
                                </div>
                            </div>
                            <p className="text-sm mt-4 text-gray-600 italic">"{item.text}"</p>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={scrollRight}
                    className="absolute right-0 z-10 text-[#0022ee] p-2 rounded-full shadow-lg hover:bg-blue-700 hover:text-white focus:outline-none"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default Testimonies;
