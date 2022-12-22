import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../partials/header/header";
import Footer from "../../partials/footer/footer";
import User from "./user";
import { courses } from "../../../TestData/data";

const CourseUsers = () => {
  const { id } = useParams();
  const course = courses[id];
  return (
    <div>
      <Header navID={2} />

      <div className="container table-user vh-100">
        <h3 className="mt-4 mb-4">
          <span className="text-primary">{course.name}</span>
        </h3>
        <div className="row">
          <div className="col-lg-12">
            <div className="main-box clearfix">
              <div className="table-responsive">
                <table className="table user-list">
                  <thead>
                    <tr className="bold">
                      <th>
                        <span>Tài khoản</span>
                      </th>
                      <th>
                        <span>Ngày đăng kí</span>
                      </th>
                      <th className="text-center">
                        <span>Trạng thái</span>
                      </th>
                      <th>
                        <span>Email</span>
                      </th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CourseUsers;
