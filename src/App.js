import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import GlobalStyle from "./globalStyles";
import Dropdown from "./Components/Dropdown";
import Footer from "./Components/Footer";
import { Switch, Route, Link } from "react-router-dom";
import { menuData } from "./Data/MenuData";
import Home from "./Pages/Home";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        {menuData.map((item) => (
          <Route
            exact
            path={item.link}
            component={item.component}
          />
        ))}
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
