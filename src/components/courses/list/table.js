import React, { useState } from "react";
import Item from "./item";
import Pagination from "../../partials/pagination/pagination";

const Table = () => {
  const [page, setPage] = useState(1);
  const courses = [
    {
      name: "HTML CSS Pro",
      descriptions:
        "Học HTML CSS bước khởi đầu trở thành nhà phát triển web chuyên nghiệp.",
    },
    {
      name: "JavaScript Pro",
      descriptions:
        "Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học",
    },
    {
      name: "ReactJS Pro",
      descriptions:
        "Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.",
    },
    {
      name: "Java Spring Boot",
      descriptions:
        "Khóa học Java Spring Boot từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với Java Spring Boot. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.",
    },
  ];
  return (
    <div className="col col-10 row">
      <div className="mb-2">
        <b className="fs-4"> Khóa học : </b>
        <button className="btn btn-secondary ">+</button>
      </div>
      {courses.map((course) => (
        <Item course={course} />
      ))}
      <Pagination page={page} setPage={setPage} pages={5} />
    </div>
  );
};
export default Table;
