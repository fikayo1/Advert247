import Image from "next/image";
import Link from "next/link";


const Footer = () => {
    const footerLinks = {
        ourCompany: {
          title: "Our company",
          links: [
            { label: "About us", href: "/about" },
            { label: "New drivers", href: "/new-drivers" },
            { label: "Current drivers", href: "/current-drivers" },
            { label: "Contact us", href: "/contact" },
          ]
        },
        resources: {
          title: "Resources",
          links: [
            { label: "Current Drivers (Login)", href: "/login" },
            { label: "New Drivers(Apply)", href: "/apply" },
            { label: "Bills", href: "/bills" },
            { label: "Driver Agreement", href: "/agreement" },
          ]
        },
        legal: {
          title: "Legal",
          links: [
            { label: "Privacy Notice", href: "/privacy" },
            { label: "Privacy Center", href: "/privacy-center" },
            { label: "Consumer - Health Data Privacy Policy", href: "/health-privacy" },
            { label: "Website Terms of use", href: "/terms" },
            { label: "Terms of Service", href: "/tos" },
          ]
        },
        partner: {
          title: "Partner",
          links: [
            { label: "Airtel", href: "/partners/airtel" },
            { label: "Pepsi", href: "/partners/pepsi" },
            { label: "Coca-cola", href: "/partners/coca-cola" },
            { label: "Nivea", href: "/partners/nivea" },
          ]
        }
      };


    
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
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400">
          Copyright © Adverts247. All Rights Reserved.
        </p>

        
      </div>
        
        </footer>

    );
}

export default Footer;