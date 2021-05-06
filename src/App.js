import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import ShowData from './components/ShowData';

function App() {
  return (
    <div className="App">
        <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/view" component={ShowData} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
