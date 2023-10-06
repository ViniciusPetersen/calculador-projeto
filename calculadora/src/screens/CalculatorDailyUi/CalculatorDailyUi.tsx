import React from "react";
import "./style.css";

export const CalculatorDailyUi = (): JSX.Element => {
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
              <div className="overlap-2">
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
              <div className="answer-box">
                <div className="overlap-group-2">
                  <p className="text-wrapper-7">45 x 8 ÷ 2</p>
                  <p className="element-2">
                    <span className="text-wrapper-8">
                      <br />
                    </span>
                    <span className="text-wrapper-9">180</span>
                  </p>
                </div>
              </div>
              <div className="overlap-4">
                <div className="overlap-5">
                  <div className="overlap-6">
                    <div className="numericals">
                      <div className="text-wrapper-10">7</div>
                      <div className="text-wrapper-17">8</div>
                      <div className="text-wrapper-20">9</div>
                      <div className="text-wrapper-19">4</div>
                      <div className="text-wrapper-18">5</div>
                      <div className="text-wrapper-16">6</div>
                      <div className="text-wrapper-15">1</div>
                      <div className="text-wrapper-11">0</div>
                      <div className="text-wrapper-14">2</div>
                      <div className="text-wrapper-13">3</div>
                      <div className="text-wrapper-12">.</div>
                    </div>
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
              <div className="text-wrapper-33">rest</div>
              <div className="text-wrapper-34">1/X</div>
              <div className="text-wrapper-35">C</div>
              <div className="text-wrapper-36">%</div>
              <div className="text-wrapper-37">+</div>
              <div className="text-wrapper-38">-</div>
              <div className="text-wrapper-39">÷</div>
              <img className="vezes" alt="Vezes" src="vezes.svg" />
              <img className="delete" alt="Delete" src="delete-2.png" />
              <div className="text-wrapper-40">(</div>
              <div className="text-wrapper-41">)</div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
