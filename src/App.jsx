import "./App.css";
import About from "./Components/About";
import ContactMeCard from "./Components/ContactMeCard";
import ContactMeSection from "./Components/ContactMeSection";
import Hero from "./Components/Hero";
import ImageScroller from "./Components/ImageScroller";
import Pricing from "./Components/Pricing";
import Products from "./Components/Products";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Footer from "./Layouts/Footer";
import Navbar from "./Layouts/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ImageScroller />
      <About />
      <ContactMeCard />
      <Services />
      <Pricing />
      <Products />
      <Testimonials />
      <ContactMeSection />
      <Footer />
    </>
  );
}

export default App;
