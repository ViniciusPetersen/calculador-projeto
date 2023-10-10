import React, { useEffect } from 'react';
var auxnumerovisor = '';
const inputValue = '';

const Visor = ({ numeroVisor, onValueChange }) => {

  const ajuste = () => {
    /*const visElement = document.getElementById('vis') as HTMLInputElement | null;

    if (visElement) {
        console.log("->"+numeroVisor);
    if(numeroVisor=='.'){
        var inputElement = visElement.value;
    visElement.value = inputElement + numeroVisor;
    numeroVisor = "";
    }
    if(numeroVisor=='$'){
        console.log(auxnumerovisor);
        var inputElement = visElement.value;
    visElement.value = inputElement + auxnumerovisor;
    auxnumerovisor = "";
    }
    else{
    auxnumerovisor = numeroVisor;
    var inputElement = visElement.value;
    visElement.value = inputElement + numeroVisor;
    numeroVisor = "";
    } 

      const visor = visElement.value;
      onValueChange(visor);
    } else {
      console.error('Elemento com o ID "vis" não encontrado no DOM.');
    }
*/
    const dynamicText = document.getElementById('vis');

    const tamanhoMaximo = 60;

    const tamanhoTexto = tamanhoMaximo - 1.3 * dynamicText.value.length;

    dynamicText.style.fontSize = tamanhoTexto + 'px';
  };

  useEffect(() => {
    ajuste();
  }, [numeroVisor, inputValue]);

  return (
    <div className="answer-box">
      <div className="overlap-group-2">
        <p className="text-wrapper-7">45 x 8 ÷ 2</p>
        <p className="element-2">
          <span className="text-wrapper-8">
            <br />
          </span>
          <input
            className="text-wrapper-9"
            id="vis"
            onChange={ajuste}
            value={numeroVisor}
          />
        </p>
      </div>
    </div>
  );
};

export default Visor;
