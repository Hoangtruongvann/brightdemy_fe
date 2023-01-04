import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import { filterOptions } from "../../../TestData/data";
import { create } from "../../../API/courseAPI";
import AuthContext from "../../../context/authContext";

const Form = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [descriptions, setDescription] = useState("");
  const [startDate, setStartDate] = useState("1990-01-01");
  const [language, setLanguage] = useState("");
  const [framework, setFramework] = useState([]);
  const [position, setPosition] = useState([]);
  const [store, setStore] = useState(false);
  const context = useContext(AuthContext);

  const Submit = async () => {
    if (!name) {
      toast.warn("Vui lòng nhập tên khóa học!", {
        position: "top-right",
      });
    } else if (!startDate) {
      toast.warn("Vui lòng chọn ngày bắt đầu!", {
        position: "top-right",
      });
    } else if (!descriptions) {
      toast.warn("Vui lòng nhập thông tin khóa học!", {
        position: "top-right",
      });
    } else if (language.length === 0) {
      toast.warn("Vui lòng chọn ngôn ngữ!", {
        position: "top-right",
      });
    } else if (framework.length === 0) {
      toast.warn("Vui lòng chọn framework!", {
        position: "top-right",
      });
    } else if (position.length === 0) {
      toast.warn("Vui lòng chọn vị trí!", {
        position: "top-right",
      });
    } else {
      setStore(true);
      const body = {
        name: name,
        startDate: startDate,
        descriptions: descriptions,
        language: language,
        framework: framework,
        position: position,
        userId: context.user.id
      };
      const status = await create(body);
      if (status === 201) {
        toast.success("tạo khóa học thành công!", {
          position: "top-right",
        });
        setTimeout(() => {
          navigate("/courses");
        }, 2000);
      } else {
        setStore(false);
      }
    }
  };
  return (
    <div className="create-courses-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 form-line">
            <div className="form-group">
              <label htmlFor="coursesName">Khóa học</label>
              <input
                type="text"
                className="form-control"
                id="coursesName"
                placeholder="Nhập tên khóa học"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="startDate">Thời gian bắt đầu</label>
              <input
                type="date"
                className="form-control"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <br />
            <div className="form-group">
              <label>Ngôn ngữ</label>
              <Select
                closeMenuOnSelect={true}
                isMulti
                options={filterOptions[0].options}
                onChange={(choice) =>
                  setLanguage(choice.map((item) => item["value"]))
                }
              />
            </div>
            <br />
            <div className="form-group">
              <label>Framework</label>
              <Select
                closeMenuOnSelect={true}
                isMulti
                options={filterOptions[1].options}
                onChange={(choice) =>
                  setFramework(choice.map((item) => item["value"]))
                }
              />
            </div>
            <br />
            <div className="form-group">
              <label>Vị trí phù hợp</label>
              <Select
                closeMenuOnSelect={true}
                isMulti
                options={filterOptions[2].options}
                onChange={(choice) =>
                  setPosition(choice.map((item) => item["value"]))
                }
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="description"> Mô tả</label>
              <textarea
                className="form-control"
                id="description"
                placeholder="Nhập mô tả cho khóa học"
                rows="15"
                value={descriptions}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div></div>
          </div>
        </div>
        <button
          type="button"
          disabled={store ? true : ""}
          className="btn btn-default submit"
          onClick={() => Submit()}
        >
          <i className="fa fa-pencil" aria-hidden="true"></i> Lưu
        </button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
export default Form;
