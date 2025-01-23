import styled from "styled-components";

const StyledFooter = styled.footer`
  position: fixed; /* 화면에 고정 */
  bottom: 0; /* 화면의 최하단에 위치 */
  left: 0; /* 화면의 왼쪽 끝에 위치 */
  width: 100%; /* 화면 너비를 꽉 채움 */
  background-color: #373737; /* 배경색 설정 */
  color: white; /* 텍스트 색상 */
  text-align: center; /* 텍스트 중앙 정렬 */
  padding: 2px; /* 위아래 및 좌우 여백 */
  font-size: 13px; /* 글자 크기 */
  font-family: "Arial", sans-serif; /* 폰트 설정 */
  display: flex; /* 플렉스 박스 사용 */
  justify-content: space-between; /* 양쪽 끝으로 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  p {
    margin: 0; /* 기본 마진 제거 */
  }

  @media (max-width: 768px) {
    /* 작은 화면에서는 수직 정렬 */
    flex-direction: column;
    gap: 5px; /* 요소 간격 */
  }
`;

function Footer() {
  return (
    <StyledFooter aria-label="Main footer">
      <p>Mail : mju_ours@naver.com</p>
      <p>Copyright 2025.MYONGJI UNIVERSITY ALL Rights Reservered</p>
    </StyledFooter>
  );
}

export default Footer;
