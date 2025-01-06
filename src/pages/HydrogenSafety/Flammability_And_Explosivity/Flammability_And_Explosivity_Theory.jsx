import React from 'react';
import back from '../../../assets/icon5.png';
import No_img from '../../../assets/No-Image-Found.png';
import Header2 from '../../../components/header2/Header2';
import { useNavigate } from "react-router-dom";

const Flammability_And_Explosivity_Theory = () => {
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
          Flammability and Explosivity 
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
            Hydrogen is highly flammable and can be explosive under certain conditions, making its safe handling a critical concern. It has a wide flammability range, meaning it can ignite in concentrations as low as 4% and as high as 75% in air. Hydrogen's low ignition energy and high diffusivity mean that it can easily form explosive mixtures with air, especially in confined spaces. Additionally, hydrogen flames are almost invisible in daylight, which increases the risk of accidental ignition. Due to these characteristics, it is essential to have proper ventilation, leak detection systems, and safety protocols in place when working with or storing hydrogen. Understanding its flammability and explosivity risks is fundamental to preventing accidents and ensuring safe usage in both industrial and transport applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flammability_And_Explosivity_Theory;