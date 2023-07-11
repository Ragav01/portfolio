import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navabar } from "./components/Navabar";
import { Home } from "./pages/Home";
import { FrontDesk } from "./pages/FrontDesk";
import { ErrorPage } from "./pages/ErrorPage";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Works } from "./components/Works";
import { Process } from "./components/Process";
import { JobApp } from "./pages/JobApp";
import { Plugr } from "./pages/Plugr";

function App() {
  return (
    <>
      <Router>
        <Navabar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/works" element={<Works/>} />
          <Route path="/process" element={<Process/>} />
          <Route path="/playground" element={<Process/>} />
          <Route path="/frontdesk" element={<FrontDesk/>} />
          <Route path="/ligns" element={<JobApp/>} />
          <Route path="/plugr" element={<Plugr/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
