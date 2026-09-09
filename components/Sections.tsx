"use client"
import { useTheme } from '@/context/ThemeContext';

type sectionType = {
    text:string;
    sectionName:string;
    scrollToSection: (id:string) => void;
}

const Sections = ({text, sectionName, scrollToSection}:sectionType) => {
    const {theme, toggleTheme}  = useTheme();

    return (
        <button className={`${theme ==='dark'?'text-white hover:text-purple-600':'text-black hover:text-purple-400'} hover:cursor-pointer items-center transition duration-300`}
        onClick = {()=>scrollToSection(sectionName)}>
            <nav>{text}</nav>
        </button>
    )
}

export default Sections
