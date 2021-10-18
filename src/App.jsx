import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoginPage from './Components/LoginPage/index'
import RouterLink from './Components/RouterLinks/index'

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
          <RouterLink />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signUp"></Route>
      </Switch>
    </Router>
  );
}

export default App;
