import back from '../../../assets/icon5.png';
import No_img from '../../../assets/No-Image-Found.png';
import Header2 from '../../../components/header2/Header2';
import { useNavigate } from 'react-router-dom';

const Electrolysis_Of_Water_Theory = () => {
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
          	Electrolysis of Water
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
            Electrolysis of water is a process in which water (H₂O) is decomposed into its constituent elements, hydrogen (H₂) and oxygen (O₂), using an electric current. This is typically achieved by passing electricity through water containing an electrolyte, to enhance conductivity. The process occurs in an electrolytic cell, where water molecules are split at two electrodes: hydrogen gas is produced at the cathode (negative electrode) via reduction, while oxygen gas is released at the anode (positive electrode) via oxidation. When renewable energy sources such as solar or wind power are used for electrolysis, this method produces "green" hydrogen with no carbon emissions. Electrolysis is gaining popularity due to its environmental benefits, although it is currently more expensive than fossil-fuel-based methods. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electrolysis_Of_Water_Theory;