import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthContext from "./components/Context/AuthContext";
import Home from "./components/Page/Home/Home";
import LogIn from "./components/Page/LogIn/LogIn";
import SignUp from "./components/Page/LogIn/SignUp";
import Service from "./components/Page/Service/Service";
import Header from "./components/Shared/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFoundPage from "./components/Page/NotFound/NotFound";
import Footer from "./components/Shared/Footer/Footer";

function App() {
  return (
    <AuthContext>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/service/:id">
              <Service></Service>
            </PrivateRoute>
            <Route>
              <NotFoundPage></NotFoundPage>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </AuthContext>
  );
}

export default App;
