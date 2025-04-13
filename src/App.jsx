import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/navbar"; // Import the Navbar component
import Footer from "./components/Footer/footer";
import TestimonialSection from "./components/Home/testimonialsSection"; // Corrected typo (was testominical)

function Home() {
  return (
    <>
      <h1 className="text-3xl text-center p-10">Home Page</h1>
      <TestimonialSection />
    </>
  );
}

function Menu() {
  return <h1 className="text-3xl text-center p-10">Menu Page</h1>;
}

function Order() {
  return <h1 className="text-3xl text-center p-10">Order Page</h1>;
}

function Story() {
  return <h1 className="text-3xl text-center p-10">Story Page</h1>;
}

function Location() {
  return <h1 className="text-3xl text-center p-10">Location Page</h1>;
}

// Contact Us page (updated path)
function ContactUs() {
  return <h1 className="text-3xl text-center p-10">Contact Us Page</h1>;
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/story" element={<Story />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
