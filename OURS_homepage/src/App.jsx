import "./App.css";
import { BrowserRouter as Router, Routes, Route,Link,useLocation } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar.jsx";
import TopBarComponent from "./components/layout/TopBar.jsx";
import MainPage from "./pages/main_page.jsx"; //메인페이지

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
      <AppContent data={data} title={title} />
    </Router>
  );
}

function AppContent({ data, title }) {
  const location = useLocation(); // 현재 경로 추적
  const hideSidebar = location.pathname === "/"; 
  return (
    <div>
      <TopBarComponent style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 2 }} />
      {/* 메인 페이지가 아닌 경우에만 사이드바를 렌더링 */}
      {!hideSidebar && <Sidebar title={title} data={data} style={{ position: "fixed", top: "60px", left: 0, zIndex: 1 }}  />}
      <Routes>
        {/* 기본 경로인 /에 MainPage 컴포넌트 설정 */}
        <Route path="/" element={<MainPage />} />
        
        {/* 사이드바가 포함된 다른 페이지들 */}
        <Route path="/student-council" element={<Link to="https://www.naver.com/">총학생회</Link>} />
        <Route path="/student-organizations" element={<Link to="https://www.naver.com/">학생자치기구</Link>} />
      </Routes>
    </div>
    
  );
}

export default App;
