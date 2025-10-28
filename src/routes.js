import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import News from "./Components/News/news";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/category/:id" element={<News></News>}></Route>
    </Routes>
  );
};

export default RoutesApp;
