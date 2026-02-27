import React, { useState } from 'react';
import { Minus, Plus, X } from 'lucide-react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Jollof Rice & Fried Chicken',
      description: 'With plantain, extra pepper sauce',
      price: 3200,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=200&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Jollof Rice & Fried Chicken',
      description: 'With plantain, extra pepper sauce',
      price: 3200,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1633945274409-9ddaf0f2f742?w=200&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'Jollof Rice & Fried Chicken',
      description: 'With plantain, extra pepper sauce',
      price: 3200,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1624300603167-1773d17b61c7?w=200&h=200&fit=crop'
    },
    {
      id: 4,
      name: 'Jollof Rice & Fried Chicken',
      description: 'With plantain, extra pepper sauce',
      price: 3200,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=200&h=200&fit=crop'
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />
      
      {/* Cart Content */}
      <div className="py-4 px-4 md:py-8 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Header - Hidden on mobile, shown on desktop */}
          <div className="mb-6 hidden md:block">
            <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
            <p className="text-gray-600 mt-1">{cartItems.length} items</p>
          </div>

          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm p-4 relative"
              >
                <div className="flex gap-4">
                  {/* Item Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-lg object-cover flex-shrink-0"
                  />

                  {/* Item Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 pr-8">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {item.description}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mb-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 transition"
                      >
                        <Minus className="w-4 h-4 text-gray-600" />
                      </button>
                      <span className="w-8 text-center font-semibold text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 transition"
                      >
                        <Plus className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>

                    {/* Price */}
                    <p className="text-xl font-bold text-orange-500">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>

                  {/* Remove Button - Top Right */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-orange-500 hover:bg-orange-600 transition"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            ))}

            {/* Empty Cart Message */}
            {cartItems.length === 0 && (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <p className="text-gray-500 text-lg">Your cart is empty</p>
                <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
                  Start Shopping
                </button>
              </div>
            )}
          </div>

          {/* Add More Items Link */}
          {cartItems.length > 0 && (
            <div className="mt-6 text-center">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium text-sm"
              >
                <Plus className="w-4 h-4" />
                Add more items from Chuk's Kitchen
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CartPage;