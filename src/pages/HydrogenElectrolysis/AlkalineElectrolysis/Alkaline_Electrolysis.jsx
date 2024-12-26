
import back from "../../../assets/icon5.png";
import Alkaline_img from "../../../assets/Alkaline_img.jpg";
import Header2 from "../../../components/Header2.jsx";
import { useNavigate } from "react-router-dom";

const Alkaline_Electrolysis = () => {
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
            Alkaline electrolysis (AEL)
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5">
          <img
            src={Alkaline_img}
            alt="PEM Electrolysis"
            className="mx-auto shadow-lg rounded-2xl"
          />
          <div className="flex-col flex items-start space-y-3.5 lg:space-y-[26px] justify-center">
            <h3 className="text-[22px] md:text-3xl lg:text-[32px] line-height-[32px] font-semibold">
              Overview
            </h3>
            <p className="text-sm lg:text-base xl:text-lg line-height-[26px] font-normal">
              Alkaline electrolysis (AEL) is a process used to produce hydrogen
              gas by splitting water into hydrogen and oxygen using electricity.
              In AEL, water is mixed with an alkaline solution, usually
              potassium hydroxide (KOH) or sodium hydroxide (NaOH), which acts
              as the electrolyte. When electrical current is passed through this
              solution, water molecules are broken down at the electrodes:
              hydrogen gas forms at the cathode (negative electrode), while
              oxygen gas forms at the anode (positive electrode). This method is
              efficient and commonly used for generating hydrogen in various
              industrial applications.{" "}
            </p>
            <button className="text-xs sm:text-sm lg:text-base xl:text-lg line-height-[26px] font-normal bg-[#0177fb] text-white rounded-full px-4 sm:px-6 py-2 sm:py-2.5 active:translate-y-1 active:shadow-none transition-all duration-75 shadow-[0px_4px_0px_0px_#0155b3]">
              Simulation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alkaline_Electrolysis;
