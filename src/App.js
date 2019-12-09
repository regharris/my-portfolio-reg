import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Nav from "./Components/nav";
import Footer from "./Components/footer";
import About from "./Components/about";
import Body from "./Components/body";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <About />
        <Body />
        {/* <Switch>
            <Route exact path="/">
              
            </Route>
          </Switch>
        <Switch>
            <Route exact path="/portfolio" component={Portfolio}>
              <Portfolio />
            </Route>
          </Switch>
        <Switch>
            <Route exact path="/contact" component={Contact}>
              <Contact />
            </Route>
          </Switch>
        <Switch>
            <Route exact path="/resume" component={Resume}></Route>
          </Switch> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
