//중앙운영위원회
import React from 'react';
import TopBarComponent from '../../components/layout/TopBar';
import SideBarComponent from '../../components/layout/Sidebar';
import FooterComponent from '../../components/layout/Footer';
import oursLogo from '../../assets/ours.png';
import withLogo from '../../assets/with.png';
import smartLogo from '../../assets/smart.png';
import nextLogo from '../../assets/next.png';
import motiveLogo from '../../assets/motive.png';
import camuLogo from '../../assets/camu.png';
import waveLogo from '../../assets/wave.png';

const studentOrganizations = [
  {
    name: "총학생회",
    description: "명지대학교 자연캠퍼스 제52대 OURS 총학생회",
    image: oursLogo,
    instagram: "https://www.instagram.com/ours.mju/"
  },
  {
    name: "화학·생명과학대학",
    description: "명지대학교 제1대 We:TH 화학·생명과학대학",
    image: withLogo,
    instagram: "https://www.instagram.com/with.mju/"
  },
  {
    name: "스마트시스템공과대학",
    description: "명지대학교 자연캠퍼스 제1대 신(信) 공과대 학생회",
    image: smartLogo,
    instagram: "https://www.instagram.com/smart.mju/"
  },
  {
    name: "반도체·ICT대학",
    description: "명지대학교 제1대 반도체·ICT 대학 NeXT 학생회",
    image: nextLogo,
    instagram: "https://www.instagram.com/next.mju/"
  },
  {
    name: "스포츠예술대학",
    description: "명지대학교 자연캠퍼스 제1대 스포츠예술대학 학생회 모티브",
    image: motiveLogo,
    instagram: "https://www.instagram.com/motive.mju/"
  },
  {
    name: "건축대학",
    description: "2025 제3대 건축대학 'EVEN' X 제7대 건축학부 '악보' X 제1대 글로벌디자인학부 '세움'",
    image: camuLogo,
    instagram: "https://www.instagram.com/camu.mju/"
  },
  {
    name: "총동아리연합회",
    description: "명지대학교 자연캠퍼스 WAVE 동아리연합회",
    image: waveLogo,
    instagram: "https://www.instagram.com/wave.mju/"
  }
];

const CentralUnion = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBarComponent />
      <div className="flex flex-1">
        <SideBarComponent />
        <main className="flex-1 p-8 bg-gray-100">
          <h1 className="text-3xl font-bold mb-6">중앙운영위원회</h1>
          {studentOrganizations.map((org, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-2xl font-semibold mb-2">{org.name}</h2>
              <p className="mb-4">{org.description}</p>
              <img src={org.image} alt={org.name} className="w-32 h-32 object-contain mb-4" />
              <a href={org.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Instagram 바로가기
              </a>
            </div>
          ))}
        </main>
      </div>
      <FooterComponent />
    </div>
  );
};

export default CentralUnion;