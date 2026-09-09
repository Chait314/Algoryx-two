"use client"
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import Sections from './Sections';

const NavBar = () => {
    const { theme, toggleTheme } = useTheme();
    const [ scrollProgress, setScrollProgress ] = useState<number>(0);
    
    useEffect(()=>{
        const HandleScroll = () => {
            const totalH = document.documentElement.scrollHeight - window.innerHeight;
            if (totalH > 0) {
                const currentProgress = (window.scrollY / totalH) * 100;
                setScrollProgress(currentProgress);
            }
        }
        window.addEventListener('scroll', HandleScroll);
        return () => window.removeEventListener('scroll', HandleScroll);
    },[]);


    const scrollToSection = (id:string)=>{
        const element = document.getElementById(id);
      
        if(element){
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - 80;
            console.log("current sectionsss:", id);
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
        }
    }
    
    return (
        <header className={`sticky top-0 z-50 ${theme === 'dark' ? 'bg-[#161B22] text-gray-50' : 'bg-[#F9FAFB] text-gray-900'} relative items-center w-full h-[80px] flex px-4 shadow-sm transition-colors duration-200`}>

        <section className='flex items-center gap-3 shrink-0'>
            <img className='h-[30px] w-[30px] rounded' src='Logo.png' alt='Algoryx Logo' /> 
            <nav className='font-bold text-xl'>
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${theme === 'dark' ? 'from-purple-600 to-purple-400' : 'from-purple-800 to-purple-600'} text-2xl`}>
                Algoryx
            </span> Technologies 
            </nav>
        </section>

        <nav className='flex-1 flex items-center justify-center gap-5 lg:gap-16 font-medium text-sm sm:text-base'>
            <Sections text="About" sectionName="About" scrollToSection={scrollToSection}/>
            <Sections text="Our Mission" sectionName='OurMission' scrollToSection={scrollToSection}/>
            <Sections text="Products" sectionName='Products' scrollToSection={scrollToSection}/>
            <Sections text="Contact" sectionName="Contact" scrollToSection={scrollToSection}/>
        </nav>

        <button 
            onClick={toggleTheme} 
            className='absolute right-4 p-2 rounded-lg transition-colors duration-200 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 cursor-pointer active:scale-95'
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? (
            <Sun className='h-5 w-5 text-amber-400 transition-transform duration-300 hover:rotate-45' />
            ) : (
            <Moon className='h-5 w-5 text-purple-600 transition-transform duration-300 hover:-rotate-12' />
            )}
        </button>

        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gray-200 dark:bg-gray-800">
            <div 
            className="h-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
            />
        </div>
        </header>
    )
}

export default NavBar
