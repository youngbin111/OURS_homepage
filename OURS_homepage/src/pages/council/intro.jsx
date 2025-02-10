import TopBarComponent from "../../components/layout/TopBar";
import Footer from "../../components/layout/Footer";
import MainContainer from "../../components/layout/MainContainer";

//학생회 소개

const Intro = () => {
  const title = "총학생회";
  const data = {
    소개: "/student-council",
    조직도: "/organization-chart",
    공약사항: "/promises",
  };
  return (
    <>
      <TopBarComponent />
      <MainContainer sidebarTitle={title} sidebarData={data} />
      <Footer />
    </>
  );
};

export default Intro;
