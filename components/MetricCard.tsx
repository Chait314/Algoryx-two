"use client"
type MetricType = {
    count:string;
    label:string;
    theme:string;
}

const MetricCard = ({count, label, theme}:MetricType) => {
  return (
    <div>
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">
            {count}
        </div>
        <div className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            {label}
        </div>
  </div>
  )
}

export default MetricCard
