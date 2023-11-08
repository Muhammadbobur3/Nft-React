import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Artist } from "./pages/artist";
import { Nft } from "./pages/nft";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artist" element={<Artist />} />
      <Route path="/nft" element={<Nft />} />
    </Routes>
  );
}

export default App;
