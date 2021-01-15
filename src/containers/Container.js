import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "../components/Users";
import Page_404 from "../pages/Page_404";
import PostUser from "../components/PostUser";
import UpdateUser from "../components/UpdateUser";
import UserDetails from "../components/UserDetails";

export default function Container() {
  return (
    <div>
      <Switch>
        <Route exact path={["/", "/users"]} component={Users} />
        <Route exact path="/formUser" component={PostUser} />
        <Route exact path="/users/:userId" component={UserDetails} />
        <Route exact path="/edit/:userId" component={UpdateUser} />
        <Route component={Page_404} />
      </Switch>
    </div>
  );
}
