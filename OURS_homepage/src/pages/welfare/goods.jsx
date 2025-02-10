//복지_굿즈 페이지
import React from 'react';
import TopBarComponent from '../../components/layout/TopBar';
import SideBarComponent from '../../components/layout/Sidebar';
import FooterComponent from '../../components/layout/Footer';

const goodsList = [
  {
    name: 'OURS 텀블러',
    price: '15,000원',
    image: require('../../assets/goods/tumbler.png'),
  },
  {
    name: 'OURS 에코백',
    price: '20,000원',
    image: require('../../assets/goods/ecobag.png'),
  },
  {
    name: 'OURS 머그컵',
    price: '10,000원',
    image: require('../../assets/goods/mug.png'),
  },
  // 더 많은 굿즈 추가 가능
];

const Goods = () => {
  return (
    <div className="flex">
      <SideBarComponent />
      <div className="flex-1 flex flex-col min-h-screen">
        <TopBarComponent />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">굿즈</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {goodsList.map((goods, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <img 
                  src={goods.image} 
                  alt={goods.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{goods.name}</h2>
                  <p className="text-gray-600">{goods.price}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
        <FooterComponent />
      </div>
    </div>
  );
};

export default Goods;
