import {
       Facebook, Twitter, Linkedin, Instagram,
} from 'lucide-react';

const Footer = () => {
  return (
    <div>
      <footer className="hidden md:block bg-amber-900 text-white">
              <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-3 gap-12">
                  {/* About */}
                  <div>
                    <h3 className="font-serif text-2xl text-orange-300 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                      Chuk's Kitchen
                    </h3>
                    <p className="text-amber-200 text-sm leading-relaxed">
                      Bringing the authentic flavors of Nigerian cuisine straight to your table, with passion and care.
                    </p>
                    <p className="text-amber-300 text-xs mt-6">
                      © 2025 UR Media. All rights reserved.
                    </p>
                  </div>
      
                  {/* Quick Links */}
                  <div>
                    <h4 className="font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-amber-200">
                      <li><a href="#" className="hover:text-white transition">Home</a></li>
                      <li><a href="#" className="hover:text-white transition">Explore</a></li>
                      <li><a href="#" className="hover:text-white transition">My Order</a></li>
                      <li><a href="#" className="hover:text-white transition">Account</a></li>
                      <li><a href="#" className="hover:text-white transition">Contact</a></li>
                    </ul>
                  </div>
      
                  {/* Contact */}
                  <div>
                    <h4 className="font-bold mb-4">Contact Us</h4>
                    <ul className="space-y-2 text-sm text-amber-200">
                      <li>+234 000 123 4678</li>
                      <li>hello@chiakakitchen.com</li>
                      <li>123 Ikoyi Mall, Lagos, Nigeria</li>
                    </ul>
                    <div className="flex gap-3 mt-6">
                      <a href="#" className="w-8 h-8 bg-amber-800 rounded flex items-center justify-center hover:bg-amber-700 transition">
                        <Facebook className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-8 h-8 bg-amber-800 rounded flex items-center justify-center hover:bg-amber-700 transition">
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-8 h-8 bg-amber-800 rounded flex items-center justify-center hover:bg-amber-700 transition">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-8 h-8 bg-amber-800 rounded flex items-center justify-center hover:bg-amber-700 transition">
                        <Instagram className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
    </div>
  )
}

export default Footer
