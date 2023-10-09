import React, { FC } from 'react';

interface NumericosProps {
  onTextWrapperClick: (value: number | string) => void;
}

const Numericos: FC<NumericosProps> = ({ onTextWrapperClick }) => {
  const handleTextWrapperClick = (value: number | string) => {
    if (onTextWrapperClick) {
      onTextWrapperClick(value);
    }
  };

  return (
    <div>
      <div className="numericals">
        <div className="text-wrapper-10" onClick={() => handleTextWrapperClick(7)}>7</div>
        <div className="text-wrapper-17" onClick={() => handleTextWrapperClick(8)}>8</div>
        <div className="text-wrapper-20" onClick={() => handleTextWrapperClick(9)}>9</div>
        <div className="text-wrapper-19" onClick={() => handleTextWrapperClick(4)}>4</div>
        <div className="text-wrapper-18" onClick={() => handleTextWrapperClick(5)}>5</div>
        <div className="text-wrapper-16" onClick={() => handleTextWrapperClick(6)}>6</div>
        <div className="text-wrapper-15" onClick={() => handleTextWrapperClick(1)}>1</div>
        <div className="text-wrapper-11" onClick={() => handleTextWrapperClick(0)}>0</div>
        <div className="text-wrapper-14" onClick={() => handleTextWrapperClick(2)}>2</div>
        <div className="text-wrapper-13" onClick={() => handleTextWrapperClick(3)}>3</div>
        <div className="text-wrapper-12" onClick={() => handleTextWrapperClick('.')}>.</div>
      </div>
      
    </div>
  );
}

export default Numericos;
