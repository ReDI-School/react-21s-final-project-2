import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import RestaurantList from "./components/RestaurantList";
import NavBar from "./components/NavBar";
//import { Home } from "./components/Layout/Home";
import { Contact } from "./components/Layout/Contact";
import Restaurant from "./components/Restaurant";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route path="/list" component={RestaurantList} />
            <Route path="/contact" component={Contact} />
            <Route path="/restaurant" component={Restaurant} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
