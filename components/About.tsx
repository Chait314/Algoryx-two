"use client"
import { useTheme } from '@/context/ThemeContext'
import { Sparkles } from 'lucide-react'
import MetricCard from './MetricCard'


const About = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <section id="About" className={`scroll-mt-28 min-h-[70vh] p-5 flex flex-col justify-center ${theme==='dark'?'bg-[#161B22]':'bg-[#F9FAFB]'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Sparkles className="w-3.5 h-3.5" /> Who We Are
              </span>
              <h1 className={`${theme==='dark'?'text-white':'text-black'} text-4xl sm:text-5xl  font-extrabold tracking-tight leading-tight`}>
                Architecting the Future of <span className="bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">Intelligent Systems</span>
              </h1>
              <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                At Algoryx Technologies, we blend high-performance data pipelines with next-generation automated architectures. We build software platforms designed to scale seamlessly while handling intense computational demands.
              </p>
              
              {/* Interactive Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-800/40">
                <MetricCard count="98.99%" label="Uptime Guaranteed" theme={theme} />
                <MetricCard count="10x" label="Faster Workflows" theme={theme} />
                <MetricCard count="24/7" label="Automated Ops" theme={theme} />
              </div>
            </div>

            {/* Interactive Animated Visual Box */}
            <div className={`p-8 rounded-2xl border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10 ${theme === 'dark' ? 'bg-black/60 border-gray-800' : 'bg-white border-gray-200 shadow-xl'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs text-gray-500 font-mono ml-auto">algoryx-core-v2.1</span>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="p-3 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 animate-pulse">
                  &gt; Initializing high-throughput pipeline...
                </div>
                <div className={`p-3 rounded border ${theme === 'dark' ? 'bg-gray-900 border-gray-800 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-700'}`}>
                  &gt; Optimizing distributed parameters across 64 nodes.
                </div>
                <div className={`p-3 rounded border ${theme === 'dark' ? 'bg-gray-900 border-gray-800 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-700'}`}>
                  &gt; System Status: Active | Latency: 1.2ms
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default About
