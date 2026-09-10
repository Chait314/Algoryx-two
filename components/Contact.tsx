"use client"
import { useTheme } from '@/context/ThemeContext';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div id = "Contact" className={`p-4 justify-center flex ${theme==='dark'? 'bg-[#161B22] text-white border-gray-200':'bg-[#F9FAFB] text-black border-gray-600'}`}>
            <div className={`flex-col flex p-4 rounded z-20 justify-center text-center w-[75%] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300 ${theme==='dark'?'bg-black shadow-purple-800':'bg-white shadow-purple-400'}`}>
                <span className='font-bold text-3xl bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text '>Connect with us</span>
                <section className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
  {/* Email Card */}
        <a 
            className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 group hover:-translate-y-0.5 ${
            theme === 'dark' 
                ? 'bg-[#161B22] border-gray-800 hover:border-purple-500/50' 
                : 'bg-white border-gray-200 shadow-sm hover:border-purple-300'
            }`}
        >
            <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-purple-950/60 text-purple-400' : 'bg-purple-50 text-purple-600'}`}>
            <Mail className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
            <span className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                Email Us
            </span>
            <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-100 group-hover:text-purple-300' : 'text-gray-900 group-hover:text-purple-600'}`}>
                contact@algoryx.com
            </span>
            </div>
        </a>

        {/* Phone Card */}
        <a 
            className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 group hover:-translate-y-0.5 ${
            theme === 'dark' 
                ? 'bg-[#161B22] border-gray-800 hover:border-purple-500/50' 
                : 'bg-white border-gray-200 shadow-sm hover:border-purple-300'
            }`}
        >
            <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-purple-950/60 text-purple-400' : 'bg-purple-50 text-purple-600'}`}>
            <Phone className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
            <span className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                Call Us
            </span>
            <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-100 group-hover:text-purple-300' : 'text-gray-900 group-hover:text-purple-600'}`}>
                +91 88765 54310
            </span>
            </div>
        </a>
</section>
            </div>
        </div>
    )
}

export default Contact
