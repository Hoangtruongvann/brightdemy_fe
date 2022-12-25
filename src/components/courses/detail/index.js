import React from "react";
import { useParams } from "react-router-dom";

import Header from "../../partials/header/header";
import CourseDescriptions from "./CourseDescriptions";
import Table from "./Table";
import Footer from "../../partials/footer/footer";

import { courses } from "../../../TestData/data";

const Detail = () => {
  const { id } = useParams();
  const course = courses[id];
  return (
    <div>
      <Header navID={2} />
      <div className="h-85">
        <CourseDescriptions course={course} />
        <Table course={course} />
      </div>
      <Footer />
    </div>
  );
};
export default Detail;
