import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home";
import Login from "./Login";
import About from "./About";


function App(){
    return (
        <>
        <NavBar />
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/about" element={<About />}/>
        </Routes>
        </>
    )
}
export default App;