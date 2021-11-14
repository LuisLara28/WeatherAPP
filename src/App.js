import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Styles
import "./App.css";
import "tailwindcss/tailwind.css"

//Components
import Home from "./Pages/Home/Home";
import WeatherInformation from "./Pages/WeatherInformation/WeatherInformation";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/WeatherInformation/:city">
            <WeatherInformation />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
