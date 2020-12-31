import './styles/App.css';
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import  Home  from './components/home.js';
import  Breadhound from './components/breadhound.js';

function App() {
  return (
      <div >
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />  
            <Route exact path="/breadhound" component={Breadhound} />
          </Switch>
        </Router>
      </div>
  );

}

export default App;
