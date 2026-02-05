import React, { useState } from "react";
import { Check, Shield, Zap, Target } from "lucide-react";
import Button from "../components/Button";
import Input from "../components/Input";

const Membership = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    plan: "pro",
  });

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: "29",
      features: ["Access to Gym Floor", "Locker Room Access", "1 Free Trainer Session"],
    },
    {
      id: "pro",
      name: "Pro",
      price: "59",
      features: ["Unlimited Classes", "24/7 Access", "Personalized Diet Plan", "Sauna & Spa"],
      popular: true,
    },
    {
      id: "elite",
      name: "Elite",
      price: "99",
      features: ["All Pro Features", "Dedicated Trainer", "Monthly Massage", "Guest Passes"],
    },
  ];

  const handlePlanSelection = (e) => {
    setFormData({ ...formData, plan: e.target.value });
  };

  const handleJoin = (e) => {
    e.preventDefault();
    console.log("Membership Join Request:", formData);
    alert(`Thank you for choosing the ${formData.plan} plan! Check console for data.`);
  };

  return (
    <div className="pt-24 pb-20">
      <section className="py-20 text-center">
        <h1 className="text-5xl font-black uppercase tracking-tight mb-4">Choose Your <span className="text-primary italic">Plan</span></h1>
        <p className="text-slate-400">Join the IronFlex community today.</p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`p-8 rounded-3xl border-2 flex flex-col ${
                plan.popular ? "border-primary bg-slate-800/50 scale-105" : "border-white/5 bg-slate-950"
              } relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-black uppercase text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-white">${plan.price}</span>
                <span className="text-slate-400">/mo</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                    <Check className="w-5 h-5 text-primary" /> {feat}
                  </li>
                ))}
              </ul>
              <Button 
                variant={plan.popular ? "primary" : "outline"}
                onClick={() => setFormData({...formData, plan: plan.id})}
              >
                Select {plan.name}
              </Button>
            </div>
          ))}
        </div>

        {/* Membership Form (Internal Registration) */}
        <div className="max-w-xl mx-auto bg-slate-900 p-10 rounded-3xl border border-white/5 shadow-2xl">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-8 text-center">Get Started Now</h2>
          <form onSubmit={handleJoin} className="space-y-6">
            <Input 
              label="Full Name" 
              placeholder="John Doe" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <Input 
              label="Email Address" 
              type="email" 
              placeholder="john@example.com" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <Input 
              label="Selected Plan" 
              type="radio" 
              name="plan"
              value={formData.plan}
              onChange={handlePlanSelection}
              options={[
                { label: "Basic Plan ($29/mo)", value: "basic" },
                { label: "Pro Plan ($59/mo)", value: "pro" },
                { label: "Elite Plan ($99/mo)", value: "elite" },
              ]}
            />
            <Button type="submit" className="w-full">Secure My Spot</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Membership;
