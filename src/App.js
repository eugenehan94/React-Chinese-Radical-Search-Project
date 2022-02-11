// ccdb.hemiola.com/
//http://ccdb.hemiola.com/characters/radicals/85?filter=gb - chinese characters
//http://ccdb.hemiola.com/characters/radicals/85?filter=gb&fields=kDefinition -definition
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
