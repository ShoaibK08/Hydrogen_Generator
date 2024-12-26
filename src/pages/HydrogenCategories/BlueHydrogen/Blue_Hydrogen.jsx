import back from "../../../assets/icon5.png";
import Blue_H2 from "../../../assets/BlueHydrogen.jpg";
import Header2 from "../../../components/Header2.jsx";
import { useNavigate } from "react-router-dom";

const Blue_Hydrogen = () => {
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
          Blue Hydrogen
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5">
          <img
            src={Blue_H2}
            alt="PEM Electrolysis"
            className="mx-auto shadow-lg rounded-2xl"
          />
          <div className="flex-col flex items-start space-y-3.5 lg:space-y-[26px] justify-center">
            <h3 className="text-[22px] md:text-3xl lg:text-[32px] line-height-[32px] font-semibold">
              Overview
            </h3>
            <p className="text-sm lg:text-base xl:text-lg line-height-[26px] font-normal">
            Blue hydrogen is generated similarly to grey hydrogen through steam methane reforming (SMR), but with an added step of carbon capture and storage (CCS) to reduce the environmental impact. During the production process, the CO₂ emissions produced are captured and stored in geological formations or utilized in industrial applications, significantly lowering the carbon footprint. This approach can capture up to 90% of the emitted CO₂, making blue hydrogen a more environmentally responsible option compared to grey hydrogen. Blue hydrogen serves as a transitional solution, leveraging existing natural gas resources while mitigating some environmental concerns, and is seen as a step towards cleaner energy production until green hydrogen becomes more economically viable.
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

export default Blue_Hydrogen;
