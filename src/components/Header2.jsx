import  { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import logo from '../assets/logo2.png';
import menu from '../assets/icon1.png';
import home from '../assets/icon2.png';
import { LearningData } from '../data/LearningData.jsx';
import { Link } from 'react-router-dom';

const Header2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveAccordion(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="border-b relative border-neutral-900 h-20 left-0 w-full z-[100] bg-white">
      <div className="w-[95%] max-w-[90%] mx-auto flex justify-between items-center h-full">
        <a href="/">
          <img src={logo} alt="logo" className="h-[50px]" />
        </a>
        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="size-8 sm:size-10 border-[0.67px] border-[#05252433] rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-neutral-100"
          >
            <img src={menu} alt="menu" className="w-4 sm:w-5" />
          </button>
          <Link 
            to="/" 
            className="size-8 sm:size-10 border-[0.67px] border-[#05252433] rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-neutral-100"
          >
            <img src={home} alt="home" className="w-4 sm:w-5" />
          </Link>
        </div>
      </div>

      {isOpen && (
        <div ref={dropdownRef} className="absolute bg-white z-[100] top-20 left-0 w-full pt-5 pb-32">
          <div className="w-[95%] max-w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 lg:gap-y-5">
            {LearningData.map((item, index) => (
              <div key={index} className="relative font-inter antialiased text-sm lg:text-base">
                <div className={activeAccordion === index ? 'bg-[#f5f5f5] rounded-t-[10px]' : 'bg-white rounded-[10px]'}>
                  <h2 className="px-[15px] hover:bg-[#f5f5f5] hover:rounded-[10px] group">
                    <button
                      onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                      className={`flex items-center justify-between w-full text-left font-semibold py-[15px] gap-4 border-b-[1px] ${
                        activeAccordion === index ? 'border-[#DADADA]' : 'border-[#DADADA00]'
                      }`}
                    >
                      <p className="line-height-[20px] font-medium flex-1 pr-2 line-clamp-2">
                        {item.title}
                      </p>
                      <div className={`size-[30px] group-hover:bg-white shrink-0 rounded-full flex justify-center items-center cursor-pointer ${
                        activeAccordion === index ? 'bg-white' : 'bg-[#f5f5f5]'
                      }`}>
                        <ChevronDown className={`transition-all duration-700 ${activeAccordion === index ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                  </h2>
                  <div className={`p-[15px] w-full absolute z-[1] bg-[#f5f5f5] rounded-b-[10px] text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
                    activeAccordion === index ? 'block' : 'hidden'
                  }`}>
                    <div className="overflow-hidden flex flex-col gap-3.5">
                      {item.content.map((link, linkIndex) => (
                     <Link
                     key={linkIndex}
                     to={link.url !== '/' ? link.url : '#'}
                     onClick={(e) => {
                       if (link.url === '/') {
                         e.preventDefault(); // Prevent navigation for empty URLs
                         console.warn('Link not available');
                       }
                     }}
                     className="hover:text-blue-600 transition-colors duration-300"
                   >
                     {link.text || 'Coming Soon'}
                   </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header2;