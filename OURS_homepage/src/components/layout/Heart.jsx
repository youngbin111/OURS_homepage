import React from "react";
import styled from "styled-components";

const HeartWrapper = styled.div`
  flex: 1;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  //position: absolute; //특정위치로 지정


  //left: 550px;
  //top : 60px;
  //right : 0;
  //bottom: 80px; //주석
  //min-height: calc(100vh - 140px); //주석

  //overflow-y: auto;//스크롤 생성인데 또 이상하게 되면 주석

  //min-height: calc(100vh - 110px); /* 상단바(60px) + 하단바(50px) 제외 */
  //height: auto;
`;

const Heart = ({ children }) => {
  return <HeartWrapper>{children}</HeartWrapper>;
};

export default Heart;
