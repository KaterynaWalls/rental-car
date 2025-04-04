import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Loader from "./Loader/Loader";

const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
