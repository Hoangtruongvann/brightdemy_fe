import React, { useState } from "react";
import Cookies from "universal-cookie";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { login } from "../../API/authenAPI";
import Footer from "../partials/footer/footer";
import Header from "../partials/header/header";

const Login = () => {
  const cookies = new Cookies();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const negative = useNavigate();
  const submit = async () => {
    if (username && password) {
      const resp = await login(username, password);
      if (resp) {
        cookies.set("accessToken", resp.data.accessToken);
        negative("/");
      } else
        toast.error(
          "Vui lòng đăng nhập lại! Thông tin đăng nhập chưa chính xác!",
          {
            position: "top-right",
          }
        );
    } else {
      toast.warning("Vui lòng nhập đầy đủ thông tin!", {
        position: "top-right",
      });
    }
  };
  return (
    <>
      <Header />
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
                  <p className="text-center fw-bold mx-3 mb-0">Đăng nhập</p>
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="username">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="form-control form-control-lg"
                    placeholder="Nhập username"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label" hmtlFor="password">
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-lg"
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    <label className="form-check-label" hmtlFor="form2Example3">
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
                    onClick={() => submit()}
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

        <Footer />
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
      </section>
    </>
  );
};
export default Login;
