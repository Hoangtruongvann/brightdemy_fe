import "./css/hoang.css";
import "./css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/partials/NotFound/NotFound";
import Courses from "./components/courses/list";
import Detail from "./components/courses/detail";
import Create from "./components/courses/create";
import QAndA from "./components/courses/Q&A";
import CourseUsers from "./components/courses/courseUsers";
import Login from "./components/authenticate/login";
import Register from "./components/authenticate/register";
import Profile from "./components/authenticate/profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Courses />} />
            <Route path="/courses">
              <Route index element={<Courses />} />
              <Route path="/courses/create" element={<Create />} />
              <Route path="/courses/detail/:id" element={<Detail />} />
              <Route path="/courses/QA/:id" element={<QAndA />} />
              <Route path="/courses/users/:id" element={<CourseUsers />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
