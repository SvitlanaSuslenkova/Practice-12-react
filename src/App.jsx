import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Registered from "./pages/Registered";
import "./reset.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="registered" element={<Registered />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
