import back from "../../../assets/icon5.png";
import Green_H2 from "../../../assets/green hydrogen.jpg";
import Header2 from "../../../components/Header2.jsx";
import { useNavigate } from "react-router-dom";

const Green_Hydrogen = () => {
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
          Green Hydrogen
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5">
          <img
            src={Green_H2}
            alt="PEM Electrolysis"
            className="mx-auto shadow-lg rounded-2xl"
          />
          <div className="flex-col flex items-start space-y-3.5 lg:space-y-[26px] justify-center">
            <h3 className="text-[22px] md:text-3xl lg:text-[32px] line-height-[32px] font-semibold">
              Overview
            </h3>
            <p className="text-sm lg:text-base xl:text-lg line-height-[26px] font-normal">
            Green hydrogen is produced through the electrolysis of water using electricity generated from renewable energy sources such as wind, solar, or hydropower. During electrolysis, water molecules are split into hydrogen and oxygen without any carbon emissions, making green hydrogen the most sustainable and environmentally friendly form of hydrogen. As the process relies entirely on renewable energy, it offers a zero-carbon footprint, positioning green hydrogen as a crucial element in achieving a fully decarbonized energy system. While currently more expensive due to the costs of renewable energy and electrolysers, advancements in technology and decreasing costs of renewable power are expected to make green hydrogen increasingly competitive and central to the future of clean energy.
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

export default Green_Hydrogen;
