'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentService, setCurrentService] = useState(0);
  
  const services = [
    'CCTV Surveillance',
    'Automatic Gate Systems',
    'Reliable Network Setup',
    'High-Speed Fiber Installation'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  },);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-yellow-400 rounded-full opacity-10 blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl top-1/2 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-64 h-64 bg-yellow-300 rounded-full opacity-5 blur-2xl bottom-20 left-1/3 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-800 bg-opacity-50 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400 border-opacity-30">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              <span className="text-yellow-400 text-sm font-medium">Trusted Security Solutions</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Your Safety
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  and Connectivity
                </span>
                <br />
                <span className="text-yellow-400">Our Priority</span>
              </h1>
              
              {/* Rotating Service Text */}
              <div className="h-12 overflow-hidden">
                <div 
                  className="transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateY(-${currentService * 3}rem)` }}
                >
                  {services.map((service, index) => (
                    <p key={index} className="text-2xl text-blue-200 font-medium h-12 flex items-center">
                      → {service}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-blue-100 max-w-xl leading-relaxed">
              Professional security and network solutions for homes and businesses in Arusha. 
              We deliver cutting-edge technology with reliable service and expert installation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/pages/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold rounded-xl shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Get Started</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              
              <Link
                href="/pages/aboutus"
                className="px-8 py-4 bg-blue-800 bg-opacity-50 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-blue-600 hover:border-yellow-400 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-blue-700">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-400 bg-opacity-20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-blue-300 text-xs">Call Us</p>
                  <p className="text-white font-semibold">+255 758 100 137</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-400 bg-opacity-20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-blue-300 text-xs">Email Us</p>
                  <p className="text-white font-semibold text-sm">arushanetworks@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 space-y-6">
              {/* Feature Card 1 */}
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 bg-opacity-80 backdrop-blur-lg rounded-2xl p-6 border border-blue-700 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:border-yellow-400">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">24/7 Monitoring</h3>
                    <p className="text-blue-200">Round-the-clock surveillance systems to keep your property secure at all times.</p>
                  </div>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 bg-opacity-80 backdrop-blur-lg rounded-2xl p-6 border border-blue-700 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:border-yellow-400 ml-12">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Expert Installation</h3>
                    <p className="text-blue-200">Professional setup and configuration by certified technicians with years of experience.</p>
                  </div>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 bg-opacity-80 backdrop-blur-lg rounded-2xl p-6 border border-blue-700 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:border-yellow-400">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Reliable Support</h3>
                    <p className="text-blue-200">Dedicated customer service and maintenance to ensure your systems run smoothly.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
          </div>

        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" fillOpacity="0.05"/>
        </svg>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}