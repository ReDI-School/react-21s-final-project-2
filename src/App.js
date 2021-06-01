import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RestaurantList from "./Components/RestaurantList";
import "./App.css";
import NavBar from "./Components/NavBar";
import { Home } from "./Components/Layout/Home";
import { Contact } from "./Components/Layout/Contact";

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
