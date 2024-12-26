import React from 'react';
import back from '../../../assets/icon5.png';
import No_img from '../../../assets/No-Image-Found.png';
import Header2 from '../../../components/Header2';
import { useNavigate } from "react-router-dom";

const Hydrogen_As_Fuel_Theory = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <Header2 />
      <div className="w-[95%] max-w-[90%] space-y-[30px] mx-auto py-[30px]">
        <div className="flex items-center gap-3.5">
        <button
            onClick={() => navigate(-1)}
            className="bg-white rounded-full size-[30px] flex items-center justify-center border-[0.5px] border-[#05252433]"
          >
            <img src={back} alt="back" className="" />
          </button>
          <h3 className="text-[26px] line-height-[32px] font-medium">
           Hydrogen as Fuel
          </h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5">
          <img 
            src={No_img}
            alt="PEM Electrolysis" 
            className="mx-auto shadow-lg rounded-2xl" 
          />
          <div className="flex-col flex items-start space-y-3.5 lg:space-y-[26px] justify-center">
            <h3 className="text-[22px] md:text-3xl lg:text-[32px] line-height-[32px] font-semibold">
              Overview
            </h3>
            <p className="text-sm lg:text-base xl:text-lg line-height-[26px] font-normal">
             Hydrogen is gaining significant attention as a clean and efficient fuel source, primarily due to its ability to produce energy without emitting harmful pollutants. When used in fuel cells, hydrogen combines with oxygen to produce electricity, with the only byproduct being water vapor, making it an environmentally friendly alternative to conventional fuels. Hydrogen’s high energy density by weight makes it a powerful energy carrier, ideal for various applications, from transportation to industrial processes. It is particularly promising for sectors that are hard to electrify, such as heavy-duty transport, aviation, and shipping, where traditional battery-powered solutions may not be as effective.
             As a fuel, hydrogen can be used in two main forms: in hydrogen fuel cells, where it generates electricity through electrochemical reactions, and in internal combustion engines, where it burns to produce power. Moreover, hydrogen can be stored and transported in different ways, such as in compressed gas form, liquid form, or within chemical carriers like ammonia, enabling its use in a wide range of industries. One of its greatest advantages is its potential to decarbonize sectors that rely heavily on fossil fuels, reducing carbon emissions and supporting global efforts toward energy transition and sustainability. The development of infrastructure for hydrogen production, storage, and distribution, combined with the increasing focus on green hydrogen production methods, holds the promise of a clean energy future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hydrogen_As_Fuel_Theory;