import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// 스타일링을 styled-components로 정의
const TopBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #003366;
  padding: 15px 20px;
  color: white;
  position: fixed;//상단에 위치
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  margin-right: 500px; /* 왼쪽으로 약간 이동 */
`;

const TopBarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const TopBarLogo = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const TopBarTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const TopBarRight = styled.div`
  display: flex;
  align-items: center;
`;

const TopBarLink = styled(Link)`
  margin-left: 20px;
  text-decoration: none;
  color: white;
  font-size: 16px;
  transition: color 0.3s;

  &:hover {
    color: #ffcc00;
  }
`;

const TopBarLogin = styled(Link)`
  margin-left: 20px;
  padding: 5px 10px;
  background-color: white;
  color: #003366;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #ffcc00;
    color: #003366;
  }
`;

const TopBarComponent = () => {
    return (
        <div>
          <TopBar>
            <TopBarLeft>
              <TopBarLogo src="/images/2_3.gif" alt="명지대학교 로고" />
              <TopBarTitle>명지대학교</TopBarTitle>
            </TopBarLeft>
            <TopBarRight>
              <TopBarLink to="https://www.naver.com/">총학생회</TopBarLink>
              <TopBarLink to="https://www.naver.com/">학생자치기구</TopBarLink>
              <TopBarLink to="https://www.naver.com/">복지사업</TopBarLink>
              <TopBarLink to="https://www.naver.com/">정보공개</TopBarLink>
              <TopBarLink to="https://www.naver.com/">커뮤니티</TopBarLink>
              <TopBarLogin to="https://www.naver.com/">로그인</TopBarLogin>
            </TopBarRight>
          </TopBar>
        </div>
      );
    };
export default TopBarComponent;
