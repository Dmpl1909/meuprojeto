import Counter from './Counter.jsx'
import { Link } from 'react-router-dom'
import Card from './components/Card.jsx'

function Home(){
    return(
        <>
           {/*Hero section*/}
           {/* Hero responsivo com container e tipografia melhorada */}
           <div className="bg-gradient-to-b from-blue-500 to-purple-500 text-white text-center py-16 md:py-24 mt-4">
              {/* Container para envolver o conteúdo */}
              <div className="max-w-6xl mx-auto px-4">
                {/* Tipografia responsiva no título */}
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 drop-shadow-lg">Welcome to Our React App</h1>
                {/* Subtítulo com cor suave e largura controlada */}
                <p className='text-gray-600 text-center max-w-2xl mx-auto mt-4'>Building modern web applications with React</p>
                {/* Fundo sutil opcional */}
                <div className="bg-gradient-to-b from-white to-blue-50 rounded-lg p-4 mt-8 inline-block">
                  <span className="text-gray-800">Explore our features below</span>
                </div>
              </div>
           </div>

           {/* Seção nova abaixo do hero com grid de funcionalidades */}
           <div className="max-w-6xl mx-auto px-4 py-16">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {/* Cartão 1 - Rápido */}
               <Card className="hover:shadow-md transition-shadow">
                 <div className="text-4xl mb-4">⚡</div>
                 <h3 className="text-lg font-semibold mb-2">Rápido</h3>
                 <p className="text-gray-600">Build e HMR com Vite.</p>
               </Card>

               {/* Cartão 2 - Componentes */}
               <Card className="hover:shadow-md transition-shadow">
                 <div className="text-4xl mb-4">⚙️</div>
                 <h3 className="text-lg font-semibold mb-2">Componentes</h3>
                 <p className="text-gray-600">Reutiliza e compõe UI.</p>
               </Card>

               {/* Cartão 3 - Foco */}
               <Card className="hover:shadow-md transition-shadow">
                 <div className="text-4xl mb-4">🎯</div>
                 <h3 className="text-lg font-semibold mb-2">Foco</h3>
                 <p className="text-gray-600">Produtividade com Tailwind.</p>
               </Card>
             </div>
           </div>

           {/* Seção Call to Action */}
           <div className="text-center py-12">
             <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
             <p className="text-gray-600 mb-6">Contact us today and let's build something amazing together.</p>
             <div className="inline-flex items-center gap-2">
               <Link 
                 to="/contact2" 
                 className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
               >
                 Contact Us
               </Link>
             </div>
           </div>
        
           <div className="bg-gray-50 py-12">
             <div className="max-w-4xl mx-auto px-6">
               {/*Conteúdo principal da página */}
               <Card className="shadow-xl mb-8">
                 <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Home Page</h2>
                 <p className="text-lg text-gray-600 text-center leading-relaxed">This is the home page of our React application. Explore the features and enjoy your stay!</p>
               </Card>
            
               {/* Inclui o componente Counter */}
               <Card className="shadow-xl">
                 <Counter />
               </Card>
             </div>
           </div>
        </>
    );
}

export default Home;