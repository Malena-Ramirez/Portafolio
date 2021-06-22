import { NavbarPortfolio } from "../components/NavbarPortfolio.jsx"
import { WelcomeSection } from '../components/WelcomSection.jsx'
import { Projects } from "../components/Projects.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/App.css"

function App() {
  return (
    <div className="App">
      <NavbarPortfolio />
      <WelcomeSection />
      <Projects />
    </div>
  );
}

export default App;
