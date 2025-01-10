"use client"

import React from 'react';
import Link from 'next/link';

const Fleets = () => {
    return (
        <div className="max-w-7xl mx-auto p-16">
            {/* Header Section */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-6">Partner With Adverts247</h1>
                <p className="text-lg text-gray-700 max-w-3xl">
                    Transform your fleet vehicles into revenue-generating advertising platforms. Join Adverts247 to create 
                    an additional income stream for your fleet management company while providing extra earnings for your drivers.
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {/* Revenue Generation */}
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold mb-4">Additional Revenue Stream</h2>
                    <p className="text-gray-700">
                        Generate passive income through in-car advertising. Our revenue-sharing model ensures both your 
                        company and drivers benefit from every ad displayed in your vehicles.
                    </p>
                </div>

                {/* Easy Integration */}
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold mb-4">Seamless Integration</h2>
                    <p className="text-gray-700">
                        We provide and install all necessary equipment in your vehicles at no cost. Our tablets come with 
                        built-in entertainment features that enhance the rider experience.
                    </p>
                </div>

                {/* Driver Benefits */}
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold mb-4">Driver Incentives</h2>
                    <p className="text-gray-700">
                        Keep your drivers motivated with additional earnings from ad revenue. Our platform includes 
                        integrated tipping features and transparent revenue sharing calculations.
                    </p>
                </div>

                {/* Partnership Support */}
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold mb-4">Dedicated Support</h2>
                    <p className="text-gray-700">
                        Receive ongoing technical support and regular performance reports. Our team ensures your fleets 
                        advertising system runs smoothly while maximizing revenue potential.
                    </p>
                </div>
            </div>

            {/* Partnership Benefits Section */}
            <div className="mt-16 bg-gray-50 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Why Partner With Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-3">Zero Installation Cost</h3>
                        <p className="text-gray-700">Free equipment and installation for all your fleet vehicles</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-3">Revenue Sharing</h3>
                        <p className="text-gray-700">Competitive revenue split between your company and drivers</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-3">Enhanced Rider Experience</h3>
                        <p className="text-gray-700">Entertainment features that improve passenger satisfaction</p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold mb-6">Ready to Boost Your Fleets Revenue?</h2>
                <Link
                    href="https://fleet.adverts247.com/"
                    className="bg-[#0022ee] text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold inline-block"
                >
                    Partner With Us
                </Link>
            </div>
        </div>
    );
};

export default Fleets;