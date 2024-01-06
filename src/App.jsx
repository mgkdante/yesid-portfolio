import {BrowserRouter} from 'react-router-dom';
import {About, Contact, Hero, Works, Experience, Tech, Navbar, StarsCanvas} from './components';

const App = () => {
    return (
        <BrowserRouter /*basename={import.meta.env.DEV ? '/' : '/yesid-portfolio/'}*/>
            <div className="relative z-0 bg-primary">
                <Navbar/>
                <div className="relative z-0">
                    <Hero/>
                    <About/>
                    <Experience/>
                    <Tech/>
                    <Works/>
                    <Contact/>
                    <StarsCanvas/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
