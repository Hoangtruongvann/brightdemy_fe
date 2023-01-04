import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Footer from "../../partials/footer/footer";
import Header from "../../partials/header/header";
import Comment from "./comment";
import { getAllCourses } from "../../../API/courseAPI";

import Form from "./form";
const QAndA = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const getCourses = async () => {
    const courses = await getAllCourses();
    setCourse(courses.find((e) => e.id.toString() === id.toString()));
  };
  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div>
      <Header navID={2} />

      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-5 col-md-6 col-12 pb-4">
            <h3>
              <span className="text-primary">{course.name}</span>
            </h3>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
          <Form coursesID={course.id} />
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default QAndA;
