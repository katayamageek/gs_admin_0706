import Home from "./pages/home";
import Chart from "./pages/chart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound404 from "./pages/notfound";
import Customer from "./pages/customer";

function App() {
  return (
    <>
      {/* {} */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Router>

      {/* <Home />
      <Chart /> */}
      {/* {} */}
    </>
  );
}

export default App;
