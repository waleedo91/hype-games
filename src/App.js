import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// pages & components
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Game from "./pages/game/Game";

// styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/game/:id">
            <Game />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
