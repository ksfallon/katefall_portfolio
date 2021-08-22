import './App.css';
// import { Button } from 'reactstrap';
import Header from './components/Header/Header.jsx'
import Projects from './components/Projects/Projects';

function PortfolioPage() {
  return (
    <div className="App">
    <nav>
      <Header />
    </nav>
    <body>
      <div>
        <Projects />
      </div>
      <footer>
      </footer>
    </body>
    </div>
    
  );
}

export default PortfolioPage;