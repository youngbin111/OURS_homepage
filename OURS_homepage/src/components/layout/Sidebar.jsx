import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  width: 250px; /* Wrapper 너비 */
  height: 500px; /* Wrapper 높이 */
  position: fixed; /* 화면 왼쪽에 고정 */
  left: 0;
  top: 50%; /* 화면의 세로 가운데 정렬 */
  transform: translateY(-50%); /* 세로 정렬을 정확히 가운데로 */
  background-color: transparent; /* Wrapper 자체는 빈 여백처럼 보이게 설정 */
`;

const SidebarContainer = styled.div`
  width: 250px; /* Sidebar 너비 */
  height: 500px; /* Sidebar 높이 */
  position: absolute; /* Wrapper 기준으로 Sidebar 위치 조정 */
  left: 100%; /* Wrapper의 오른쪽에 고정 */
  top: 0;
  background-color: #ffffff;

  /* 미디어 쿼리로 화면 크기에 따라 여백 조정 */
  @media (max-width: 1200px) {
    left: calc(100% - 250px); /* Wrapper의 위치를 줄임 */
  }

  @media (max-width: 768px) {
    left: calc(100% - 250px); /* 더 작은 화면에서 */
  }

  @media (max-width: 480px) {
    left: calc(100% - 10px); /* 모바일 화면에서 */
  }
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%; /* Sidebar의 너비에 맞게 */
  box-sizing: border-box;
`;

const SidebarList = styled.li`
  color: #53565a;
  background-color: #f4f4f4; /* 기본 색상 */
  box-sizing: border-box;
  padding: 10px;
  margin: 0;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0; /* Hover 효과 */
  }
`;

const MenuTitle = styled.h3`
  cursor: pointer;
  margin: 0;
  padding: 10px;
  background-color: #071d49; /* 헤더 배경색 */
  color: #fff; /* 텍스트 색상 */
  text-align: center; /* 텍스트 중앙 정렬 */
  box-sizing: border-box;
  &:hover {
    background-color: #0a2a6e;
  }
`;

const MainTitle = styled.h2`
  font-weight: 500;
  color: #071d49;
  margin: 0;
  padding: 10px;
  border-bottom: 2px solid #071d49; /* 구분선 추가 */
`;

const ListContainer = styled.div`
  max-height: ${(props) => (props.isOpen ? "300px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  width: 100%; /* Sidebar 너비에 맞게 */
  box-sizing: border-box;
`;

function Sidebar({ title, data }) {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menuName) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
  };

  const handleRedirect = (url) => {
    window.location.href = url; // 링크 이동 처리
  };

  return (
    <Wrapper>
      <SidebarContainer>
        <MainTitle>{title}</MainTitle>

        {Object.entries(data).map(([menuName, listItems], menuIndex) => (
          <SidebarMenu key={menuIndex}>
            {typeof listItems === "string" ? (
              // 링크로 바로 이동하는 메뉴
              <MenuTitle onClick={() => handleRedirect(listItems)}>
                {menuName}
              </MenuTitle>
            ) : (
              <>
                {/* 리스트를 포함하는 메뉴 */}
                <MenuTitle onClick={() => toggleMenu(menuName)}>
                  {menuName}
                </MenuTitle>
                <ListContainer isOpen={openMenus[menuName]}>
                  {Object.entries(listItems).map(
                    ([listName, url], listIndex) => (
                      <SidebarList
                        key={listIndex}
                        onClick={() => handleRedirect(url)}
                      >
                        {listName}
                      </SidebarList>
                    )
                  )}
                </ListContainer>
              </>
            )}
          </SidebarMenu>
        ))}
      </SidebarContainer>
    </Wrapper>
  );
}

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default Sidebar;
