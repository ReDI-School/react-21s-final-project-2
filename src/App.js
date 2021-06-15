import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import RestaurantList from "./components/RestaurantList";
import NavBar from "./components/NavBar";
import { Contact } from "./components/Layout/Contact";
import SocialFollow from "./components/SocialFollow";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />

                <div className="pages">
                    <Switch>
                        <Route exact path="/" component={RestaurantList} />
                        <Route path="/contact" component={Contact} />
                        <Route
                            exact
                            path="/Social-Follow"
                            component={SocialFollow}
                        />
                    </Switch>
                </div>
                <SocialFollow />
            </Router>
        </div>
    );
}

export default App;
