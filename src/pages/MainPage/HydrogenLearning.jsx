import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AccordionItem from '../../components/Accordion.jsx';
import { LearningData } from '../../data/LearningData.jsx';
import img2 from '../../assets/img2.png';
import Header from '../../components/Header.jsx';

const HydrogenLearning = () => {
    const [activeItem, setActiveItem] = useState(null);
    const accordionRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (accordionRef.current && !accordionRef.current.contains(event.target)) {
                setActiveItem(null);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
            <Header />
            <div className="bg-[#f5f5f5] h-screen relative overflow-hidden">
                {/* Animated Image with Delay */}
                <motion.img
                    src={img2}
                    alt=""
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }} // Add delay here
                    className="absolute z-[0] -top-10 h-[100%] right-0 object-cover"
                />
                <div className="w-[95%] max-w-[90%] mx-auto">
                    <div className="w-full lg:w-[55%] relative z-1 space-y-[30px] py-[30px]">
                        <div className="flex items-center gap-3.5">
                            <motion.h3
                                className="text-[26px] line-height-[32px] font-medium"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1 }} // Add delay here
                            >
                                Hydrogen Generator Learning
                            </motion.h3>
                        </div>
                        {/* Animated Accordion with Staggered Delay */}
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                            ref={accordionRef}
                        >
                            {LearningData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    layout
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.2, // Add staggered delay
                                    }}
                                >
                                    <AccordionItem
                                        item={item}
                                        isActive={activeItem === index}
                                        onClick={() =>
                                            setActiveItem(activeItem === index ? null : index)
                                        }
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HydrogenLearning;
