import React, { lazy} from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import UserLayout from "./pages/user/userLayout";
import LazyLayout from "./pages/user/lazyLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LazyProduct = lazy(() => import("./pages/user/product"));


const UserRoutes = () => {
  return (
    <UserLayout>
      <Routes>
        <Route path="/" element={<LazyLayout component={LazyProduct} />} />
      </Routes>
    </UserLayout>
  );
};
const App = () => {
  return (
    <div className="App">
    <ToastContainer />
    <Routes>
    <Route path="/*" element={<UserRoutes/>}/>
    </Routes>

    </div>
  );
};

export default App;