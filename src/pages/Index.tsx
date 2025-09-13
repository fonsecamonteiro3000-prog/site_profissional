import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section id="inicio">
        <Hero />
      </section>
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;
