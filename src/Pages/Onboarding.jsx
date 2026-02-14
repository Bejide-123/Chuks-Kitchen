import React from 'react';
import { Flame, Utensils, Truck, ArrowUp } from 'lucide-react';
import Onboarding from '../assets/Onboarding.jpeg';
import Footer from '../Components/Footer';

export default function ChiakaKitchen() {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        {/* Mobile View */}
        <div className="md:hidden bg-white">
          {/* Content */}
          <div className="p-6">
            {/* Hero Image */}
            <div className="relative mb-6">
              <img 
                src={Onboarding}
                alt="Nigerian food"
                className="w-full h-48 object-cover rounded"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <h1 className="font-serif text-2xl text-orange-400" style={{ fontFamily: 'Georgia, serif' }}>
                Chuk's Kitchen
              </h1>
              <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded text-sm font-medium hover:bg-blue-50 transition">
                Sign In
              </button>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Your Authentic Taste of Nigeria
            </h2>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Experience homemade flavors delivered fresh to your door. We bring the rich culinary heritage of Nigeria right to your doorstep.
            </p>

            {/* Features */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded flex items-center justify-center">
                  <Flame className="w-5 h-5 text-orange-500" />
                </div>
                <span className="text-gray-700 font-medium">Freshly Prepared</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded flex items-center justify-center">
                  <Utensils className="w-5 h-5 text-orange-500" />
                </div>
                <span className="text-gray-700 font-medium">Support Local Business</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded flex items-center justify-center">
                  <Truck className="w-5 h-5 text-orange-500" />
                </div>
                <span className="text-gray-700 font-medium">Fast & Reliable Delivery</span>
              </div>
            </div>

            {/* Buttons */}
            <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium mb-3 hover:bg-orange-600 transition">
              Start Your Order
            </button>
            <button className="w-full border-2 border-blue-500 text-blue-500 py-3 rounded-lg font-medium hover:bg-blue-50 transition">
              Learn More About Us
            </button>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          {/* Hero Content */}
          <div className="flex">
            {/* Left Side - Image */}
            <div className="w-1/2 relative">
              <img 
                src={Onboarding}
                alt="Nigerian food spread"
                className="w-full h-full object-cover"
                style={{ minHeight: '600px' }}
              />
            </div>

            {/* Right Side - Content */}
            <div className="w-1/2 bg-white flex flex-col">
              <div className="flex items-center justify-between px-16 py-6 w-full">
                <h1 className="font-serif text-3xl text-orange-400" style={{ fontFamily: 'Georgia, serif' }}>
                  Chuk's Kitchen
                </h1>
                <button className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-2xl font-medium hover:bg-blue-50 transition">
                  Sign In
                </button>
              </div>
              <div className="flex-1 flex items-center px-16">
                <div className="max-w-xl">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Your Authentic Taste of Nigeria
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Experience homemade flavors delivered fresh to your door or home. We bring the rich culinary heritage of Nigeria right to your doorstep.
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded flex items-center justify-center flex-shrink-0">
                      <Flame className="w-6 h-6 text-orange-500" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">Freshly Prepared</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded flex items-center justify-center flex-shrink-0">
                      <Utensils className="w-6 h-6 text-orange-500" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">Support Local Business</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded flex items-center justify-center flex-shrink-0">
                      <Truck className="w-6 h-6 text-orange-500" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">Fast & Reliable Delivery</span>
                  </div>
                </div>

                {/* Buttons */}
                <button className="w-full bg-orange-500 text-white py-4 rounded-lg font-medium mb-4 hover:bg-orange-600 transition">
                  Start Your Order
                </button>
                <button className="w-full border-2 border-blue-500 text-blue-500 py-4 rounded-lg font-medium hover:bg-blue-50 transition">
                  Learn More About Us
                </button>

                {/* Footer Links */}
                <div className="mt-32 flex items-center justify-center gap-4 text-xs text-gray-500">
                  <span>© 2024 Chiaka Kitchen</span>
                  <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>
                  <a href="#" className="text-blue-500 hover:underline">Terms of Service</a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section - Desktop Only */}
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}