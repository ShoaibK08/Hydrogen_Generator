import React from 'react';
import back from '../../../assets/icon5.png';
import No_img from '../../../assets/No-Image-Found.png';
import Header2 from '../../../components/Header2';
import { useNavigate } from "react-router-dom";

const Intro_To_Hydrogen_Theory = () => {
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
          Introduction to Hydrogen
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
            Hydrogen is the most abundant element in the universe, making up approximately 75% of all matter by mass. As a colorless, odorless, and highly versatile gas, it holds immense potential as a clean energy carrier. Unlike traditional fuels, hydrogen can produce energy without releasing harmful pollutants or greenhouse gases when used in fuel cells or combustion processes.
            Hydrogen exists naturally in water (H₂O), hydrocarbons, and organic matter, but it must be extracted since it rarely occurs in its pure form. It is commonly produced through methods like steam methane reforming, electrolysis of water, and biomass processing. These production methods categorize hydrogen into different types based on their environmental impact: grey hydrogen (from fossil fuels, with emissions), blue hydrogen (from fossil fuels, with carbon capture), and green hydrogen (from renewable energy sources).
            As a fuel, hydrogen is valued for its high energy density by weight and its ability to power applications ranging from vehicles to industrial processes. It can store energy for long periods, enabling the integration of renewable energy sources like wind and solar into the energy grid.
            Hydrogen is also central to efforts to achieve global carbon neutrality. Its diverse applications, including use in transportation, power generation, and industrial processes, make it a cornerstone of the energy transition. By leveraging hydrogen, industries can reduce dependence on fossil fuels, cut emissions, and build a sustainable energy future.
           </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro_To_Hydrogen_Theory;