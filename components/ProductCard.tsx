"use client"
import { useTheme } from '@/context/ThemeContext';
import { type LucideIcon } from 'lucide-react';
type ProductType = {
    name: string;
    Icon: LucideIcon;
    Description:string;
}

const ProductCard = ({name, Icon, Description}: ProductType) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`group relative flex flex-col items-center p-4 rounded-xl gap-4 ${theme==='dark' 
          ? 'bg-black border-purple-900/40 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/10 hover:bg-gray-900' 
          : 'bg-white border-purple-100 hover:border-purple-300 shadow-md hover:shadow-xl hover:shadow-purple-500/10 hover:bg-gray-100'
        } z-40 shadow hover:shadow-2xl flex transition-all duration-300 hover:cursor-pointer hover:-translate-y-1 shadow-purple-500`}>
            <div className={`p-3 rounded-xl transition-transform duration-300 group-hover:scale-110 
                ${theme==='dark'?'bg-purple-950/60 border border-purple-500/30 text-purple-400':'bg-purple-500 border border-purple-200 text-purple-200'}`}>
                    <Icon className='w-6 h-6'/>
            </div>
            <h3 className={`font-semibold text-lg transition-colors duration-200 ${theme==='dark'?'text-gray-100 group-hover:text-purple-500':'text-gray-900 group-hover:text-purple-600'}`}>
                {name}
            </h3>
            <div className={`${theme==='dark'?'text-gray-100':'text-gray-900'}`}>
                {Description}
            </div>
        </div>
    )
}

export default ProductCard
