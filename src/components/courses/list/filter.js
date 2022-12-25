import React from "react";
import { filterOptions } from "../../../TestData/data";

const Filter = ({
  language,
  setLanguage,
  framework,
  setFramework,
  position,
  setPosition,
}) => {
  return (
    <div className="col col-2 mb-4">
      <div>
        <div>
          <h5 className="h5 mb-0  ml-2">{filterOptions[0].name}</h5>
        </div>
        {filterOptions[0].options.map((option) => (
          <div key={"key" + option.name}>
            <div className="form-check border rounded  px-3 py-2 d-flex align-items-center mt-2 mb-2">
              <input
                type="checkbox"
                id={option.name}
                className="me-2"
                onClick={(e) => {
                  if (e.target.checked) setLanguage([...language, option.name]);
                  else setLanguage(language.filter((e) => e !== option.name));
                }}
              />
              <label className="form-check-label  ml-2" htmlFor={option.name}>
                {option.name}
              </label>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div>
          <h5 className="h5 mb-0  ml-2">{filterOptions[1].name}</h5>
        </div>
        {filterOptions[1].options.map((option) => (
          <div key={"key" + option.name}>
            <div className="form-check border rounded  px-3 py-2 d-flex align-items-center mt-2 mb-2">
              <input
                type="checkbox"
                id={option.name}
                className="me-2"
                onClick={(e) => {
                  if (e.target.checked)
                    setFramework([...framework, option.name]);
                  else setFramework(framework.filter((e) => e !== option.name));
                }}
              />
              <label className="form-check-label  ml-2" htmlFor={option.name}>
                {option.name}
              </label>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div>
          <h5 className="h5 mb-0  ml-2">{filterOptions[2].name}</h5>
        </div>
        {filterOptions[2].options.map((option) => (
          <div key={"key" + option.name}>
            <div className="form-check border rounded  px-3 py-2 d-flex align-items-center mt-2 mb-2">
              <input
                type="checkbox"
                id={option.name}
                className="me-2"
                onClick={(e) => {
                  if (e.target.checked) setPosition([...position, option.name]);
                  else setPosition(position.filter((e) => e !== option.name));
                }}
              />
              <label className="form-check-label  ml-2" htmlFor={option.name}>
                {option.name}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Filter;
