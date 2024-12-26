import React from 'react';
import back from '../../../assets/icon5.png';
import No_img from '../../../assets/No-Image-Found.png';
import Header2 from '../../../components/Header2';
import { useNavigate } from "react-router-dom";

const Material_Compatibility_Theory = () => {
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
           Material Compatibility
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
            Material compatibility is a critical safety requirement when working with hydrogen, as it can interact with certain materials in ways that may lead to failure or accidents. Hydrogen can cause embrittlement in metals, making them brittle and prone to cracking, particularly under high pressure or low temperatures. This is especially true for materials like steel and aluminum, which may weaken over time when exposed to hydrogen. It is essential to use materials that are resistant to hydrogen-induced damage, such as specific alloys and composite materials, in pipelines, storage tanks, and other infrastructure. Proper material selection ensures the structural integrity of hydrogen systems, reducing the risk of leaks, failures, and potential explosions. Regular inspections and testing of materials used in hydrogen systems are also necessary to identify any signs of degradation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Material_Compatibility_Theory;