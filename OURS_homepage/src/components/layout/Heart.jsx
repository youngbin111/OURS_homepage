import React from "react";
import styled from "styled-components";

const HeartWrapper = styled.div`
  //flex: 1;
  //background-color: white;
  //padding: 20px;
  //display: flex;
  //flex-direction: column;
  
  position: absolute; // 위치를 절대값으로 설정 
  top: 60px; // 상단바 아래에 위치 
  left: 250px; // 사이드바 옆에 위치 
  right: 0; // 오른쪽 끝 
  bottom: 50px; // 하단바 위에 위치 

  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  
  // 내용이 많을 경우 스크롤을 생성 
  overflow-y: auto;
  
  // 전체 높이를 상단바(60px)와 하단바(50px)를 제외한 높이로 설정 
  min-height: calc(100vh - 110px);
`;

const Heart = ({ children }) => {
  return <HeartWrapper>{children}</HeartWrapper>;
};

export default Heart;
