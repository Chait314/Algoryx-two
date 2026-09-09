"use client"
import { useTheme } from '@/context/ThemeContext';
import { Lightbulb, Rocket, Target } from 'lucide-react';

const InteractiveMission = () => {
  const missions = [
    {
      icon: <Target className="w-6 h-6 text-purple-400" />,
      title: "Precision Execution",
      desc: "Minimizing operational latency with deterministic workflows and predictive error handling."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-amber-400" />,
      title: "Intelligent Design",
      desc: "Creating intuitive interfaces for complex computational backends to make technical tools accessible."
    },
    {
      icon: <Rocket className="w-6 h-6 text-indigo-400" />,
      title: "Scalable Growth",
      desc: "Building systems from day one to handle exponential scaling without architectural rewrites."
    }
  ];
  const { theme, toggleTheme } = useTheme();

    return (
        <div className="grid md:grid-cols-3 gap-4">
        {missions.map((m, idx) => (
            <div 
            key={idx}
            className={`p-8 rounded-2xl border transition-all duration-300 group hover:-translate-y-2 cursor-pointer ${
                theme === 'dark' 
                ? 'bg-[#161B22] border-gray-800 hover:border-purple-500/40 hover:bg-[#1c222b]' 
                : 'bg-white border-gray-200 hover:border-purple-300 shadow-md hover:shadow-xl'
            }`}
            >
            <div className="p-3 rounded-xl bg-purple-500/10 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                {m.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                {m.title}
            </h3>
            <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {m.desc}
            </p>
            </div>
        ))}
        </div>
    );
};

export default InteractiveMission
