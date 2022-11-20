import React, { useState } from "react";

const Header = () => {
  const navOptions = [
    { id: 1, name: "Trang chủ" },
    { id: 2, name: "Khóa học" },
    { id: 3, name: "Quản lý" },
    { id: 4, name: "Về chúng tôi" },
  ];
  const [nav, setNav] = useState(1);
  const changeNav = (id) => {
    setNav(id);
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light p-3 "
      style={{ "background-color": "#e3f2fd" }}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a href="#">
          <img
            className="m-2"
            src="https://img.icons8.com/ios-glyphs/30/228BE6/student-center.png"
          />
        </a>
        <a className="navbar-brand font-weight-bold" href="#">
          Brightdemy
        </a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
          {navOptions.map((item) => (
            <li className="nav-item" onClick={() => changeNav(item.id)}>
              <a
                className={
                  item.id === nav
                    ? "nav-link active text-primary fw-bold"
                    : "nav-link"
                }
                href="#"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <ul className="navbar-nav ml-auto mt-2 mt-lg-0 d-flex align-items-center ms-auto">
          <li className="nav-item">
            <form className="form-inline my-2 my-lg-0 d-flex align-items-center">
              <img
                src="https://img.icons8.com/material-outlined/24/737373/search.png"
                className="m-1"
              />
              <input
                className="form-control mr-sm-2 rounded-pill"
                type="search"
                placeholder=" Search"
                aria-label="Search"
              />
            </form>
          </li>
          <li className="nav-item ml-2">
            <a className="nav-link" href="#">
              My profile
            </a>
          </li>
          <li className="nav-item ml-2">
            <img
              className="nav-item mr-2"
              src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/40/737373/external-user-interface-kiranshastry-lineal-kiranshastry.png"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
