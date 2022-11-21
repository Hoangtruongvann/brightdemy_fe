import "./css/hoang.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/partials/header/header";
import Footer from "./components/partials/footer/footer";
import NotFound from "./components/partials/NotFound/NotFound";
import Courses from "./components/courses/list";
import Detail from "./components/courses/detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Courses />} />
            <Route path="/courses">
              <Route index element={<Courses />} />
              <Route path="/courses/detail/:id" element={<Detail />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
