//학생회 조직도
import React from 'react';
import Heart from '../../components/layout/Heart'; 
import organChartImage from '../../assets/organChart.png';

const OrganChart = () => {
  return (
    <Heart>
      <Title>조직도</Title>
      <img 
        src={organChartImage} 
        alt="학생회 조직도" 
        style={{ width: '100%', height: 'auto' }}  // 이미지 크기 조정 (웹사이트 크기에 맞게)
      />
    </Heart>
  );
};
  
  export default OrganChart;