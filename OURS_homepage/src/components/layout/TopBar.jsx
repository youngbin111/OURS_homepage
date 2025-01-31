import { Link } from "react-router-dom";
import styled from "styled-components";
import logoImage from "../../assets/icon/oursLogo.png";
import React, { useState } from "react";

// 네이비 상단바 스타일 (로그인 & 홈 버튼)
const NavyBar = styled.div`
  background-color: #071d49;
  color: white;
  padding: 10px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //position: relative;
  //top: 0;
  //left: 0;
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
  //position: relative;
  //top: 40px;
  //left: 0;
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
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: grey;
    color: #071d49;
  }
`;

// hover로 내려온 하위 메뉴
const SubMenuContainer = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px 0;
  justify-content: space-between;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

// 하위 메뉴 박스 스타일
const SubMenuBox = styled.div`
  background-color: white;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  width: 150px;
`;

// 하위 메뉴 제목 스타일
const SubMenuTitle = styled.div`
  color: ${(props) => (props.active ? "#071d49" : "grey")};
  font-weight: bold;
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
  transition: color 0.3s;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    color: #071d49;
  }
`;

// 하위 메뉴 아이템 스타일
const SubMenuItem = styled(Link)`
  color: ${(props) => (props.active ? "#071d49" : "grey")};
  margin-left: 10px;
  margin-bottom: 5px;
  transition: color 0.3s;
  font-size: 10px;
  text-align: left;
  text-decoration: none;
  display: block;
  &:hover {
    color: #071d49;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

// 메뉴 컨테이너
const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

// 하위 메뉴 데이터
const menuData = {
  "총학생회": [
    { name: "소개", path: "/council/intro" },
    { name: "소식", path: "/council/news" },
    { name: "조직도", path: "/council/organChart" },
    { name: "공약사항", path: "/council/promise" },
  ],
  "학생자치기구": [
    { name: "중앙운영위원회", path: "/association/centralUnion" },
    { name: "확대운영위원회", path: "/association/extendedUnion" },
  ],
  "복지": [
    { name: "제휴", path: "/welfare/partnership" },
    { name: "굿즈", path: "/welfare/goods" },
    { name: "버스 (미정)", path: "/welfare/bus" },
  ],
  "소통": [
    { name: "학생청원", path: "/communication/require" },
    { name: "설문조사", path: "/communication/survey" },
  ],
  "자료": [
    { name: "회의록", path: "/datum/meetings" },
    { name: "학생회비", path: "/datum/studentFee" },
    { name: "자치회비", path: "/datum/classFee" },
    { name: "동아리", path: "/datum/club" },
  ],
};

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
const WhiteBarComponent = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <WhiteBar>
      <MenuContainer
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setActiveMenu(null);
        }}
      >
        <Logo src={logoImage} alt="로고" />
        {Object.keys(menuData).map((menu) => (
          <MenuButton
            key={menu}
            onMouseEnter={() => setActiveMenu(menu)}
          >
            {menu}
          </MenuButton>
        ))}
        <SubMenuContainer visible={isHovering}>
          {Object.keys(menuData).map((menu) => (
            <SubMenuBox key={menu}>
              <SubMenuTitle active={activeMenu === menu}>{menu}</SubMenuTitle>
              {menuData[menu].map((subMenu, index) => (
                <SubMenuItem
                  key={index}
                  to={subMenu.path}//클릭하면 이동동
                  active={activeMenu === menu}
                >
                  • {subMenu.name}
                </SubMenuItem>
              ))}
            </SubMenuBox>
          ))}
        </SubMenuContainer>
      </MenuContainer>
    </WhiteBar>
  );
};


const TopBarComponent = () => (
  <>
    <NavyBarComponent />
    <WhiteBarComponent />
  </>
);

export default TopBarComponent;