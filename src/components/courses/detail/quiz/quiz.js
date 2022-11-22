import React from "react";
import Item from "./item";

const Quiz = ({ nav }) => {
  const quizs = [
    { name: "Mid-course quiz 1" },
    { name: "Mid-course quiz 2" },
    { name: "Final-course quiz" },
  ];
  return (
    <div
      className={
        nav === 3 ? "tab-pane fade show active" : "tab-pane fade show "
      }
      id="quiz"
      role="tabpanel"
      aria-labelledby="quiz-tab"
    >
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Time</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {quizs.map((quiz) => (
            <Item quiz={quiz} />
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-primary btn-sm">
          Add quiz
        </button>
      </div>
    </div>
  );
};
export default Quiz;
