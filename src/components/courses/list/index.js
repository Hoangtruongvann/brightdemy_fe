import React, { useEffect, useState } from "react";
import Footer from "../../partials/footer/footer";
import Header from "../../partials/header/header";
import Filter from "./filter";
import Table from "./table";
import { filter } from "../../../API/courseAPI";
const Courses = () => {
  const [language, setLanguage] = useState([]);
  const [framework, setFramework] = useState([]);
  const [position, setPosition] = useState([]);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const getData = async () => {
    const body = {
      language: language,
      framework: framework,
      position: position,
      page: page,
    };
    const resp = await filter(body);
    setData(resp);
  };
  useEffect(() => {
    setPage(1);
    getData();
  }, [language, framework, position]);
  useEffect(() => {
    getData();
  }, [page]);
  return (
    <div>
      <Header navID={2} />
      <div className="container-fluid mt-4">
        <div className="row">
          <Filter
            language={language}
            setLanguage={setLanguage}
            framework={framework}
            setFramework={setFramework}
            position={position}
            setPosition={setPosition}
          />
          <Table data={data} page={page} setPage={setPage} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Courses;
