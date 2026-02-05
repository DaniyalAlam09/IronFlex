import React from "react";
import { Link } from "react-router-dom";
import { Dumbbell, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Dumbbell className="w-8 h-8 text-primary" />
              <span className="text-2xl font-black uppercase tracking-tighter text-white">
                Iron<span className="text-primary">Flex</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Push your limits and transform your body with IronFlex. Modern equipment, expert trainers, and a community that motivates you.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-primary transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-primary transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-primary transition-colors text-white">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-primary transition-colors">Programs</Link></li>
              <li><Link to="/membership" className="text-slate-400 hover:text-primary transition-colors">Membership</Link></li>
              <li><Link to="/register-trainer" className="text-slate-400 hover:text-primary transition-colors">Become a Trainer</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-primary" />
                <span>123 Muscle Way, Fitness City</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@ironflex.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Newsletter</h3>
            <p className="text-slate-400 mb-4">Subscribe for tips and updates.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address"
                className="bg-slate-900 border-none rounded-md px-4 py-2 w-full text-white focus:ring-1 focus:ring-primary outline-none"
              />
              <button className="bg-primary hover:bg-red-600 text-white p-2 rounded-md transition-colors">
                GO
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} IronFlex Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
