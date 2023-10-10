import React, { useEffect } from 'react';
var inputValue = "";
var auxnumerovisor = "";
const Visor = ({ numeroVisor }) => {

    const ajuste = () => {
        const visElement = document.getElementById('vis') as HTMLInputElement | null;
        console.log("ck2");
        

    if (visElement) {
        console.log("->"+numeroVisor);
    if(numeroVisor=='.'){
        var inputElement = visElement.value;
    visElement.value = inputElement + numeroVisor;
    numeroVisor = "";
    }
    if(numeroVisor=='$'){
        var inputElement = visElement.value;
    visElement.value = inputElement + auxnumerovisor;
    auxnumerovisor = "";
    }
    else{
    auxnumerovisor = numeroVisor;
    var inputElement = visElement.value;
    visElement.value = inputElement + numeroVisor;
    numeroVisor = "";}
    } else {
    console.error('Elemento com o ID "vis" não encontrado no DOM.');
    }

        
        const dynamicText = document.getElementById('vis');

        const tamanhoMaximo = 60;

        const tamanhoTexto = tamanhoMaximo - 1.3 * dynamicText.value.length;
        
        dynamicText.style.fontSize = tamanhoTexto + 'px';
        
    }

    useEffect(() => {
        console.log("ck1");
        ajuste();
        console.log(numeroVisor);
        
    }, [numeroVisor,inputValue]);

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

                    />
                </p>
            </div>
        </div>
    )
}

export default Visor;
