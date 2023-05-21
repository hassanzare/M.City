import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Components/Header-footer/header";
import Footer from "./Components/Header-footer/footer";
import Home from "./Components/Home/index";

const Root = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Root;
