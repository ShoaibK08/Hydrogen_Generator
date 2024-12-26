import back from "../../../assets/icon5.png";
import PEM_img from "../../../assets/PEM_img.png";
import Header2 from "../../../components/Header2.jsx";
import { useNavigate } from "react-router-dom";

const Grey_Hydrogen = () => {
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
            Grey Hydrogen
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5">
          <img
            src={PEM_img}
            alt="PEM Electrolysis"
            className="mx-auto shadow-lg rounded-2xl"
          />
          <div className="flex-col flex items-start space-y-3.5 lg:space-y-[26px] justify-center">
            <h3 className="text-[22px] md:text-3xl lg:text-[32px] line-height-[32px] font-semibold">
              Overview
            </h3>
            <p className="text-sm lg:text-base xl:text-lg line-height-[26px] font-normal">
              Grey hydrogen is produced primarily through steam methane
              reforming (SMR), where natural gas (methane) reacts with steam
              under high pressure and temperature in the presence of a catalyst
              to generate hydrogen, carbon monoxide, and carbon dioxide. The
              carbon monoxide further reacts with steam to produce more hydrogen
              and carbon dioxide. This method, while cost-effective and widely
              used, results in significant CO₂ emissions, making grey hydrogen
              the least environmentally friendly option. The high carbon
              footprint associated with grey hydrogen contributes to greenhouse
              gas emissions and climate change, but its established production
              infrastructure and lower production costs make it the most common
              form of hydrogen available today.
            </p>
            <button className="text-xs sm:text-sm lg:text-base xl:text-lg line-height-[26px] font-normal bg-[#0177fb] text-white rounded-full px-4 sm:px-6 py-2 sm:py-2.5 active:translate-y-1 active:shadow-none transition-all duration-75 shadow-[0px_4px_0px_0px_#0155b3]">
              Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grey_Hydrogen;
