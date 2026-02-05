import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Zap, Shield, Target, Activity, Dumbbell } from "lucide-react";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym Hero" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left w-full">
          <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-bold uppercase tracking-widest">
              <Zap className="w-4 h-4" /> No. 1 Fitness Destination
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              Unleash Your <br />
              <span className="text-primary italic">Inner Beast</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
              Transform your physique and mind with world-class facilities, elite training programs, and a community built on grit and determination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/register-member">
                <Button size="lg" className="w-full sm:w-auto">Start Your Journey</Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">View Programs</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-10 right-10 hidden lg:flex gap-8 z-20 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
          {[
            { label: "Active Members", val: "5k+" },
            { label: "Expert Trainers", val: "50+" },
            { label: "Modern Equipment", val: "200+" },
          ].map((stat, i) => (
            <div key={i} className="text-right">
              <div className="text-4xl font-black text-white">{stat.val}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                Why Choose <br />
                <span className="text-primary">IronFlex?</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                We're more than just a gym. We're a results-driven powerhouse dedicated to helping you reach your peak performance. Whether you're a beginner or an elite athlete, we have the tools you need.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Personalized Coaching", desc: "Expert guidance tailored to your specific goals." },
                  { title: "24/7 Access", desc: "Train on your schedule, anytime, day or night." },
                  { title: "Premium Nutrition", desc: "Integrated diet plans to fuel your transformation." },
                ].map((feat, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-800/50 border border-white/5 hover:border-primary/20 transition-all">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white uppercase tracking-wide">{feat.title}</h4>
                      <p className="text-slate-400 text-sm">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
                alt="Gym Interior" 
                className="relative rounded-2xl shadow-2xl border border-white/10 grayscale-[50%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-16">
            Our <span className="text-primary italic">Programs</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Bodybuilding", icon: <Dumbbell className="w-8 h-8" />, desc: "Build massive strength and muscle volume." },
              { title: "Yoga & Flow", icon: <Activity className="w-8 h-8" />, desc: "Balance your mind and body flexibility." },
              { title: "HIIT", icon: <Zap className="w-8 h-8" />, desc: "High intensity for maximum calorie burn." },
            ].map((program, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-900 border border-white/5 hover:border-primary/40 transition-all group">
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform">{program.icon}</div>
                <h3 className="text-xl font-bold uppercase mb-4">{program.title}</h3>
                <p className="text-slate-400 mb-6">{program.desc}</p>
                <Link to="/services" className="text-primary font-bold uppercase text-xs tracking-widest hover:underline">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link to="/services">
              <Button variant="outline">View All Programs</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
