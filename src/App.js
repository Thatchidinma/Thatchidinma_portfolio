import './App.css';
import { Home } from './components/homePage';
import { Nav } from "./components/nav";
import { WorkPage } from './components/workPage';
import { AboutPage } from './components/aboutPage';
import { ContactPage } from "./components/contactPage";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App text-white lg:text-xl h-svh font-thin">
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/works" element={<WorkPage/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route path="/contact" element={<ContactPage/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
