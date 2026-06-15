import {BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import {Characters, CharacterDetail} from "./pages/Characters";
import NavBar from "./pages/NavBar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<Characters/>}/>
      <Route path="/characters/:id" element={<CharacterDetail />} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;