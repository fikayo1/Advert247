"use client"

import React from 'react';
import { useState, useEffect } from 'react';
import { Lightbulb, Eye, Settings, ChevronDown } from 'lucide-react';


import { motion } from 'framer-motion';

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();

    const updateCount = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold mb-2">
        {count}
        {end === 3000 ? 'K+' : end === 2000 ? 'K' : 'm'}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

const AboutUs = () => {

  const [openQuestion, setOpenQuestion] = useState(null);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

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
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          className="mb-16 md:mb-0"
        >
          <h2 className="text-[#0022ee] font-bold mb-4">ABOUT ADVERTS247</h2>
          <h1 className="text-4xl font-bold mb-6">
            We are building the infrastructure for the passenger economy.
          </h1>
          <p className="text-gray-600">
            Adverts247 is a mobility media company founded with the idea of building 
            passenger experiences that enhance trips and earn more money.
          </p>
        </motion.div>

        {/* Cards Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-6"
        >
          {/* Motto Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-lg shadow-lg p-6 transform transition-all hover:shadow-xl"
          >
            <div className="mb-4">
              <div className="w-12 h-12 bg-[#e2e4f4] rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-[#0022ee]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">MOTTO</h3>
            <p className="text-gray-600">Reach Your True Target.</p>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-lg shadow-lg p-6 transform transition-all hover:shadow-xl"
          >
            <div className="mb-4">
              <div className="w-12 h-12 bg-[#e2e4f4] rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-[#0022ee]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">VISION</h3>
            <p className="text-gray-600">
              Our vision is to be the most cutting-edge advertising platform in the world for
              all brands and services when it comes to matching advertising budgets with
              actual conversions, customer satisfaction, requirements, and brand
              aspirations, supplying professional services that are dependable, effective,
              high-caliber, and uphold unwavering standards and ethics.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-lg shadow-lg p-6 transform transition-all hover:shadow-xl"
          >
            <div className="mb-4">
              <div className="w-12 h-12 bg-[#e2e4f4] rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-[#0022ee]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">MISSION</h3>
            <p className="text-gray-600">
              Our mission is to improve advertising and customer connection with
              products and services using our innovative entertainment and advertising
              technologies. We take pleasure in having experts who are qualified and value
              teamwork since it helps advertising reach its intended audience as
              effectively as possible because the many different strengths of many people
              are stronger than one.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="grid md:grid-cols-3 gap-8 mt-16"
        id="faq"
      >
        <Counter end={3000} label="Active Users" />
        <Counter end={2000} label="Daily Impressions" />
        <Counter end={1} label="Million Monthly Views" />
      </motion.div>

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
      </motion.div>

    </div>
  );
};

export default AboutUs;