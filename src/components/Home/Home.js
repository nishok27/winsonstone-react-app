import Slide from "./Slide"
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";


function Home() {
    return (
      <div className="home">
        <Slide />
        <Gallery />
        <Contact />
        <Footer />
        
      </div>
    );
  }
  
  export default Home;