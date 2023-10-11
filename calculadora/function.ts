    function soma(a: number, b: number): number {
    return a + b;
  }
  

  const resultado1 = soma(10, 5);
  console.log('O resultado da soma é:', resultado1);


  function subtracao(a: number, b: number): number {
    return a - b;
  }
  

  const resultado2 = subtracao(10, 5);
  console.log('O resultado da subtração é:', resultado2);


  function multiplicacao(a: number, b: number): number {
    return a * b;
  }
  
  const resultado33 = multiplicacao(10, 5);
  console.log('O resultado da multiplicação é:', resultado33);


  function divisao(dividendo: number, divisor: number): number {
    if (divisor === 0) {
      throw new Error('Não é possível dividir por zero.');
    }
  
    return dividendo / divisor;
  }
  
  const resultado = divisao(10, 5);
  console.log('O resultado da divisão é:', resultado)


  function calcularPorcentagem(valor: number, percentual: number): number {
    return (valor * percentual) / 100;
  }
  
  const valor = 200; 
  const percentual = 15; 
  
  const resultadoPorcentagem = calcularPorcentagem(valor, percentual);
  console.log(`15% de ${valor} é: ${resultadoPorcentagem}`);


  function calcularRaizQuadrada(numero: number): number {
    if (numero < 0) {
      throw new Error('Não é possível calcular a raiz quadrada de um número negativo.');
    }
  
    return Math.sqrt(numero);
  }
  
  const numeroParaCalcularRaiz = 25; 
  
  try {
    const resultadoRaizQuadrada = calcularRaizQuadrada(numeroParaCalcularRaiz);
    console.log(`A raiz quadrada de ${numeroParaCalcularRaiz} é: ${resultadoRaizQuadrada}`);
  } catch (error) {
    console.error(error.message);
  }

  
  function inverterSinal(numero: number): number {
    return -numero;
  }
  
  const numeroParaInverterSinal = 10; 
  
  const resultadoInversaoSinal = inverterSinal(numeroParaInverterSinal);
  console.log(`O inverso do número ${numeroParaInverterSinal} é: ${resultadoInversaoSinal}`);

  
  function calcularCosseno(angulo: number): number {
    return Math.cos(angulo);
  }
  
  const anguloGraus = 45; 
  
  const anguloRadianos = (anguloGraus * Math.PI) / 180; 
  const resultadoCosseno = calcularCosseno(anguloRadianos);
  console.log(`O cosseno de ${anguloGraus} graus é: ${resultadoCosseno}`);

  
  


