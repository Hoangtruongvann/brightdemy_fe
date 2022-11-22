import React from "react";

const NavDetail = ({ nav, setNav }) => {
  return (
    <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li className="nav-item" role="presentation">
        <button
          className={nav === 1 ? "nav-link active" : "nav-link"}
          id="document-tab"
          data-toggle="tab"
          data-target="#document"
          type="button"
          role="tab"
          aria-controls="document"
          onClick={() => setNav(1)}
          aria-selected={nav === 1 ? "true" : false}
        >
          Document
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className={nav === 2 ? "nav-link active" : "nav-link"}
          id="exercise-tab"
          data-toggle="tab"
          data-target="#exercise"
          type="button"
          role="tab"
          aria-controls="exercise"
          onClick={() => setNav(2)}
          aria-selected={nav === 2 ? "true" : false}
        >
          Exercise
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className={nav === 3 ? "nav-link active" : "nav-link"}
          id="quiz-tab"
          data-toggle="tab"
          data-target="#quiz"
          type="button"
          role="tab"
          aria-controls="quiz"
          onClick={() => setNav(3)}
          aria-selected={nav === 3 ? "true" : false}
        >
          Quiz
        </button>
      </li>
    </ul>
  );
};
export default NavDetail;
