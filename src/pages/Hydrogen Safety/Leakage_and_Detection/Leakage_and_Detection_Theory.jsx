import React from 'react';
import back from '../../../assets/icon5.png';
import No_img from '../../../assets/No-Image-Found.png';
import Header2 from '../../../components/Header2';
import { useNavigate } from "react-router-dom";

const Leakage_and_Detection_Theory = () => {
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
          Leakage and Detection
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
            Hydrogen is a colorless, odorless gas, which makes detecting leaks a significant challenge. Even small leaks can pose serious safety risks due to hydrogen's flammability and the potential for explosions. Hydrogen molecules are also smaller and lighter than other gases, allowing them to escape through minute openings or cracks in storage and transportation systems. To ensure safety, it is crucial to implement advanced leak detection technologies, such as sensors that can detect hydrogen concentrations in the air. These sensors should be placed at strategic locations, including refueling stations and storage areas, to provide early warnings of potential leaks. Regular maintenance and inspection of hydrogen systems are equally important to identify and prevent leakage, ensuring safe operations and minimizing the risk of accidents.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leakage_and_Detection_Theory;