import React from "react";
import { Activity, Battery, Dumbbell, Flame, Heart, Zap, ArrowRight } from "lucide-react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Services = () => {
  const programs = [
    {
      title: "Bodybuilding",
      icon: <Dumbbell className="w-10 h-10" />,
      desc: "Comprehensive hypertrophy-focused training to build muscle mass and density.",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Crossfit",
      icon: <Zap className="w-10 h-10" />,
      desc: "High-intensity functional movements designed to improve overall fitness.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "HIIT",
      icon: <Flame className="w-10 h-10" />,
      desc: "Short, intense bursts of exercise followed by brief recovery periods.",
      image: "https://images.unsplash.com/photo-1549576490-b0b4831da60a?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Cardio Focus",
      icon: <Heart className="w-10 h-10" />,
      desc: "Endurance training to strengthen your cardiovascular system and burn fat.",
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=2069&auto=format&fit=crop",
    },
    {
      title: "Yoga & Flow",
      icon: <Activity className="w-10 h-10" />,
      desc: "Improve flexibility, balance, and mental clarity with our expert instructors.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop",
    },
    {
      title: "Performance",
      icon: <Battery className="w-10 h-10" />,
      desc: "Specialized training for athletes looking to optimize their power and speed.",
      image: "https://images.unsplash.com/photo-1434596922112-19c563067271?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="py-20 bg-slate-950 border-b border-white/5 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 underline decoration-primary decoration-8 underline-offset-8">
            Our <span className="text-white">Programs</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We offer a wide range of specialized fitness programs designed to push you to your absolute limits.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-slate-950 border border-white/5">
              {/* Image Background */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-all z-10" />
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20 bg-primary/90 text-white p-3 rounded-xl">
                  {program.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">{program.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {program.desc}
                </p>
                <div className="pt-4">
                  <Link to="/register-member">
                    <Button variant="ghost" className="gap-2 p-0 hover:text-primary transition-colors">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
