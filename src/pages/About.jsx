import React from "react";
import { Users, Award, ShieldCheck, History } from "lucide-react";

const About = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-20 bg-slate-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Our <span className="text-primary italic">Story</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Founded in 2010, IronFlex was born out of a passion for hardcore fitness and the belief that everyone has a higher potential waiting to be unlocked.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <img 
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop" 
              alt="Gym History" 
              className="rounded-2xl grayscale group-hover:grayscale-0 transition-all"
            />
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-sm">
                <History className="w-5 h-5" /> Since 2010
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tight">The IronFlex Vision</h2>
              <p className="text-slate-400 leading-relaxed">
                We started as a small basement gym with just three power racks and a mission to create the most motivating environment in the city. Today, we're a leading fitness hub, but our core values remain the same: Hard work, no excuses, and relentless progress.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <div className="text-3xl font-black text-white">14+</div>
                  <div className="text-xs font-bold uppercase text-slate-500 tracking-wider">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white">100k+</div>
                  <div className="text-xs font-bold uppercase text-slate-500 tracking-wider">Workout Sessions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">What We Stand For</h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck className="w-10 h-10" />, title: "Excellence", desc: "We provide the best equipment and trainers to ensure your success." },
              { icon: <Users className="w-10 h-10" />, title: "Community", desc: "A supportive environment where everyone pushes each other to be better." },
              { icon: <Award className="w-10 h-10" />, title: "Integrity", desc: "Transparent pricing and honest guidance on your fitness journey." },
            ].map((value, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-900 border border-white/5 hover:border-primary/30 transition-all group">
                <div className="text-primary mb-6 transition-transform group-hover:scale-110 duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-4">{value.title}</h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
