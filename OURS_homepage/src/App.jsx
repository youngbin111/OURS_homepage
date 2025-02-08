import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route,Link,useLocation } from "react-router-dom";
import Sidebar from "./components/layout/SideBar.jsx";
import TopBarComponent from "./components/layout/TopBar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Heart from "./components/layout/Heart.jsx";
import MainPage from "./pages/main_page.jsx"; //메인페이지

import Intro from "./pages/council/intro.jsx"; // 총학생회 소개 페이지
import News from "./pages/council/news.jsx"; // 소식 페이지
import OrganChart from "./pages/council/organChart.jsx"; // 조직도 페이지
import Promise from "./pages/council/promise.jsx"; // 공약사항 페이지

import CentralUnion from "./pages/association/centralUnion.jsx"; // 중앙운영위원회 페이지
import ExtendedUnion from "./pages/association/extendedUnion.jsx"; // 확대운영위원회 페이지

import Partnership from "./pages/welfare/partnership.jsx"; // 제휴 페이지
import Goods from "./pages/welfare/goods.jsx"; // 굿즈 페이지
import Bus from "./pages/welfare/bus.jsx";//버스펭ㅣ지

import Require from "./pages/communication/require.jsx";//청원
import Survey from "./pages/communication/survey.jsx";//설문조사

import Meetings from "./pages/datum/meetings.jsx";//회의록
import StudentFee from "./pages/datum/studentFee.jsx";//총학생회비
import ClassFee from "./pages/datum/classFee.jsx";//자치회비(과학생회비)
import Club from "./pages/datum/club.jsx";//동아리리
import MainContainer from "./components/layout/MainContainer";


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
  const hideMainContainer = location.pathname === "/";

  return (
    <div>
      <TopBarComponent />
      {/* 메인 페이지가 아닌 경우에만 사이드바를 렌더링 */}
      
      {!hideSidebar && (
        <MainContainer sidebarTitle={title} sidebarData={data} />
      )}
      {/*{!hideMainContainer && <Heart>*/}
      <Routes>
        {/* 기본 경로인 /에 MainPage 컴포넌트 설정 */}
        <Route path="/" element={<MainPage />} />
        
        {/* 각 메뉴 항목에 대한 Route 설정 */}
        <Route path="/council/intro" element={<Intro />} />
        <Route path="/council/news" element={<News />} />
        <Route path="/council/organChart" element={<OrganChart />} />
        <Route path="/council/promise" element={<Promise />} />

        <Route path="/association/centralUnion" element={<CentralUnion />} />
        <Route path="/association/extendedUnion" element={<ExtendedUnion />} />

        <Route path="/welfare/partnership" element={<Partnership />} />
        <Route path="/welfare/goods" element={<Goods />} />
        <Route path="/welfare/bus" element={<Bus />} />

        <Route path="/communication/require" element={<Require />} />
        <Route path="/communication/survey" element={<Survey />} />

        <Route path="/datum/meetings" element={<Meetings />} />
        <Route path="/datum/studentFee" element={<StudentFee />} />
        <Route path="/datum/classFee" element={<ClassFee />} />
        <Route path="/datum/club" element={<Club />} />

      </Routes>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
