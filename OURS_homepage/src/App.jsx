import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/main_page.jsx"; // 메인 페이지
import NotFound from "./pages/NotFound.jsx";
import "./styles/global.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
// function App() {
//   const title = "총학생회";
//   const data = {
//     "총학생회 소개": "/student-council",
//     조직도: "/organization-chart",
//     공약사항: "/promises",
//   };

//   return (
//     <Router>
//       <AppContent data={data} title={title} />
//     </Router>
//   );
// }

// function AppContent({ data, title }) {
//   const location = useLocation(); // 현재 경로 추적
//   const hideSidebar = location.pathname === "/";

//   return (
//     <div>
//       <TopBarComponent
//         style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 2 }}
//       />
//       {/* 메인 페이지와 다른 경로에서 사이드바 및 컨텐츠 표시 */}
//       {!hideSidebar && (
//         <MainContainer sidebarTitle={title} sidebarData={data} />
//       )}
//       <Routes>
//         {/* 기본 경로 */}
//         <Route path="/" element={<MainPage />} />
//         {/* 학생회 관련 페이지 */}
//         <Route
//           path="/student-council"
//           element={<div>총학생회 소개 페이지입니다.</div>}
//         />
//         <Route
//           path="/organization-chart"
//           element={<div>조직도 페이지입니다.</div>}
//         />
//         <Route path="/promises" element={<div>공약사항 페이지입니다.</div>} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

export default App;
