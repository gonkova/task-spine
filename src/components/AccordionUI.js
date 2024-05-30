import React from "react";
import { HiArrowCircleDown, HiX } from "react-icons/hi";
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
        className={` flex group cursor-pointer w-full md:w-full mx-auto h-16 justify-between items-center p-2 mt-2 rounded-2xl ${
          Index === Id ? 'bg-primary shadow-lg' : 'bg-secondary hover:bg-primary hover:shadow-lg'
        } focus:bg-primary`}
      >
        <div className="flex group cursor-pointer  ">
          <div
            className={`${
              Index === Id ? 'text-dark-1' : 'text-dark-1'
            } font-semibold pl-10`}
          >
            {title}
          </div>
        </div>
        <div className="flex items-center justify-center pr-10">
          {Index !== Id ? (
            <FaCaretRight className="w-6 h-6 text-dark-1 rotate-90" />
          ) : (
            <FaCaretRight className="w-6 h-6 -rotate-90" />
          )}
        </div>
      </div>

      {Index === Id && (
        <div className="bg-secondary pl-10 font-semibold text-gray w-full md:w-full h-auto rounded-lg p-4 mt-4 mb-2">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionUI;
