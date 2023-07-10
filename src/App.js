import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Home from "./components/Home";
// import Fakenav from "./TestComponents/Fakenav"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
    return(
        <>
        <BrowserRouter>
        
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>

            <Route path="/skills" element={<Skills />}></Route>

            <Route path="/projects" element={<Projects />}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default App;