import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Components/Header-footer/header";
import Footer from "./Components/Header-footer/footer";
import Home from "./Components/Home/index";
import SingIn from "./Components/Singin";

const Root = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/sing_in" element={<SingIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Root;
