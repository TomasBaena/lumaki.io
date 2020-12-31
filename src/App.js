import './styles/App.css';
import { Link, Route, Switch } from "react-router-dom";
import  Home  from './components/home.js';
import  Breadhound from './components/breadhound.js';

function App() {
  return (
    <div className="App">
      <Route exact path="/"><Home /></Route>
      <Route path="/about"><About /></Route>     
      <Route path="/breadhound"><Breadhound /></Route>  
    </div>
  );
}

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default App;
