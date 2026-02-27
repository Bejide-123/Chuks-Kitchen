import React, { useState } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const OrderSummary = () => {
  const [promoCode, setPromoCode] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');
  const [specialInstructions, setSpecialInstructions] = useState('');

  const subtotal = 9200;
  const deliveryFee = 500;
  const serviceFee = 200;
  const tax = 0;
  const total = subtotal + deliveryFee + serviceFee + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Order Summary Content */}
      <div className="py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            {/* Header */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
              Order Summary
            </h1>

            {/* Promo Code Section */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                Add a Promo Code
              </h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter Code here"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button className="px-8 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition whitespace-nowrap">
                  Login
                </button>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-gray-700">
                <span>Subtotal</span>
                <span>₦{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-gray-700">
                <span>Delivery Fee</span>
                <span>₦{deliveryFee.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-gray-700">
                <span>Service Fee</span>
                <span>₦{serviceFee.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-gray-700">
                <span>Tax</span>
                <span>₦{tax}</span>
              </div>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between py-4 border-t border-gray-200 mb-6">
              <span className="text-xl font-bold text-gray-900">Total</span>
              <span className="text-2xl font-bold text-gray-900">
                ₦{total.toLocaleString()}
              </span>
            </div>

            {/* Delivery Method Toggle */}
            <div className="grid grid-cols-2 gap-0 mb-6 overflow-hidden rounded-lg">
              <button
                onClick={() => setDeliveryMethod('delivery')}
                className={`py-3 font-medium transition ${
                  deliveryMethod === 'delivery'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                }`}
              >
                Delivery
              </button>
              <button
                onClick={() => setDeliveryMethod('pickup')}
                className={`py-3 font-medium transition ${
                  deliveryMethod === 'pickup'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                }`}
              >
                Pick up
              </button>
            </div>

            {/* Special Instructions */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                Special Instructions for Restaurant
              </h3>
              <textarea
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhh food is tasty"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none text-sm"
              />
            </div>

            {/* Proceed to Checkout Button */}
            <button className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OrderSummary;