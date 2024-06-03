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
        className={` flex group cursor-pointer w-full md:w-9/12 mx-auto h-14 md:h-16 justify-between items-center p-2 mt-4 rounded-2xl ${
          Index === Id ? 'bg-primary shadow-lg' : 'bg-secondary hover:bg-primary hover:shadow-lg'
        } focus:bg-primary`}
      >
        <div className="flex group cursor-pointer  md:text-2xl font-sf-pro ">
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
        <div key={Id} className="bg-secondary pl-10 text-sm md:text-xl font-semibold text-gray w-full md:w-full h-auto rounded-2xl p-6 mt-4 ">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionUI;