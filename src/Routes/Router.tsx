import { Route, Routes } from "react-router-dom";
import Layout from "@/Components/Layout";
import Home from "@/Pages/Home";
import Detail from "@/Pages/Detail";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
};

export default Router;
