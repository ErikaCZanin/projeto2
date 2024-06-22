import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Viagens from "./Viagens";
import Titulo from "./Titulo"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Viagens" element={<Viagens />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
