import React, { useState } from "react";
import NavDetail from "./navDetail";
import Document from "./document/document";
import Exercise from "./excercise/excercise";
import Quiz from "./quiz/quiz";

const Table = () => {
  const [nav, setNav] = useState(1);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h5>Course documents</h5>
          <div className="m-3">
            <NavDetail nav={nav} setNav={setNav} />
            <div className="tab-content" id="myTabContent">
              <Document nav={nav} />
              <Exercise nav={nav} />
              <Quiz nav={nav} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Table;
