import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../partials/footer/footer";
import Header from "../../partials/header/header";
import Filter from "./filter";
import Table from "./table";
const Courses = () => {
  const location = useLocation();

  return (
    <div>
      <Header navID={location.pathname === "/" ? 1 : 2} />
      <div className="container-fluid mt-4">
        <div className="row">
          <Filter />
          <Table />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Courses;
