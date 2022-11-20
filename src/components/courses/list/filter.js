import React from "react";

const Filter = () => {
  const filterOptions = [
    {
      id: 1,
      name: "Ngôn ngữ",
      options: [
        { id: 1, name: "C/C++" },
        { id: 2, name: "java" },
        { id: 3, name: "HTML/CSS" },
        { id: 4, name: "JavaScript" },
        { id: 5, name: "Python" },
        { id: 6, name: "C#" },
        { id: 7, name: "Other" },
      ],
    },
    {
      id: 2,
      name: "Framwork",
      options: [
        { id: 1, name: "NodeJS(Express)" },
        { id: 2, name: "Spring Boot" },
        { id: 3, name: "ReactJS" },
        { id: 4, name: "Angular" },
        { id: 5, name: ".NET" },
        { id: 7, name: "Other" },
      ],
    },
    {
      id: 3,
      name: "Vị trí",
      options: [
        { id: 1, name: "Back-End" },
        { id: 2, name: "Front-End" },
        { id: 3, name: "Data Analyst" },
        { id: 4, name: "Database Engineer" },
        { id: 7, name: "Other" },
      ],
    },
  ];
  return (
    <div className="col col-2 mb-4">
      {filterOptions.map((filter) => (
        <div>
          <div>
            <h5 className="h5 mb-0  ml-2">{filter.name}</h5>
          </div>
          {filter.options.map((option) => (
            <div>
              <div className="form-check border rounded  px-3 py-2 d-flex align-items-center mt-2 mb-2">
                <input type="checkbox" id={option.name} className="me-2" />
                <label className="form-check-label  ml-2" for={option.name}>
                  {option.name}
                </label>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Filter;
