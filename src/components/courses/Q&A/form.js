import React, { useState, useContext } from "react";
import AuthContext from "../../../context/authContext";
import { ToastContainer, toast } from "react-toastify";
import { createComment } from "../../../API/commentAPI.JS";

const Form = ({ coursesID }) => {
  const context = useContext(AuthContext);
  const [content, setContent] = useState("");
  const submit = async () => {
    if (!content) {
      toast.warning("Vui lòng nội dung!", {
        position: "top-right",
      });
    } else {
      const resp = await createComment(context.user.id, coursesID, content);
      if (resp) {
        toast.success("Thêm bình luận thành công!", {
          position: "top-right",
        });
        setContent("");
      } else {
        toast.error("Lỗi! Vui lòng thử lại sau!", {
          position: "top-right",
        });
        setContent("");
      }
    }
  };
  return (
    <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
      <form id="algin-form">
        <div className="form-group">
          <h4>Bình luận</h4>
          <label htmlFor="content">Nội dung</label>
          <textarea
            name="content"
            id=""
            placeholder="Câu hỏi/Câu trả lời của bạn là ?"
            cols="30"
            rows="5"
            className="form-control bt-2"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <button
            type="button"
            id="post"
            className="btn btn-primary mt-2 pl-4 pr-4 "
            onClick={() => submit()}
          >
            Gửi
          </button>
        </div>
      </form>
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
