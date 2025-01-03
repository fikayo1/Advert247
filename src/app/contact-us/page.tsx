"use client"

import React from 'react';
import { Phone, Mail, LogIn, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[450px]">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('/images/ads-tab.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                        Have questions or need assistance? We are here to help. Reach out to our dedicated support team.
                    </p>
                </div>
            </div>

            {/* Contact Cards Section */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Driver Card */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
                        <h2 className="text-[#0022ee] font-bold text-2xl text-center p-6">For Drivers</h2>
                        <div className="px-8 pt-2 pb-4">
                            <p className="text-gray-600 mb-8 text-center leading-relaxed">
                                If you are a current driver or are interested in becoming one, please contact our driver team below.
                            </p>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-center gap-4">
                                    <Phone className="text-[#0022ee] w-5 h-5" />
                                    <div className="text-left">
                                        <p className="text-sm text-gray-500">Drivers Support:</p>
                                        <a href="tel:+2348000000000" className="text-[#0022ee] font-medium hover:underline">
                                            +234 916 834 0000
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Mail className="text-[#0022ee] w-5 h-5" />
                                    <div className="text-left">
                                        <p className="text-sm text-gray-500">Email:</p>
                                        <a href="mailto:info@adverts247.com" className="text-[#0022ee] font-medium hover:underline">
                                            info@adverts247.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <Link href="/drivers">
                                    <button className="bg-[#0022ee] text-white px-6 py-3 rounded-lg hover:bg-[#172157] transition-colors flex items-center gap-2 mx-auto">
                                        <LogIn className="w-5 h-5" />
                                        Driver Login
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Advertisers Card */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
                        <h2 className="text-[#0022ee] font-bold text-2xl text-center p-6">For Advertisers</h2>
                        <div className="px-8 py-2">
                            <p className="text-gray-600 mb-8 text-center leading-relaxed">
                                If you are interested in rideshare advertising opportunities, please contact our ad team below.
                            </p>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-center gap-4">
                                    <Phone className="text-[#0022ee] w-5 h-5" />
                                    <div className="text-left">
                                        <p className="text-sm text-gray-500">Business Support:</p>
                                        <a href="tel:+2348000000000" className="text-[#0022ee] font-medium hover:underline">
                                            +234 916 834 0000
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Mail className="text-[#0022ee] w-5 h-5" />
                                    <div className="text-left">
                                        <p className="text-sm text-gray-500">Email:</p>
                                        <a href="mailto:sales@adverts247.com" className="text-[#0022ee] font-medium hover:underline">
                                            sales@adverts247.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                            <a href="mailto:sales@adverts247.com">
                                <button className="bg-[#0022ee] text-white px-6 py-3 rounded-lg hover:bg-[#172157] transition-colors flex items-center gap-2 mx-auto">
                                    <MessageSquare className="w-5 h-5" />
                                    Contact Ad Team
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;