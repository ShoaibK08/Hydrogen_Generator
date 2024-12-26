import back from '../../../assets/icon5.png';
import No_img from '../../../assets/No-Image-Found.png';
import Header2 from '../../../components/Header2.jsx';
import { useNavigate } from 'react-router-dom';

const Steam_Methane_Reforming_Theory = () => {
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
          	Steam Methane Reforming
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
            Steam Methane Reforming (SMR) is the most widely used method for hydrogen production, accounting for a significant portion of global hydrogen output. The process involves reacting methane (CH₄), typically derived from natural gas, with steam at high temperatures (700–1,000°C) in the presence of a catalyst. This reaction produces hydrogen (H₂) and carbon monoxide (CO) as primary outputs. In a subsequent step called the water-gas shift reaction, the carbon monoxide reacts with additional steam to produce more hydrogen and carbon dioxide (CO₂).
            SMR is an efficient and cost-effective method, making it a preferred choice for industrial-scale hydrogen production. However, it relies on fossil fuels, resulting in significant CO₂ emissions, which contribute to climate change. To address this, carbon capture and storage (CCS) technologies are increasingly being integrated with SMR to reduce emissions, producing what is known as blue hydrogen. Despite its environmental challenges, SMR remains a cornerstone of hydrogen production, particularly in industries like ammonia synthesis, oil refining, and methanol production. Advances in CCS and renewable alternatives are key to making SMR more sustainable in the future energy landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steam_Methane_Reforming_Theory;