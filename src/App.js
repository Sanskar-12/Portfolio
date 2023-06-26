import Exp from "./components/Exp";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Work/>
      <Exp/>
      <Services/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      <Toaster/>
    </div>
  );
}

export default App;
