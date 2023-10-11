import React, { useEffect, useState } from "react";
import "./style.css";
import Numericos from "./Numericos";
import Visor from "./Visor";
import { func } from "prop-types";
var valorVisor: number|string="";


interface CalculatorDailyUiProps {
  // Defina as props que a classe pai aceita aqui
}



export const CalculatorDailyUi = (): JSX.Element => {
  const [numeroVisor, setNumeroVisor] = useState<number |string>('');

  const [visorValue, setVisorValue] = useState<string>('');

  const handleValueChange = (newValue:string) => {
    // Faça o que precisar com o valor atualizado
    console.log('Valor do visor atualizado:', newValue);
    setVisorValue(newValue);
  };


  const handleTextWrapperClick = (value:string) => {
    console.log('Valor clicado:', value);
    if(value=="$"){
      valorVisor = valorVisor.substring(0, valorVisor.length - 1);
      value ="";
    }
    valorVisor = valorVisor + "" + value;
    setVisorValue(valorVisor);
    setNumeroVisor(valorVisor);
  };
  function equals(): number | null {
    // Encontrar todos os operadores na expressão
    const operadores = ['+', '-', '*', '/'];
    const operadoresEncontrados: { operador: string; posicao: number }[] = [];
  
    // Encontrar as posições de todos os operadores
    for (const operador of operadores) {
      let posicao = -1;
      while ((posicao = visorValue.indexOf(operador, posicao + 1)) !== -1) {
        operadoresEncontrados.push({ operador, posicao });
      }
    }
  
    // Verificar se operadores foram encontrados
    if (operadoresEncontrados.length === 0) {
      console.error('Nenhum operador encontrado na expressão.');
      return null;
    }
  
    // Ordenar os operadores por posição
    operadoresEncontrados.sort((a, b) => a.posicao - b.posicao);
  
    // Dividir a expressão em partes usando os operadores
    const partes: string[] = [];
    let inicio = 0;
    for (const operadorInfo of operadoresEncontrados) {
      const { operador, posicao } = operadorInfo;
      partes.push(visorValue.slice(inicio, posicao));
      partes.push(operador);
      inicio = posicao + 1;
    }
    partes.push(visorValue.slice(inicio)); // Adicionar a última parte
  
    // Realizar primeiro as operações de multiplicação e divisão
    

    let i = 1;
    while (i < partes.length) {
      console.log("parte:"+partes[i]);
      
      if (partes[i] === '*' || partes[i] === '/') {
        const operador = partes[i];
        const numero1 = parseFloat(partes[i - 1]);
        const numero2 = parseFloat(partes[i + 1]);
        
        
        let resultadoOperacao: number;
  
        if (operador === '*') {
          resultadoOperacao = numero1 * numero2;
        } else {
          if (numero2 === 0) {
            console.error('Divisão por zero não é permitida.');
            return null;
          }
          resultadoOperacao = numero1 / numero2;
        }
        console.log(resultadoOperacao);
        
        partes.splice(i - 1, 3, resultadoOperacao.toString()); // Substituir os números e o operador pela operação resultante
      } else {
        i += 2; // Avançar para o próximo operador
      }
    }
  
    // Em seguida, realizar as operações de adição e subtração
    let resultado = parseFloat(partes[0]);
    i = 1;
    while (i < partes.length) {
      const operador = partes[i];
      const numero = parseFloat(partes[i + 1]);
  
      switch (operador) {
        case '+':
          resultado += numero;
          break;
        case '-':
          resultado -= numero;
          break;
      }
  
      i += 2; // Avançar para o próximo operador
    }
  
  
    valorVisor = resultado;
    setNumeroVisor(resultado);
    return resultado;
  }

  return (
    <div className="calculator-daily-UI">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="historico">
            <div className="historico-items">
              <img className="close-h" alt="Close h" src="close-h.svg" />
              <div className="hist">
                <div className="overlap-group">
                  <p className="text-wrapper">45 x 8 ÷ 2</p>
                  <p className="element">
                    <span className="span">
                      <br />
                    </span>
                    <span className="text-wrapper-2">180</span>
                  </p>
                </div>
              </div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <p className="text-wrapper">45 x 8 ÷ 2</p>
                  <p className="element">
                    <span className="span">
                      <br />
                    </span>
                    <span className="text-wrapper-2">180</span>
                  </p>
                </div>
              </div>
              <div className="div-wrapper">
                <div className="overlap-group">
                  <p className="text-wrapper">45 x 8 ÷ 2</p>
                  <p className="element">
                    <span className="span">
                      <br />
                    </span>
                    <span className="text-wrapper-2">180</span>
                  </p>
                </div>
              </div>
              <div className="div">
                <div className="overlap-group">
                  <p className="p">45 x 8 ÷ 2</p>
                  <p className="element">
                    <span className="span">
                      <br />
                    </span>
                    <span className="text-wrapper-2">180</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="boxcalc">
            <div className="caixa">
            
              <div className="overlap-2" onClick={equals}>
                <div className="solve-button" />
                <div className="text-wrapper-3">=</div>
              </div>
              <div className="overlap-3">
                <img className="selected-rec" alt="Selected rec" src="selected-rec.svg" />
                <div className="abas">
                  <img className="historico-2" alt="historico 2" src="historical-1.png" />
                  <div className="text-wrapper-4">Scientific</div>
                  <p className="standard">
                    <span className="text-wrapper-5">Standard</span>
                    <span className="text-wrapper-6">&nbsp;</span>
                  </p>
                </div>
              </div>
              <Visor numeroVisor={numeroVisor}  />
              
              <div className="overlap-4">
                <div className="overlap-5">
                  <div className="overlap-6">
                    <img className="plus-minus" alt="Plus minus" src="plus-minus-2.png" />
                    <div className="log">
                      <div className="overlap-7">
                        <div className="text-wrapper-21">10</div>
                        <div className="text-wrapper-22">log</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-wrapper-23">x²</div>
                  <div className="raizx">
                    <p className="x">
                      <span className="text-wrapper-24">√</span>
                      <span className="text-wrapper-25">x</span>
                    </p>
                  </div>
                  <div className="me-MC">
                    <div className="text-wrapper-26">tg</div>
                    <div className="text-wrapper-26">cos</div>
                    <div className="text-wrapper-26">sen</div>
                  </div>
                </div>
                <div className="nraizx">
                  <div className="overlap-8">
                    <div className="text-wrapper-27">n</div>
                    <p className="x-2">
                      <span className="text-wrapper-24">√</span>
                      <span className="text-wrapper-25">x</span>
                    </p>
                  </div>
                </div>
                <div className="element-raizx">
                  <div className="overlap-8">
                    <p className="x-2">
                      <span className="text-wrapper-24">√</span>
                      <span className="text-wrapper-25">x</span>
                    </p>
                    <div className="text-wrapper-27-2">3</div>
                  </div>
                </div>
                <div className="text-wrapper-28">x³</div>
                <div className="text-wrapper-29">π</div>
                <div className="text-wrapper-30">e</div>
                <div className="xpotencn">
                  <div className="text-wrapper-31">x</div>
                  <div className="text-wrapper-32">n</div>
                </div>
              </div>
              
              <div className="text-wrapper-42">x!</div>
              <div className="element-pontecx">
                <div className="text-wrapper-43">10</div>
                <div className="text-wrapper-32">X</div>
              </div>
              <div className="me-MS">
                <div className="text-wrapper-26">MS</div>
                <div className="text-wrapper-26">M+</div>
              </div>
              <div className="text-wrapper-44">MC</div>
              <div className="text-wrapper-45">M-</div>
              <Numericos onTextWrapperClick={handleTextWrapperClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
