import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom" style={{ height: "100%" }}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="SampleImage"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Đăng ký</p>
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3">
                    Địa chỉ Email
                  </label>
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Nhập email"
                  />
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label" for="form3Example4">
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Nhập mật khẩu"
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" for="form2Example3">
                      Nhớ tài khoản
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Quên mật khẩu
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Đăng nhập
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Bạn chưa có tài khoản?{" "}
                    <Link to="/register" className="link-danger">
                      Đăng ký
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
          </div>
          <div>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
