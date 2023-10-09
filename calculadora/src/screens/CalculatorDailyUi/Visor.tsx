import React, { useEffect } from 'react';

const Visor = ({ numeroVisor }) => {

    const ajuste = () => {
        const dynamicText = document.getElementById('vis');

        const tamanhoMaximo = 60;

        const tamanhoTexto = tamanhoMaximo - 1.3 * dynamicText.value.length;
        
        dynamicText.style.fontSize = tamanhoTexto + 'px';
    }

    useEffect(() => {
        ajuste(); // Chama o ajuste inicialmente
    }, [numeroVisor]);

    return (
        <div className="answer-box">
            <div className="overlap-group-2">
                <p className="text-wrapper-7">45 x 8 ÷ 2</p>
                <p className="element-2">
                    <span className="text-wrapper-8">
                        <br />
                    </span>
                    <input
                        type='number'
                        className="text-wrapper-9"
                        id="vis"
                        onChange={ajuste}
                        value={numeroVisor}
                    />
                </p>
            </div>
        </div>
    )
}

export default Visor;
