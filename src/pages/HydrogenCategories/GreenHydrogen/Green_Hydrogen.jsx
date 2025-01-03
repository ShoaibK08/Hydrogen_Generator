import { motion } from "framer-motion";
import back from "../../../assets/icon5.png";
import Green_H2 from "../../../assets/green hydrogen.jpg";
import Header2 from "../../../components/header2/Header2";
import { useNavigate } from "react-router-dom";

const Green_Hydrogen = () => {
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
            Green Hydrogen
          </motion.h3>
        </div>

        {/* Image and text content with animations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5">
          {/* Animated image */}
          <motion.img
            src={Green_H2}
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
              Green hydrogen is produced through the electrolysis of water using electricity
              generated from renewable energy sources such as wind, solar, or hydropower.
              During electrolysis, water molecules are split into hydrogen and oxygen without
              any carbon emissions, making green hydrogen the most sustainable and environmentally
              friendly form of hydrogen. As the process relies entirely on renewable energy, it
              offers a zero-carbon footprint, positioning green hydrogen as a crucial element in
              achieving a fully decarbonized energy system. While currently more expensive due to
              the costs of renewable energy and electrolysers, advancements in technology and
              decreasing costs of renewable power are expected to make green hydrogen increasingly
              competitive and central to the future of clean energy.
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

export default Green_Hydrogen;
