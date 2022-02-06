//http://ccdb.hemiola.com/
import { Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
