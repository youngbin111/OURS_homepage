import React from 'react';
import TopBarComponent from '../../components/layout/TopBar';
import SidebarComponent from '../../components/layout/Sidebar';
import FooterComponent from '../../components/layout/Footer';

const partnershipData = [
  { category: '최근', partners: ['업체 1'] },
  { category: '뷰티샵', partners: ['업체 2'] },
  { category: '카페등 아래', partners: ['업체 3', '업체 4', '업체 5'] },
  { category: '의류', partners: ['업체 6', '업체 7'] },
  { category: '음식점', partners: ['업체 8', '업체 9'] },
  { category: '스포츠', partners: ['업체 10'] },
  { category: '병원', partners: ['업체 11', '업체 12'] },
  { category: '헤어샵', partners: ['업체 13'] },
  { category: '기타', partners: ['업체 14', '업체 15'] },
  { category: '프리미엄', partners: ['업체 16', '업체 17'] },
];

const Partnership = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBarComponent />
      <div className="flex flex-1">
        <SidebarComponent />
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-4">제휴</h1>
          {partnershipData.map((categoryData, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-semibold mb-2">{categoryData.category}</h2>
              <div className="grid grid-cols-3 gap-4">
                {categoryData.partners.map((partner, idx) => (
                  <div key={idx} className="bg-gray-200 h-32 flex items-center justify-center">
                    <span>{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Partnership;