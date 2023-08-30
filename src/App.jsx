import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Hero, Works, Experience, Tech, Navbar, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/yesid-portfolio/'}>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
