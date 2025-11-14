import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default HomePage;
