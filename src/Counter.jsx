// aqui vamos usar o useState, que é um hook do React
//Ele nos permite adicionar estado a componentes funcionais
// Um estado é uma variavel que, quando muda, faz o componente "re-renderizar" (atualizar a UI)

import { useState } from 'react';

//Cria um novo componente React chamado Counter
function Counter() {
  //Declara uma nova variavel de estado chamada "count"
  //useState(0) inicializa o estado com o valor 0
  const [count, setCount] = useState(0);
  // barra de progresso
  const progress = (count / 10) * 100;

  return (
    // Card envolvente com estilo melhorado
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
      {/* Título pequeno com estilo específico */}
      <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-4 text-center">Interactive Counter</h3>
      
      {/* Display do contador - valor grande */}
      <div className="text-center mb-6">
        <span className="text-4xl font-bold text-gray-800">{count}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
        <div 
          className="bg-blue-500 h-4 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {/* Layout de botões melhorado */}
      <div className="flex items-center gap-2 mt-4 justify-center">
        {/* Botão primário */}
        <button 
          onClick={() => setCount(count < 10 ? count + 1 : 10)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold transition-colors duration-200"
        >
          +
        </button>
        
        {/* Botão vermelho para diminuir */}
        <button 
          onClick={() => setCount(count > 0 ? count - 1 : 0)}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold transition-colors duration-200"
        >
          -
        </button>
        
        {/* Botão cinzento para reset */}
        <button 
          onClick={() => setCount(0)}
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded font-semibold transition-colors duration-200"
        >
          🔄
        </button>
      </div>
      
      <p className="text-gray-600 mt-4 text-sm text-center">Limite: 0 a 10</p>
    </div>
  );
}
//Exporta o componente Counter para que possa ser importado e usado em outros arquivos
export default Counter