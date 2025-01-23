import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoImage from "../../assets/icon/oursLogo.png";

// 네이비 상단바 스타일 (로그인 & 홈 버튼)
const NavyBar = styled.div`
  background-color: #071d49;
  color: white;
  padding: 10px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

// 흰색 상단바 스타일 (메뉴 & 로고)
const WhiteBar = styled.div`
  background-color: white;
  padding: 9px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 40px; //네이비바 바로 밑에에
  left: 0;
  width: 100%;
  z-index: 999;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

// 네이비 바 버튼 스타일 (Login, Home)
const NavyButton = styled(Link)`
  margin-left: 15px;
  padding: 8px 15px;
  background-color: #071d49;
  color: white;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  //border: 1px solid white;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: grey;
    color: #071d49;
  }
`;

// 로고 스타일
const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
`;

// 메뉴 버튼 스타일
const MenuButton = styled(Link)`
  background-color: white;
  color: grey;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 14px;
  text-decoration: none;
  font-weight: 500;
  border: 1px solid grey;
  margin: 0 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: grey;
    color: #071d49;
  }
`;

// 메뉴 컨테이너
const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

// 네이비 바 컴포넌트
const NavyBarComponent = () => (
  <NavyBar>
    <div>명지대학교</div>
    <div>
      <NavyButton to="/login">Login</NavyButton>
      <NavyButton to="/">Home</NavyButton>
    </div>
  </NavyBar>
);

// 흰색 바 컴포넌트
const WhiteBarComponent = () => (
  <WhiteBar>
    <MenuContainer>
      <Logo src={logoImage} alt="로고" />
      <MenuButton to="/student-council">총학생회</MenuButton>
      <MenuButton to="/student-organizations">학생자치기구</MenuButton>
      <MenuButton to="/welfare">복지사업</MenuButton>
      <MenuButton to="/info">정보공개</MenuButton>
      <MenuButton to="/community">커뮤니티</MenuButton>
    </MenuContainer>
  </WhiteBar>
);

const TopBarComponent = () => (
  <>
    <NavyBarComponent />
    <WhiteBarComponent />
  </>
);

export default TopBarComponent;

