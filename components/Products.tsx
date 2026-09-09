"use client"
import { useTheme } from "@/context/ThemeContext";
import { Cloud, Cpu, Database, ShieldCheck, Workflow } from "lucide-react";
import ProductCard from "./ProductCard";

const Prods = [
  {
    name: "Algoryx Cloud Engine",
    Icon: Cloud,
    Description: "High-performance cloud infrastructure for seamless app hosting, automated auto-scaling, and zero-latency global edge deployments."
  },
  {
    name: "Algoryx AI Compute",
    Icon: Cpu,
    Description: "Distributed machine learning infrastructure allowing teams to fine-tune, benchmark, and deploy large-scale LLMs and analytical models effortlessly."
  },
  {
    name: "Algoryx ZeroTrust Guard",
    Icon: ShieldCheck,
    Description: "Enterprise-grade identity management, real-time threat detection, and continuous automated compliance auditing for multi-cloud stacks."
  },
  {
    name: "Algoryx Flow Automation",
    Icon: Workflow,
    Description: "A low-code workflow orchestrator that bridges complex API integrations, scheduled background jobs, and real-time webhooks in one dashboard."
  },
  {
    name: "Algoryx Quantum DB",
    Icon: Database,
    Description: "A globally distributed vector and relational database engineered for real-time analytics, ultra-fast queries, and dynamic schema evolution."
  }
];
const Products = () => {
  const{ theme, toggleTheme } = useTheme();
  

  return (
    <section 
      id="Products" 
      className={`p-8 md:p-12 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#161B22] text-white' : 'bg-[#F9FAFB] text-gray-900'
      }`}
    >
  {/* Header Section */}
    <div className="max-w-7xl  items-center justify-center flex flex-col mx-auto mb-8 space-y-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-purple-500">
        Our Portfolio
      </span>
      <h2 className="text-5xl font-bold tracking-tight">Products</h2>
    </div>

  {/* Responsive Product Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
          Prods.map((prod, idx)=>(
            <div key = {idx}>
              <ProductCard name = {prod.name} Icon = {prod.Icon} Description= {prod.Description}/>
            </div>
          ))
        }
      </div>
    </section>
    )
}

export default Products
