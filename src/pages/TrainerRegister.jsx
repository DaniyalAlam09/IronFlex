import React, { useState } from "react";
import { UserPlus, Dumbbell, Award, Calendar } from "lucide-react";
import Button from "../components/Button";
import Input from "../components/Input";

const TrainerRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    specialization: "bodybuilding",
    experience: 2,
    bio: "",
    availableNow: true,
  });

  // Handler for submit WITHOUT <form> tag
  const handleTrainerSignup = () => {
    // Basic validation check
    if (!formData.firstName || !formData.lastName) {
      alert("Please enter your name.");
      return;
    }

    console.log("Trainer Registration (Manual Submit):", formData);
    alert(`Success! Trainer ${formData.firstName} registered. Check console for data.`);
    // Reset or redirect...
  };

  const handleCheckbox = () => {
    setFormData({...formData, availableNow: !formData.availableNow});
  }

  return (
    <div className="pt-24 pb-20">
      <section className="py-20 bg-slate-950/50 border-y border-white/5 mb-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-black uppercase tracking-tight mb-4 text-primary">Join the Elite</h1>
          <p className="text-slate-400">We're looking for passionate trainers to help our members achieve their goals. Apply now to join our team.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-slate-900/50 p-10 rounded-3xl border border-white/10 shadow-xl space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <Input 
              label="First Name" 
              placeholder="Robert"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            />
            <Input 
              label="Last Name" 
              placeholder="Pump"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Input 
              label="Specialization" 
              type="select"
              value={formData.specialization}
              onChange={(e) => setFormData({...formData, specialization: e.target.value})}
              options={[
                { label: "Bodybuilding", value: "bodybuilding" },
                { label: "Crossfit", value: "crossfit" },
                { label: "Yoga/Pilates", value: "yoga" },
                { label: "Strength & Conditioning", value: "strength" },
              ]}
            />
            <div className="space-y-1.5">
               <Input 
                label={`Years of Experience: ${formData.experience}`}
                type="range"
                min="0"
                max="20"
                value={formData.experience}
                onChange={(e) => setFormData({...formData, experience: parseInt(e.target.value)})}
              />
            </div>
          </div>

          <Input 
            label="Short Bio" 
            type="textarea"
            placeholder="Tell us about your training philosophy..."
            value={formData.bio}
            onChange={(e) => setFormData({...formData, bio: e.target.value})}
          />

          <Input 
            label="Availability" 
            type="checkbox"
            options={[{ label: "I'm available for new clients immediately", value: "available" }]}
            checkedRows={formData.availableNow ? ["available"] : []}
            onChange={handleCheckbox}
          />

          <div className="pt-4">
            {/* Note: No <form> tag here, using onClick for submission */}
            <Button size="lg" className="w-full" onClick={handleTrainerSignup}>
              Apply as Trainer
            </Button>
            <p className="text-center text-xs text-slate-500 mt-4 italic">
              * This application is processed manually. We will contact you within 48 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerRegister;
