import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../../context/authContext";
import Cookies from "universal-cookie";

const navOptions = [
  { id: 1, name: "Trang chủ", href: "/", role: "ALL" },
  { id: 2, name: "Khóa học", href: "/courses", role: "ALL" },
  { id: 3, name: "Quản lý", href: "/", role: "ALL" },
  { id: 4, name: "Về chúng tôi", href: "/", role: "ALL" },
  { id: 5, name: "Danh sách người dùng", href: "/list-users", role: "ADMIN" },
];

const Header = ({ navID }) => {
  const cookies = new Cookies();
  const context = useContext(AuthContext);

  const [nav, setNav] = useState(navID);
  const [openDropdown, setOpenDropdown] = useState(false);
  const navigation = useNavigate();
  const changeNav = (id, href) => {
    setNav(id);
    navigation(href);
  };
  const logout = () => {
    cookies.set("accessToken", "");
    context.setAuthenticate(false);
    navigation("/login");
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light p-3 "
      style={{ backgroundColor: "#e3f2fd" }}
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
        <a href="/">
          <img
            className="m-2"
            src="https://img.icons8.com/ios-glyphs/30/228BE6/student-center.png"
            alt="student-img"
          />
        </a>
        <a className="navbar-brand font-weight-bold" href="/">
          Brightdemy
        </a>
        {context.authenticate && (
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
            {navOptions.map((item) => {
              if (
                item.role === "ALL" ||
                (context.role && item.role === context.role.name)
              )
                return (
                  <li
                    className="nav-item"
                    onClick={() => changeNav(item.id, item.href)}
                    key={item.id}
                  >
                    <a
                      className={
                        item.id === nav
                          ? "nav-link active text-primary fw-bold"
                          : "nav-link"
                      }
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </li>
                );
            })}
          </ul>
        )}

        {context.authenticate && (
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0 d-flex align-items-center ms-auto">
            <li className="nav-item">
              <form className="form-inline my-2 my-lg-0 d-flex align-items-center">
                <img
                  src="https://img.icons8.com/material-outlined/24/737373/search.png"
                  className="m-1"
                  alt="search-img"
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
              <Link className="nav-link" to="/profile">
                {context.user ? context.user.username : "Hồ sơ"}
              </Link>
            </li>
            <li className="nav-item ml-2">
              <div className="dropdown">
                <button
                  className={`btn  dropdown-toggle ${openDropdown && "show"}`}
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  style={{ border: "none" }}
                  onClick={() => setOpenDropdown(!openDropdown)}
                >
                  <img
                    className="nav-item mr-2"
                    src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/40/737373/external-user-interface-kiranshastry-lineal-kiranshastry.png"
                    alt="profile-img"
                  />
                </button>
                <ul
                  className={`dropdown-menu dropdown-menu-end ${
                    openDropdown && "show"
                  }`}
                  aria-labelledby="dropdownMenuButton1"
                  style={{ right: "0" }}
                >
                  <li className="dropdown-item" onClick={() => logout()}>
                    Đăng xuất
                  </li>
                  {/* <li>
                    <Link className="dropdown-item" to="/login">
                      Đăng nhập
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/register">
                      Đăng ký
                    </Link>
                  </li> */}
                </ul>
              </div>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
export default Header;
