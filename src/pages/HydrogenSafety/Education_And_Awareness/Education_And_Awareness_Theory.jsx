import React from 'react';
import back from '../../../assets/icon5.png';
import No_img from '../../../assets/No-Image-Found.png';
import Header2 from '../../../components/header2/Header2';
import { useNavigate } from "react-router-dom";

const Education_And_Awareness_Theory = () => {
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
          	Education and Awareness
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
            Education and awareness are vital components of hydrogen safety, ensuring that all personnel involved in hydrogen production, storage, transport, and usage are well-informed about its risks and safety protocols. Proper training programs should focus on the unique hazards associated with hydrogen, such as its flammability, potential for leaks, and material compatibility issues. Raising awareness among workers, emergency responders, and the general public about safe practices helps prevent accidents and improves overall safety. Regular safety drills, workshops, and up-to-date training materials are necessary to keep knowledge current. Promoting a culture of safety and understanding is crucial in minimizing risks and fostering a safe environment for hydrogen technologies to thrive.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education_And_Awareness_Theory;