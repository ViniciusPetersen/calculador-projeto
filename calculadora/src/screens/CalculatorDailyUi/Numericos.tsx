import React, { FC, useEffect } from 'react';

interface NumericosProps {
  onTextWrapperClick: (value: number | string) => void;
}

const Numericos: FC<NumericosProps> = ({ onTextWrapperClick }) => {
  const handleTextWrapperClick = (value: number | string) => {
    if (onTextWrapperClick) {
      onTextWrapperClick(value);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const keyToValueMap: { [key: string]: number | string } = {
        'Digit7': 7,
        'Digit8': 8,
        'Digit9': 9,
        'Digit4': 4,
        'Digit5': 5,
        'Digit6': 6,
        'Digit1': 1,
        'Digit0': 0,
        'Digit2': 2,
        'Digit3': 3,
        'Period': '.',
        'NumpadAdd': '+',
        'Equal': '+', // Em alguns teclados, a tecla de adição é representada como 'Equal'
        'NumpadSubtract': '-',
        'Minus': '-', // Em alguns teclados, a tecla de subtração é representada como 'Minus'
        'NumpadDivide': '/',
        'Slash': '/', // Em alguns teclados, a tecla de divisão é representada como 'Slash'
        'Backspace': '$'
      };

      const value = keyToValueMap[event.code];
      if (value !== undefined) {
        handleTextWrapperClick(value);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleTextWrapperClick]);

  return (
    <div>
      <div className="text-wrapper-33">rest</div>
              <div className="text-wrapper-34">1/X</div>
              <div className="text-wrapper-35">C</div>
              <div className="text-wrapper-36">%</div>
              <div className="text-wrapper-37" onClick={() => handleTextWrapperClick("+")}>+</div>
              <div className="text-wrapper-38" onClick={() => handleTextWrapperClick("-")}>-</div>
              <div className="text-wrapper-39" onClick={() => handleTextWrapperClick("/")}>÷</div>
              <img className="vezes" alt="Vezes" src="vezes.svg" onClick={() => handleTextWrapperClick("*")} />
              <img className="delete" alt="Delete" src="delete-2.png" onClick={() => handleTextWrapperClick("$")} />
              <div className="text-wrapper-40">(</div>
              <div className="text-wrapper-41">)</div>
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
