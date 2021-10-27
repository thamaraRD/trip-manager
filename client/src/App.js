import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginAndRegister from './components/LoginAndRegister';
import MainScreen from './components/MainScreen';


function App() {
  return (
    <div className="App">
    <Router>
      <div>
    <Switch>
          <Route exact path="/login">
            <LoginAndRegister />
          </Route>
          <Route exact path="/register">
            <LoginAndRegister />
          </Route>
          <Route path="/">
            <MainScreen />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
