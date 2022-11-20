import React from "react";
import Footer from "../../partials/footer/footer";
import Header from "../../partials/header/header";
import Filter from "./filter";
import Table from "./table";
const Courses = () => {
  return (
    <div>
      <Header />
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
