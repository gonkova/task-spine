import React from "react";
import { FaCaretRight } from 'react-icons/fa';

const AccordionUI = ({ title, children, Id, Index, setIndex }) => {
  const handleSetIndex = (Id) => {
    if (Index === Id) {
      setIndex(null); 
    } else {
      setIndex(Id); 
    }
  };

  return (
    <>
      <div
        onClick={() => handleSetIndex(Id)}
        className={` flex group cursor-pointer w-full  mx-auto h-14 md:h-16 justify-between items-center p-2 mt-5 rounded-xl ${
          Index === Id ? 'bg-primary shadow-lg' : 'bg-secondary hover:bg-primary hover:shadow-lg'
        } focus:bg-primary`}
      >
        <div className="flex group cursor-pointer text-base md:text-xl font-sf-pro leading-110">
          <div
            className={`${
              Index === Id ? 'text-dark-1' : 'text-dark-1'
            } font-semibold pl-4 md:pl-10`}
          >
            {title}
          </div>
        </div>
        <div className="flex items-center justify-center pr-4 md:pr-10">
          {Index !== Id ? (
            <FaCaretRight className="w-6 h-6 text-dark-1 rotate-90" />
          ) : (
            <FaCaretRight className="w-6 h-6 -rotate-90" />
          )}
        </div>
      </div>

      {Index === Id && (
        <div key={Id} className="bg-secondary text-xs md:text-xl leading-140 font-semibold text-gray w-full md:w-full h-auto rounded-xl p-6 mt-5 mx-auto ">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionUI;