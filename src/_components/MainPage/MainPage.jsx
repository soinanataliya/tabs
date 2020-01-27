import React from 'react';
import './MainPage.css';
import {
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";
import { withRouter } from "react-router";
import { New } from '../New';
import { History } from '../History';

export class MainPage extends React.Component {
  render() {
    return (
      <div className="MainPage">
        <div className="tabs">
          <Link to="/history"
            className={"tab " + (this.props.location.pathname === "/history" ? "active-tab" : "")} >
            История заявок
          </Link>
          <Link to="/new"
            className={"tab " + (this.props.location.pathname === "/new" ? "active-tab" : "")}>
            Создать заявку
          </Link>
        </div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/history" />
          </Route>
          <Route path="/new">
            <New />
          </Route>
          <Route path="/history">
            <History />
          </Route>
        </Switch>
      </div>
    )
  }
}
export default withRouter(MainPage)