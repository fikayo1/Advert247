"use client"

import Image from 'next/image';

const DownloadPage = () => {
 return (
   <div className="min-h-screen bg-gray-50 py-12">
     <div className="max-w-4xl mx-auto px-4">
       <div className="bg-white rounded-lg shadow-md p-8">
         
         <div className="grid md:grid-cols-2 gap-8">
           {/* Left Column */}
           <div className="space-y-6">
             <h1 className="text-3xl font-bold">Download the Drivers App</h1>
             
             <div>
               <a 
                 href="[YOUR_PLAY_STORE_LINK]" 
                 target="_blank"
                 className="inline-block"
               >
                 <Image
                   src="/images/google-play-badge.png"
                   alt="Get it on Google Play"
                   width={200}
                   height={60}
                 />
               </a>
             </div>

             <div className="space-y-3">
               <h2 className="text-xl font-semibold">Support Contact</h2>
               <div>
                 <p className="font-medium">Customer Care:</p>
                 <a href="tel:+2348000000000" className="text-blue-600">+234 800 000 0000</a>
               </div>
               <div>
                 <p className="font-medium">Technical Support:</p>
                 <a href="tel:+2348000000000" className="text-blue-600">+234 800 000 0000</a>
               </div>
               <div>
                 <p className="font-medium">Email:</p>
                 <a href="mailto:support@example.com" className="text-blue-600">support@example.com</a>
               </div>
             </div>
           </div>

           {/* Right Column */}
           <div className="flex items-center justify-center">
             <div className="p-4 bg-white rounded-lg shadow">
               <Image
                 src="/images/qrcode.png"
                 alt="Download App QR Code"
                 width={200}
                 height={200}
               />
               <p className="text-center mt-2 text-sm text-gray-600">Scan to download</p>
             </div>
           </div>
         </div>
         
       </div>
     </div>
   </div>
 );
};

export default DownloadPage;