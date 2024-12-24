// src/components/HydrogenLearning.jsx
import { useState, useEffect, useRef } from 'react';
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
            <div className="bg-[#f5f5f5] h-screen relative">
                <img
                    src={img2}
                    alt=""
                    className="absolute z-[0] -top-10 h-[100%] right-0 object-cover"
                />
                <div className="w-[95%] max-w-[90%] mx-auto">
                    <div className="w-full lg:w-[55%] relative z-1 space-y-[30px] py-[30px]">
                        <div className="flex items-center gap-3.5">
                            <h3 className="text-[26px] line-height-[32px] font-medium">
                                Hydrogen Generator Learning
                            </h3>
                        </div>
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                            ref={accordionRef}
                        >
                            {LearningData.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    item={item}
                                    isActive={activeItem === index}
                                    onClick={() => setActiveItem(activeItem === index ? null : index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HydrogenLearning;