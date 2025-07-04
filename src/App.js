import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
    <Layout></Layout>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/detail/:id" element={<Detail></Detail>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
