import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Help from "./Help";

const RouterApp = () =>{
    return (
        <BrowserRouter>
            <ul style={{display:'flex', listStyle:'none', padding:'100', gap:'50px'}}>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/help">help </Link></li>
            </ul>
            <Routes >
                <Route  path="/" element={<Home />}/>
                <Route  path="/about" element={<About />}/>
                <Route  path="/help" element={<Help />}/>
            </Routes>
        </BrowserRouter>
    );
}
export default RouterApp;