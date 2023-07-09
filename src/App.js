import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navabar } from "./components/Navabar";
import { Home } from "./pages/Home";
import { FrontDesk } from "./pages/FrontDesk";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Router>
        <Navabar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/frontdesk" element={<FrontDesk/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
