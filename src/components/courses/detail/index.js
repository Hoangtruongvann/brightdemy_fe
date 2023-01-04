import React, { useEffect, useState  } from "react";
import { useParams } from "react-router-dom";

import Header from "../../partials/header/header";
import CourseDescriptions from "./CourseDescriptions";
import Table from "./Table";
import Footer from "../../partials/footer/footer";

import { getAllCourses } from "../../../API/courseAPI";

const Detail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({})
  const getCourses = async() => {
    const courses = await getAllCourses();
    setCourse(courses.find((e) => e.id.toString() === id.toString()));
  }
  useEffect(() => {
    getCourses();
  }, [course])
  return (
    <div>
      <Header navID={2} />
      <div className="h-85">
        <CourseDescriptions course={course} />
        <Table course={course} />
      </div>
      <Footer />
    </div>
  )
};
export default Detail;
