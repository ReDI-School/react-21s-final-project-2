import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import RestaurantList from "./components/RestaurantList";
import NavBar from "./components/NavBar";
import { Home } from "./components/Layout/Home";
import { Contact } from "./components/Layout/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={RestaurantList} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
