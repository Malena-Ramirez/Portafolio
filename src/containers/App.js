import { NavbarPortfolio } from "../components/NavbarPortfolio.jsx"
import { WelcomeSection } from '../components/WelcomeSection.jsx'
import { Projects } from "../components/Projects.jsx";
import { Skillset } from "../components/Skillset.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/App.css"

function App() {
  return (
    <div className="App">
      <NavbarPortfolio />
      <WelcomeSection />
      <Skillset />
      <Projects />
    </div>
  );
}

export default App;
