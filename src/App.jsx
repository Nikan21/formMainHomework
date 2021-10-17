import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from './Components/LoginPage/index'

function App() {
  return (
    <Router>
      <Link to="/login">Login Page</Link>
      <Link to="/signUp">Sign Up</Link>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signUp"></Route>
      </Switch>
    </Router>
  );
}

export default App;
