import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import jwt_decode from "jwt-decode";
import store from "./store";

//import actions/functions
import { setCurrentUser, logoutUser } from "./actions/authActions";
import setAuthToken from "./utils/setAuthToken";

//import components
//layout comps
import Header from "./components/Header";
import HeaderBackground from "./components/HeaderBackground";
import Footer from "./components/Footer";
import NavButton from "./components/NavButton";

//post comps
import Posts from "./components/Posts";
import Post from "./components/Post";

//private comps
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

//set up token info
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  //decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //Logout user
    store.dispatch(logoutUser());
    //redirect to login
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="">
            <div className="grid">
              <NavButton />
              <HeaderBackground />
              <Header />
              <Route exact path="/" component={Posts} />
              <Route exact path="/posts/:post_id" component={Post} />

              <Route exact path="/admin" component={Login} />
              <Switch>
                <PrivateRoute
                  exact
                  path="/admin/dashboard"
                  component={Dashboard}
                />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
