"use client";

import React, { useState } from "react";
import { Tablet, Battery, Wifi, DollarSign } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useRouter } from "next/navigation";

const SignupPage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        password_confirmation: "",
        firstname: "",
        lastname: "",
        date_of_birth: "",
        gender: "",
        address: "",
        phone: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const benefits = [
        {
            icon: <Tablet className="w-8 h-8 text-white" />,
            title: "Free Entertainment Tablet",
            description: "Premium tablets with curated entertainment for your riders"
        },
        {
            icon: <Battery className="w-8 h-8 text-white" />,
            title: "Mounting & Charging",
            description: "Complete setup with charging equipment included with free replacement"
        },
        {
            icon: <Wifi className="w-8 h-8 text-white" />,
            title: "Free LTE Data",
            description: "Stay connected with complimentary data service"
        },
        {
            icon: <DollarSign className="w-8 h-8 text-white" />,
            title: "Additional Income",
            description: "Earn extra through our advertising platform"
        }
    ];
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        setSuccess(false);

        try {
            // Convert gender to integer before sending
            const apiFormData = {
                ...formData,
                gender: formData.gender === "female" ? 0 : 1
            };

          
            
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(apiFormData)
            });

            const data = await response.json();
           

            if (!response.ok) {
                const errorMessage = data.message || data.error || 'Failed to sign up';
                throw new Error(errorMessage);
            }

            setSuccess(true);
            console.log('Signup successful:', data);
            // Add a slight delay before redirect to show the success message
            setTimeout(() => {
                router.push('/drivers');  // Redirect to drivers page
            }, 1500);
            
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to sign up');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('/images/target.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for text readability */}
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 text-center text-white">
                    <h1 className="text-5xl font-bold mb-6">Drive & Earn More</h1>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join our innovative platform and transform your vehicle into a mobile entertainment hub while earning additional income
                    </p>
                    <div className="grid md:grid-cols-4 gap-6 mt-12">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
                                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-sm text-gray-200">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Signup Form Section */}
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Create Your Account</h2>

                    {error && (
                        <Alert variant="destructive" className="mb-6">
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    
                    {success && (
                        <Alert className="mb-6">
                            <AlertDescription>Successfully signed up! Redirecting...</AlertDescription>
                        </Alert>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                <input
                                    type="text"
                                    value={formData.firstname}
                                    onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your first name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                <input
                                    type="text"
                                    value={formData.lastname}
                                    onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your last name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                                <input
                                    type="date"
                                    value={formData.date_of_birth}
                                    onChange={(e) => setFormData({ ...formData, date_of_birth: e.target.value })}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                                <select
                                    value={formData.gender}
                                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                >
                                    <option value="">Select gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                                <input
                                    type="text"
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your address"
                                    required
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                <input
                                    type="password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Create a password"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                                <input
                                    type="password"
                                    value={formData.password_confirmation}
                                    onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Confirm your password"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold transition-colors ${
                                isLoading 
                                    ? 'opacity-75 cursor-not-allowed' 
                                    : 'hover:bg-blue-700'
                            }`}
                        >
                            {isLoading ? 'Signing up...' : 'Join Now & Start Earning'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;