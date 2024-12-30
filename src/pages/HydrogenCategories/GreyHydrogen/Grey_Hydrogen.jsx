import { motion } from "framer-motion";
import back from "../../../assets/icon5.png";
import Grey_H2 from "../../../assets/Grey Hydrogen.jpg";
import Header2 from "../../../components/Header2.jsx";
import { useNavigate } from "react-router-dom";

const Grey_Hydrogen = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <Header2 />
      <div className="w-[95%] max-w-[90%] space-y-[30px] mx-auto py-[30px]">
        {/* Back button and title with animations */}
        <div className="flex items-center gap-3.5">
          <motion.button
            onClick={() => navigate(-1)}
            className="bg-white rounded-full size-[30px] flex items-center justify-center border-[0.5px] border-[#05252433]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={back} alt="back" />
          </motion.button>
          <motion.h3
            className="text-[26px] line-height-[32px] font-medium"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Grey Hydrogen
          </motion.h3>
        </div>

        {/* Image and text content with animations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5">
          {/* Animated image */}
          <motion.img
            src={Grey_H2}
            alt="PEM Electrolysis"
            className="mx-auto shadow-lg rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />

          {/* Animated text section */}
          <motion.div
            className="flex-col flex items-start space-y-3.5 lg:space-y-[26px] justify-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, delayChildren: 0.5, staggerChildren: 0.3 }}
          >
            <motion.h3
              className="text-[22px] md:text-3xl lg:text-[32px] line-height-[32px] font-semibold"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Overview
            </motion.h3>
            <motion.p
              className="text-sm lg:text-base xl:text-lg line-height-[26px] font-normal"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
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
            </motion.p>
            <motion.button
              className="text-xs sm:text-sm lg:text-base xl:text-lg line-height-[26px] font-normal bg-[#0177fb] text-white rounded-full px-4 sm:px-6 py-2 sm:py-2.5 active:translate-y-1 active:shadow-none transition-all duration-75 shadow-[0px_4px_0px_0px_#0155b3]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Video
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Grey_Hydrogen;
