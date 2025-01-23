import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SidebarContainer = styled.div`
  width: 250px;
  padding: 20px;
  background-color: #f9f9f9;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
`;

const SidebarList = styled.li`
  color: #53565a;
  background-color: #c8c9c7;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin: 0;
  cursor: pointer;
`;

const MenuTitle = styled.h3`
  cursor: pointer;
  margin: 0;
  padding: 10px;
  background-color: #071d49;
  width: 100%;
  box-sizing: border-box;
  color: #fff;
  &:hover {
    background-color: #0a2a6e;
  }
`;

const MainTitle = styled.h2`
  font-weight: 500;
  color: #071d49;
`;

const ListContainer = styled.div`
  max-height: ${(props) => (props.isOpen ? "300px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  width: 100%;
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
                {Object.entries(listItems).map(([listName, url], listIndex) => (
                  <SidebarList
                    key={listIndex}
                    onClick={() => handleRedirect(url)}
                  >
                    {listName}
                  </SidebarList>
                ))}
              </ListContainer>
            </>
          )}
        </SidebarMenu>
      ))}
    </SidebarContainer>
  );
}

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default Sidebar;
