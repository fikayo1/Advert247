"use client"

import React from 'react';
import Link from 'next/link';

const Fleets = () => {
    return (
        <div className="max-w-7xl mx-auto p-16">
            {/* Header Section */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-6">Ads in-car</h1>
                <p className="text-lg text-gray-700 max-w-3xl">
                    In-car tablets provide a unique opportunity to engage with your audience during a ride.
                    Highly relevant content, including a dynamic route map, music, and integrated driver
                    tipping, drives high engagement.
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {/* Target Custom Segments */}
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">

                    <h2 className="text-2xl font-bold mb-4">Target custom segments</h2>
                    <p className="text-gray-700">
                        Historical ride behavior and vehicle destination type data enable you to zero
                        in on your ideal audience.
                    </p>
                </div>

                {/* Leverage Video Power */}
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">

                    <h2 className="text-2xl font-bold mb-4">Leverage the power of video</h2>
                    <p className="text-gray-700">
                        Full-screen video with audio capability plays automatically once the trip is
                        underway, so it gets riders' full attention.
                    </p>
                </div>

                {/* Clear Path to Conversion */}
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">

                    <h2 className="text-2xl font-bold mb-4">Create a clear path to conversion</h2>
                    <p className="text-gray-700">
                        Push notifications make it easy for riders to redeem special offers on the spot.
                    </p>
                </div>

                {/* Measure Impact */}
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 ">

                    <h2 className="text-2xl font-bold mb-4">Measure your impact</h2>
                    <p className="text-gray-700">
                        Track impressions, clicks, the number of rides, and audience targets to better
                        understand performance.
                    </p>
                </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
                <Link
                    href="https://fleet.adverts247.com/"
                    className="bg-[#0022ee] text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold inline-block"
                >
                    Start Advertising
                </Link>
            </div>
        </div>
    );
};

export default Fleets;