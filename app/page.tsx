import About from "@/components/About";
import Contact from "@/components/Contact";
import Mission from "@/components/Mission";
import NavBar from "@/components/NavBar";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
    <NavBar/>
    <div>
      <About/>
      <Mission/>
      <Products/>
      <Contact/>
    </div>
    </>
  );
}
