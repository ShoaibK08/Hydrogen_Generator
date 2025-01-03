import back from '../../../assets/icon5.png';
import No_img from '../../../assets/No-Image-Found.png';
import Header2 from '../../../components/header2/Header2';
import { useNavigate } from 'react-router-dom';

const Methanol_Reforming_Theory = () => {
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
          	Methanol Reforming
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
            Methanol reforming is a chemical process in which methanol (CH₃OH) is converted into hydrogen gas (H₂) and carbon dioxide (CO₂) or carbon monoxide (CO) by reacting it with steam or oxygen. The most common method is steam reforming, where methanol reacts with steam at high temperatures (200–300°C) in the presence of a catalyst, typically copper-based. The reaction produces hydrogen, which is valuable for fuel cells and industrial processes.
             Another method, partial oxidation, involves reacting methanol with oxygen at high temperatures, producing hydrogen and carbon monoxide, which can be further processed in the water-gas shift reaction to generate additional hydrogen. Methanol reforming is a key technology for hydrogen production, offering a more compact and efficient alternative to traditional hydrocarbon reforming processes, especially in portable applications and fuel cells. However, controlling the CO and CO₂ emissions remains a challenge for its widespread use.
             Methanol is a liquid at room temperature and is easier to handle and store than hydrogen, making methanol reforming an attractive option for portable or small-scale hydrogen generation. The main challenge is that methanol reforming can produce some carbon dioxide emissions, so it is considered less environmentally friendly than methods that use pure water or renewable sources unless combined with carbon capture technologies.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methanol_Reforming_Theory;