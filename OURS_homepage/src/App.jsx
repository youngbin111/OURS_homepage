import "./App.css";
import Sidebar from "./components/ui/Sidebar";

function App() {
  const title = "총학생회";
  const data = {
    "총학생회 소개": "https://www.naver.com/",
    조직도: "https://www.naver.com/",
    공약사항: {
      "시설 부문": "https://www.naver.com/",
      "교육 부문": "https://www.naver.com/",
      "복지 부문": "https://www.naver.com/",
      "소통 부문": "https://www.naver.com/",
    },
  };
  return (
    <>
      <Sidebar title={title} data={data} />
    </>
  );
}

export default App;
