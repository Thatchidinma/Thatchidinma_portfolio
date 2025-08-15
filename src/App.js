import './App.css';
import { Home } from './components/homePage';
import { Nav } from "./components/nav";
import { WorkPage } from './components/workPage';
import { AboutPage } from './components/aboutPage';
import { ContactPage } from "./components/contactPage";
import { Routes, Route } from "react-router-dom";
import Footer from './components/footer';
import htmllogo from "./images/html-logo.png"
import csslogo from "./images/css-logo.png"
import jslogo from "./images/js-logo.png"
import reactlogo from "./images/react-logo.png"
import wordpresslogo from "./images/wordpress-logo.png"


function App() {
  return (
    <div className="App text-white lg:text-xl h-svh font-thin relative">
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/works" element={<WorkPage/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route path="/contact" element={<ContactPage/>}></Route>
        </Routes>
      <Footer/>
      <img src={htmllogo} alt="" className="h-10 animate-bounce fixed bottom-32 right-32 opacity-20 dark:opacity-5 hover:opacity-100 hover:grayscale-0 z-20" />
            <img src={csslogo} alt="" className="h-10 animate-bounce fixed bottom-32 left-32 opacity-25 dark:opacity-5  hover:opacity-100 hover:grayscale-0 z-20" />
            <img src={jslogo} alt="" className="h-10 animate-bounce fixed top-32 right-72 opacity-25 dark:opacity-5  hover:opacity-100 hover:grayscale-0 z-20" />
            <img src={reactlogo} alt="" className="h-10 animate-spin-slow fixed top-72 left-72 opacity-25 dark:opacity-5  hover:opacity-100 hover:grayscale-0 z-20" />
            <img src={wordpresslogo} alt="" className="h-10 animate-spin-slow hover:animate-none fixed top-96 right-60 opacity-25 dark:opacity-10  hover:opacity-100 hover:grayscale-0 z-20" />
    </div>
  );
}

export default App;
