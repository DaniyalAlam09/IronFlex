import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Button from "../components/Button";
import Input from "../components/Input";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "support",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submission:", formData);
    alert("Message sent successfully! Check console for data.");
    setFormData({ name: "", email: "", subject: "support", message: "" });
  };

  return (
    <div className="pt-24 pb-20">
      <section className="py-20 text-center">
        <h1 className="text-5xl font-black uppercase tracking-tight mb-4">Get In <span className="text-primary italic">Touch</span></h1>
        <p className="text-slate-400">Have questions? We're here to help you start your journey.</p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
             <div className="p-8 rounded-3xl bg-slate-950 border border-white/5 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary"><MapPin /></div>
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wide">Location</h4>
                    <p className="text-slate-400 text-sm">123 Muscle Way, Fitness City</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary"><Phone /></div>
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wide">Phone</h4>
                    <p className="text-slate-400 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary"><Mail /></div>
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wide">Email</h4>
                    <p className="text-slate-400 text-sm">hello@ironflex.com</p>
                  </div>
                </div>
             </div>

             {/* Business Hours */}
             <div className="p-8 rounded-3xl bg-slate-900 border border-white/5">
                <h4 className="font-bold text-white uppercase tracking-wide mb-4">Opening Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-slate-400"><span>Mon - Fri</span> <span className="text-white">5 AM - 11 PM</span></div>
                  <div className="flex justify-between text-slate-400"><span>Saturday</span> <span className="text-white">6 AM - 9 PM</span></div>
                  <div className="flex justify-between text-slate-400"><span>Sunday</span> <span className="text-white">7 AM - 6 PM</span></div>
                </div>
             </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-950 p-10 rounded-3xl border border-white/5 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <Input 
                      label="Full Name" 
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    <Input 
                      label="Email Address" 
                      type="email" 
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                </div>
                <Input 
                  label="Subject" 
                  type="select"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  options={[
                    { label: "General Inquiry", value: "general" },
                    { label: "Membership Support", value: "support" },
                    { label: "Personal Training", value: "training" },
                  ]}
                />
                <Input 
                  label="Message" 
                  type="textarea" 
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
                <Button type="submit" className="w-full gap-2">
                  Send Message <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
