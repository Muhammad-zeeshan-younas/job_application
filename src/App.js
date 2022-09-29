import "./App.css";
import Events from "./events";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import Create from "./create";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<Create />} />
          <Route path="/event" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
