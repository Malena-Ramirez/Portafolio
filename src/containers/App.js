import { NavbarPortfolio } from "../components/NavbarPortfolio.jsx"
import { WelcomeSection } from '../components/WelcomSection.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/App.css"

function App() {
  return (
    <div className="App">
      <NavbarPortfolio />
      <WelcomeSection />
    </div>
  );
}

export default App;
