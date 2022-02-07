// ccdb.hemiola.com/
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Dashboard from "./Pages/Dashboard"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
};

export default App;
