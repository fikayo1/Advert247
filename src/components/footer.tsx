import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
    const footerLinks = {
        ourCompany: {
          title: "Our company",
          links: [
            { label: "About us", href: "/about" },
            { label: "New drivers", href: "/signup" },
            { label: "Current drivers", href: "/drivers" },
            { label: "Contact us", href: "/contact-us" },
          ]
        },
       
        legal: {
          title: "Legal",
          links: [
            { label: "Privacy Policy", href: "/policy" },
          ]
        },
        partner: {
          title: "Partners",
          links: [
            { label: "Airtel", href: "#" },
            { label: "Pepsi", href: "#" },
            { label: "Coca-cola", href: "#" },
            { label: "Nivea", href: "#" },
          ]
        }
    };

    const socialLinks = [
        { icon: Instagram, href: "https://www.instagram.com/adverts247/profilecard/?igsh=MXgxaGFyd2JnNnhzZw==", label: "Instagram" },
        { icon: Facebook, href: "https://www.facebook.com/share/1DG9KJxoye/?mibextid=wwXIfr", label: "Facebook" },
        { icon: Twitter, href: "https://x.com/adverts_247?s=21&t=P0LrMJ7tC0BWLBYj6Um1pg", label: "X (Twitter)" }
    ];
    
    return (
        <footer className="bg-[#0C121C] text-white text-xs py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Language Selector */}
                <div className="md:col-span-1">
                    <select className="bg-transparent border border-white/20 rounded-full px-4 py-2">
                        <option value="en">English</option>
                        {/* Add other languages */}
                    </select>
                </div>

                {/* Footer Links */}
                {Object.values(footerLinks).map((section) => (
                    <div key={section.title} className="space-y-4">
                        <h3 className="font-medium text-white">{section.title}</h3>
                        <ul className="space-y-2">
                            {section.links.map((link) => (
                                <li key={link.label}>
                                    <Link 
                                        href={link.href}
                                        className="text-gray-400 hover:text-white text-xs transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-400">
                    Copyright © Adverts247. All Rights Reserved.
                </p>

                {/* Social Media Icons */}
                <div className="flex items-center gap-6">
                    {socialLinks.map((social) => (
                        <Link
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label={social.label}
                        >
                            <social.icon size={20} />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;