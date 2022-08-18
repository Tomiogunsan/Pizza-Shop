import Navbar from "./component/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import Home from "./component/Pages/Home";
import About from "./component/Pages/About";
import Menu from "./component/Pages/Menu";


function App() {
  return (
    <div className="App">
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
