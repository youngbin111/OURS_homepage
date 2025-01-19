import "./App.css";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Sidebar from "./components/ui/Sidebar";
import TopBarComponent from "./components/ui/TopBar";

function App() {
  const title = "총학생회";
  const data = {
    "총학생회 소개": "https://www.naver.com/",
    조직도: "https://www.naver.com/",
    공약사항: {
      "시설 부문": "https://www.naver.com/",
      "교육 부문": "https://www.naver.com/",
      "복지 부문": "https://www.naver.com/",
      "소통 부문": "https://www.naver.com/",
    },
  };

  return (
    <Router>
      <TopBarComponent />
      <Sidebar title={title} data={data} />
      <Routes>
        {/* 외부 링크로 변경 */}
        <Route
          path="/"
          element={<Link to="https://www.naver.com/">Home</Link>}
        />
        <Route
          path="/student-council"
          element={<Link to="https://www.naver.com/">총학생회</Link>}
        />
        <Route
          path="/student-organizations"
          element={<Link to="https://www.naver.com/">학생자치기구</Link>}
        />
        </Routes>
    </Router>
  );
}

export default App;
