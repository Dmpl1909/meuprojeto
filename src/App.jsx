import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Contact2 from './Contact2.jsx'

 function App() {
    return <>
    <Router>
    <Header />
    <main>
      <Routes>
            <Route path='/' element={<Home />} /> {/* Define a rota para o componente Home */}
            <Route path='/about' element={<About />} /> {/* Define a rota para o componente About */}
            <Route path='/contact' element={<Contact />} /> {/* Define a rota para o componente Contact */}
            <Route path='/contact2' element={<Contact2 />} /> {/* Define a rota para o componente Contact2 */}
        </Routes>
    </main>
    <Footer year={new Date().getFullYear()} madeWith="React" /> {/* passando props para o componente Footer */}
    </Router>
    </>
    
}

// exporta o componente App para que possa ser importado e usado em outros arquivos
export default App