import { Link } from 'react-router-dom';
import icon6 from '../assets/icon6.png';

const AccordionItem = ({ item, isActive, onClick }) => {
  return (
    <div 
      className={`border-[1px] border-[#DADADA] bg-white rounded-[10px] p-[15px] flex items-center justify-between relative cursor-pointer ${isActive ? 'rounded-b-none' : ''}`}
      onClick={onClick}
    >
      <h2 className="text-base line-height-[20px] font-medium">{item.title}</h2>
      <div className="size-[30px] bg-[#0177fb] shrink-0 rounded-full flex justify-center items-center">
        <img 
          src={icon6} 
          alt="" 
          className={`transition-all duration-700 ${isActive ? 'rotate-180' : ''}`} 
        />
      </div>
      {isActive && (
        <div className="absolute top-full -left-[1px] -right-[1px] bg-[#f5f5f5] border-[1px] border-[#DADADA] rounded-b-[10px] bg-white p-[15px] z-[1]">
          {item.content.map((paragraph, pIndex) => (
            paragraph.url === 'javascript:void(0)' ? (
              <span 
                key={pIndex}
                className="block mb-4 last:mb-0 cursor-not-allowed text-gray-500"
              >
                {paragraph.text}
              </span>
            ) : (
              <Link 
                key={pIndex}
                to={paragraph.url} 
                className="block mb-4 last:mb-0 hover:text-[#0177fb]"
              >
                {paragraph.text}
              </Link>
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;