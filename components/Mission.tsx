"use client"
import { useTheme } from "@/context/ThemeContext";
import InteractiveMission from "./InteractiveMission";
const Mission = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <section id="OurMission" className={`${theme==='dark'?'bg-[#161B22] text-white':'bg-[#F9FAFB] text-black'} scroll-mt-28 py-10`}>
      <div className="text-center max-w-3xl mx-auto p-8 mb-16 space-y-4">
        <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          Our Mission
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold">Empowering Innovation Through Automation</h2>
        <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
          We exist to simplify complexity. Our goal is to equip organizations with scalable tools that transform intricate technical challenges into smooth, automated execution.
        </p>
      </div>

      <InteractiveMission />
    </section>
  )
}

export default Mission
