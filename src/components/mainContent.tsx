import Image from "next/image";
import Link from "next/link";

import Testimonies from "@/components/testimonies";


const MainContent = () => {
    return (
        <>
            {/* Video Section */}
            <div className="flex-1 relative">
                <video
                    src="/home.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className=""
                />
            </div>
            <div className="p-10">
                <div className="text-center mx-auto max-w-3xl space-y-5 mt-10">
                    <h1 className="font-extrabold text-[#0022ee] text-4xl">
                        Nigeria&#39;s First In-Ride Advertising Network
                    </h1>
                    <p>
                        Adverts247 In-Ride Advertising equips Bolt, Uber, InDrive, and all Ride
                        Hailing Service Providers with HD screens to engage riders.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                    <div className="flex-1">
                        <h2 className="font-medium text-center text-[#0022ee] mb-5 text-xl">Live Games</h2>
                        <img
                            src="/images/tablet-1.png"
                            alt="Adverts Logo"
                            width={300}
                            height={200}
                            className="mx-auto"
                        />
                        <p className="text-center mt-8 text-xs">Realtime trivia, daily giveaway and cash prizes</p>
                    </div>
                    <div className="flex-1">
                        <h2 className="font-medium text-center text-[#0022ee] mb-5 text-xl">Ride Information</h2>
                        <img
                            src="/images/tablet-2.png"
                            alt="Adverts Logo"
                            width={300}
                            height={200}
                            className="mx-auto"
                        />
                        <p className="text-center mt-8 text-xs">Driver profiles, weather and other local info</p>
                    </div>
                    <div className="flex-1">
                        <h2 className="font-medium text-center text-[#0022ee] mb-5 text-xl">Interactive ads</h2>
                        <img
                            src="/images/tablet-3.png"
                            alt="Adverts Logo"
                            width={300}
                            height={200}
                            className="mx-auto"
                        />
                        <p className="text-center mt-8 text-xs">Premium videos for a highly engaged audience</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
                    <div className="flex-1">
                        <h2 className="font-medium text-center text-[#0022ee] mb-5 text-xl">In-Ride Advertising with Adverts247</h2>
                        <img
                            src="/images/driver.png"
                            alt="Adverts Logo"
                            width={300}
                            height={200}
                            className="mx-auto"
                        />
                        <p className="text-center mt-8 text-xs max-w-[300px] mx-auto">Upgrade your in-ride experience with Adverts247 to earn direct cash payout, higher tip and better rating.</p>
                    </div>
                    <div className="flex-1">
                        <h2 className="font-medium text-center text-[#0022ee] mb-5 text-xl">Digital & Physical Campaign Offerings</h2>
                        <img
                            src="/images/tablet-4.png"
                            alt="Adverts Logo"
                            width={300}
                            height={200}
                            className="mx-auto"
                        />
                        <p className="text-center mt-8 text-xs max-w-[300px] mx-auto">Disruptive integrated offers on UGC and giveaway campaigns</p>
                    </div>
                </div>

                <div className="flex justify-between w-full mt-8">
                    <div className="flex-1 flex justify-center">
                        <Link
                            href="/signup"
                            className="inline-flex items-center"
                            aria-label="Sign up for Adverts247"
                        >
                            <Image
                                src="/buttons/signup.png"
                                alt=""
                                width={140}
                                height={40}
                                className="cursor-pointer transition-opacity hover:opacity-90"
                                priority={false}
                            />
                        </Link>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <Link
                            href="/drivers"
                            className="inline-flex items-center"
                            aria-label="Learn more about Adverts247"
                        >
                            <Image
                                src="/buttons/learn-more.png"
                                alt=""
                                width={140}
                                height={40}
                                className="cursor-pointer transition-opacity hover:opacity-90"
                            />
                        </Link>
                    </div>
                </div>

                <div className="mt-20 flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                    <div className="w-full sm:w-[calc(50%-1rem)] bg-white py-4 px-2">
                        <h3 className="text-2xl font-semibold mb-2 text-[#0022ee]">Guaranteed impressions</h3>
                        <p className="text-lg mt-4">
                            ADVERTS247 only counts impressions when the entire video was shown to a real passenger on an active trip.
                        </p>
                    </div>

                    <div className="w-full sm:w-[calc(50%-1rem)] bg-white py-4 px-2">
                        <h3 className="text-2xl font-semibold mb-2 text-[#0022ee]">Full Analytics</h3>
                        <p className="text-lg mt-4">
                            Receive full analytics for your campaign including impressions and others based on your objectives.
                        </p>
                    </div>

                    <div className="w-full sm:w-[calc(50%-1rem)] bg-white py-4 px-2">
                        <h3 className="text-2xl font-semibold mb-2 text-[#0022ee]">Robust Targeting</h3>
                        <p className="text-lg mt-4">
                            ADVERTS247 targeting is the basis for our AI targeting engine shows your ad to the best possible audience.
                        </p>
                    </div>

                    <div className="w-full sm:w-[calc(50%-1rem)] bg-white py-4 px-2">
                        <h3 className="text-2xl font-semibold mb-2 text-[#0022ee]">QR Code Ready</h3>
                        <p className="text-lg mt-4">
                            Want to further engage with passengers? You can build in call-to-action points on our platform, including QR Codes,
                            to build deeper engagement with your content.
                        </p>
                    </div>
                </div>

                <div className="mt-20 relative">
    <h2 className="font-extrabold text-center text-[#0022ee] text-3xl mb-10">
        Value Proposition For Brands
    </h2>

    <div className="flex flex-wrap justify-center gap-4">
        {/* Image 1 */}
        <Image
            src="/images/3000-drivers.png"
            alt=""
            width={270}
            height={40}
            className="flex-shrink-0"
        />
        {/* Image 2 */}
        <Image
            src="/images/deep-understanding.png"
            alt=""
            width={270}
            height={40}
            className="flex-shrink-0"
        />
        {/* Image 3 */}
        <Image
            src="/images/completed.png"
            alt=""
            width={270}
            height={40}
            className="flex-shrink-0"
        />
        {/* Image 4 */}
        <Image
            src="/images/876M.png"
            alt=""
            width={270}
            height={40}
            className="flex-shrink-0"
        />
    </div>
</div>





                <Testimonies />

            </div>
        </>
    );
};

export default MainContent;
