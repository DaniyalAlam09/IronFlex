import React, { useState } from "react";
import { UserCheck, Shield, Clipboard, Target } from "lucide-react";
import Button from "../components/Button";
import Input from "../components/Input";

const MemberRegister = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    dob: "",
    phone: "",
    gender: "male",
    goals: [],
    avatar: null,
    terms: false,
  });

  const goalOptions = [
    { label: "Weight Loss", value: "weight-loss" },
    { label: "Muscle Gain", value: "muscle-gain" },
    { label: "Endurance", value: "endurance" },
    { label: "Flexibility", value: "flexibility" },
  ];

  const handleGoalChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, goals: [...formData.goals, value] });
    } else {
      setFormData({ ...formData, goals: formData.goals.filter((g) => g !== value) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.terms) {
      alert("Please accept the terms and conditions.");
      return;
    }
    console.log("Member Registration Submission:", formData);
    alert("Welcome to the squad! Registration successful. Check console for data.");
  };

  return (
    <div className="pt-24 pb-20">
      <section className="py-20 text-center">
        <h1 className="text-5xl font-black uppercase tracking-tight mb-4 underline decoration-primary decoration-4">Join the <span className="text-primary italic">Squad</span></h1>
        <p className="text-slate-400">Your transformation starts with this simple step.</p>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <form onSubmit={handleSubmit} className="bg-slate-950 p-8 rounded-3xl border border-white/5 shadow-2xl space-y-8">
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Account Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-wide text-white border-b border-primary/20 pb-2 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" /> Account Info
              </h3>
              <Input 
                label="Username" 
                placeholder="ironman99"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                required
              />
              <Input 
                label="Email" 
                type="email" 
                placeholder="power@gym.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
              <Input 
                label="Password" 
                type="password" 
                placeholder="********"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>

            {/* Personal Details */}
            <div className="space-y-6">
               <h3 className="text-xl font-bold uppercase tracking-wide text-white border-b border-primary/20 pb-2 flex items-center gap-2">
                <Clipboard className="w-5 h-5 text-primary" /> Personal Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  label="Date of Birth" 
                  type="date"
                  value={formData.dob}
                  onChange={(e) => setFormData({...formData, dob: e.target.value})}
                  required
                />
                <Input 
                  label="Phone" 
                  type="number"
                  placeholder="5551234"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <Input 
                label="Gender" 
                type="radio" 
                name="gender"
                value={formData.gender}
                onChange={(e) => setFormData({...formData, gender: e.target.value})}
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                  { label: "Other", value: "other" },
                ]}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Fitness Goals */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-wide text-white border-b border-primary/20 pb-2 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" /> Fitness Goals
              </h3>
              <Input 
                label="Select all that apply" 
                type="checkbox"
                onChange={handleGoalChange}
                checkedRows={formData.goals}
                options={goalOptions}
              />
            </div>

            {/* Profile Pic */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-wide text-white border-b border-primary/20 pb-2">Profile Action</h3>
              <Input 
                label="Upload Profile Photo" 
                type="file"
                accept="image/*"
                onChange={(e) => setFormData({...formData, avatar: e.target.files[0]})}
              />
            </div>
          </div>

          <div className="pt-8 border-t border-white/5">
            <label className="flex items-center gap-3 cursor-pointer group mb-6">
              <input 
                type="checkbox" 
                checked={formData.terms}
                onChange={(e) => setFormData({...formData, terms: e.target.checked})}
                className="w-5 h-5 border-2 border-slate-700 bg-slate-800 text-primary focus:ring-primary rounded"
              />
              <span className="text-sm text-slate-400 group-hover:text-white transition-colors">
                I agree to the Terms of Service and Privacy Policy.
              </span>
            </label>
            <Button type="submit" size="lg" className="w-full">Complete Registration</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MemberRegister;
