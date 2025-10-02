// Importa o StrictMode do React que ajuda a encontrar potenciais erros na aplicação
import { StrictMode } from 'react'
// Importa a função createRoot do ReactDOM para renderizar a aplicação React no DOM
import { createRoot } from 'react-dom/client'
// Importa o arquivo CSS para aplicar estilos globais à aplicação
import './index.css'
// Importa o componente principal da aplicação
import App from './App.jsx'

// Seleciona o elemento HTML com o id 'root' e cria uma raiz React para renderizar a aplicação
// O método render é chamado para renderizar o componente App dentro do StrictMode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)