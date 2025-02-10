import styled from "styled-components";
import backgroundImage from "../assets/mainpage_background.png"; // 이미지 경로 import
import TopBarComponent from "../components/layout/TopBar";
import Footer from "../components/layout/Footer";

const MainPageContainer = styled.div`
  position: relative;
  height: calc(100vh - 80px); /* 상단바 높이를 제외한 전체 화면 */
  width: 100vw;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  // 이거 배경 이미지 assets에 넣었더니 실행할때 경로를 못찾아서 일단 public폴더에 넣었음->해결
  background-size: 100% auto; //화면 꽉채우기
  //background-position: center;
  background-repeat: no-repeat; //화면 가운데에 이미지
  z-index: 1; //상단바 뒤에 이미지->굳이 필요 없을듯 밑에 배치함
`;

const MainPageContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  padding-top: 80px; 
`;

const MainPage = () => {
  return (
    <MainPageContainer>
      <TopBarComponent></TopBarComponent>
      <BackgroundImage />
      <MainPageContent></MainPageContent>
      <Footer></Footer>
    </MainPageContainer>
  );
};

export default MainPage;
