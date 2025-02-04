import styled from "styled-components";
import Heart from "./Heart";
import Sidebar from "./Sidebar";

const Container = styled.div`
  max-width: 1200px; /* 최대 너비 설정 */
  margin: 0 auto; /* 좌우 중앙 정렬 */
  padding: 0 10px; /* 여백 최소 크기 설정 */
  display: flex; /* 플렉스 레이아웃 */
  gap: 20px; /* 사이드바와 콘텐츠 사이 간격 */

  @media (max-width: 768px) {
    flex-direction: column; /* 세로 정렬 */
    padding: 0 10px; /* 여백 유지 */
  }
`;

const SidebarWrapper = styled.div`
  flex: 1; /* 사이드바 너비 */
  max-width: 300px; /* 최대 너비 */

  @media (max-width: 768px) {
    max-width: 100%; /* 모바일에서는 전체 너비 사용 */
    margin-bottom: 20px; /* 메인 콘텐츠와 간격 */
  }
`;

const MainContent = styled.main`
  flex: 3; /* 메인 콘텐츠 너비 */
`;

const MainContainer = ({ sidebarTitle, sidebarData }) => {
  return (
    <Container>
      <SidebarWrapper>
        <Sidebar title={sidebarTitle} data={sidebarData} />
      </SidebarWrapper>
      <MainContent>
        <Heart></Heart>
      </MainContent>
    </Container>
  );
};

export default MainContainer;
