import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-dark">
      <section className="d-flex   p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Liên lạc với chúng tôi ngay bây giờ :</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container-fluid text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem "></i>Brightdemy
              </h6>
              <p>
                Lĩnh vực: Công nghệ, giáo dục, lập trình. Brightdemy xây dựng và
                phát triển những sản phẩm mang lại giá trị cho doanh nghiệp.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Framework</h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Vị trí đào tạo</h6>
              <p>
                <a href="#!" className="text-reset">
                  Back-End Engineer
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Front-End Engineer
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Full Stack Engineer
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Data Engineer
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Liên hệ</h6>
              <p>
                <i className="fas fa-home me-3"></i> 227 đường Nguyễn Văn Cừ,
                phường 4, quận 5, Thành phố Hồ Chí Minh
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                contact@brightdemy.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4"
        style={{ "background-color": "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:{" "}
        <a className="text-reset fw-bold" href="#">
          Brightdemy
        </a>
      </div>
    </footer>
  );
};
export default Footer;
