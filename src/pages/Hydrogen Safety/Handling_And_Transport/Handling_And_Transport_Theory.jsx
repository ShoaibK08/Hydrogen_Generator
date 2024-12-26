import React from 'react';
import back from '../../../assets/icon5.png';
import No_img from '../../../assets/No-Image-Found.png';
import Header2 from '../../../components/Header2';
import { useNavigate } from "react-router-dom";

const Handling_And_Transport_Theory = () => {
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
            Handling and Transport
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
            Safe handling and transport of hydrogen are essential to prevent accidents, leaks, and explosions. Hydrogen must be stored and transported under controlled conditions, typically in high-pressure cylinders or as liquid hydrogen, to ensure safety. Proper protocols for handling include using non-sparking tools, grounding equipment to prevent static discharge, and ensuring adequate ventilation to avoid the accumulation of hydrogen gas in confined spaces. Transporting hydrogen, whether by pipeline, truck, or tanker, requires specialized containers designed to withstand extreme pressure and temperatures. Transport routes must also be carefully planned to minimize the risk of accidents, with safety measures in place to detect leaks quickly. Training personnel on hydrogen safety practices is crucial to ensure the safe and efficient handling and transport of this highly flammable gas.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handling_And_Transport_Theory;