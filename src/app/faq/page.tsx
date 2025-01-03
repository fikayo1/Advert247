"use client"

import React from 'react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';


import { motion } from 'framer-motion';

const FAQ = () => {

    const [openQuestion, setOpenQuestion] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is the benefit of having a tablet?",
            answer: "Drivers earn advertising revenue from advertisers, they are able to keep their riders more engaged as they are able to control music, and allow riders to seamlessly tip through the tablet."
        },
        {
            question: "When do I receive my earnings?",
            answer: "Advertising earnings are available weekly and are automatically added to your earnings reports. Tips are available within 24 hours of riders initiating the tip via the tablet."
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-16 py-16 ">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-16"

            >
                <h2 className="text-4xl font-bold mb-6">FAQ</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="">
                            <button
                                className="w-full p-4 flex justify-between items-center text-left"
                                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                            >
                                <span className="font-semibold">{faq.question}</span>
                                <motion.div
                                    animate={{ rotate: openQuestion === index ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ChevronDown />
                                </motion.div>
                            </button>
                            <motion.div
                                initial={false}
                                animate={{
                                    height: openQuestion === index ? "auto" : 0,
                                    opacity: openQuestion === index ? 1 : 0
                                }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                            >
                                <p className="p-4 pt-0">{faq.answer}</p>
                            </motion.div>
                            <hr className="border-gray-300 my-4" />
                        </div>
                    ))}
                </div>

                <div className="mt-20 flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                    <div className="w-full sm:w-[calc(50%-1rem)] bg-white py-4 px-2">
                        <h3 className="text-2xl font-semibold mb-2 text-[#0022ee]">Enhanced Rider Engagement</h3>
                        <p className="text-lg mt-4">
                            Riders love the fact they can play free games and win prizes during their trip. They also learn more about their drivers, which sparks friendlier conversations. The results show in higher tips and better ratings.
                        </p>
                    </div>

                    <div className="w-full sm:w-[calc(50%-1rem)] bg-white py-4 px-2">
                        <h3 className="text-2xl font-semibold mb-2 text-[#0022ee]">Seamless Experience</h3>
                        <p className="text-lg mt-4">
                            Busy riders can easily put the tablet to sleep so as not to interrupt with work calls, cat naps, etc.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>

    );
};

export default FAQ