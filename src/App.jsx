import Form from "./Form"
import "./App.css"
import { useState } from "react";
import Navbar from "./Navbar";
import TableData from "./TableData";
import { BrowserRouter, Routes, Route  } from "react-router-dom";



function App() {
  const [activeItem, setActiveItem] = useState('login'); 
  return (
    <>
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />

    <BrowserRouter>
    
    <Routes>

    <Route  path="/" element={ <Form/>}/>
   <Route  path="data" element={ <TableData/>}></Route>
    </Routes>
      </BrowserRouter>
   </>
     
  )
}

export default App