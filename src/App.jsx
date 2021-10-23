import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import RouterLink from './Components/RouterLinks/index'
import LoginPage from './Components/LoginPage/index'
import SignUpPage from './Components/SignUpPage/index'

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
        <Route exact path="/signUp">
          <SignUpPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
