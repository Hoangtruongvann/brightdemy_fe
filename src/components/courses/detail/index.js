import React from "react";
import { useParams } from "react-router-dom";

import Header from "../../partials/header/header";
import CourseDescriptions from "./CourseDescriptions";
import DocumentTable from "./DocumentTable";
import Footer from "../../partials/footer/footer";

import { courses } from "../../../TestData/data";

const Detail = () => {
  const { id } = useParams();
  const course = courses[id];
  return (
    <div>
      <Header navID={2} />
      <CourseDescriptions course={course} />
      <DocumentTable course={course} />
      <Footer />
    </div>
  );
};
export default Detail;
