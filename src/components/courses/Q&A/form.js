import React from "react";

const Form = () => {
  return (
    <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
      <form id="algin-form">
        <div className="form-group">
          <h4>Bình luận</h4>
          <label htmlFor="message">Nội dung</label>
          <textarea
            name="msg"
            id=""
            placeholder="Câu hỏi/Câu trả lời của bạn là ?"
            cols="30"
            rows="5"
            className="form-control bt-2"
          ></textarea>
        </div>
        <div className="form-group">
          <button
            type="button"
            id="post"
            className="btn btn-primary mt-2 pl-4 pr-4 "
          >
            Gửi
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
