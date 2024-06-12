import "./App.css";
import Header from "./components/Header/Header.jsx";
import Intro from "./components/Intro/Intro.jsx";
import Promo from "./components/Promo/Promo.jsx";
import Services from "./components/Services/Services.jsx";
import ResentWork from "./components/ResentWork/ResentWork.jsx";
import VideoBlock from "./components/VideoBlock/VideoBlock.jsx";
import LastNews from "./components/LastNews/LastNews.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Scroll from "./components/Scroll/Scroll.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Promo />
      <Services />
      <ResentWork />
      <VideoBlock />
      <LastNews />
      <Testimonial />
      <Footer />
      <Scroll />
    </div>
  );
}

export default App;
