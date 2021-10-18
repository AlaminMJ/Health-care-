import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthContext from "./components/Context/AuthContext";
import Home from "./components/Page/Home/Home";
import LogIn from "./components/Page/LogIn/LogIn";
import SignUp from "./components/Page/LogIn/SignUp";
import Services from "./components/Page/Services/Services";
import Header from "./components/Shared/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <AuthContext>
      <div className="App">
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>

            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </AuthContext>
  );
}

export default App;
