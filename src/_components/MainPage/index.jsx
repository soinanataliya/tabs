import React from 'react';
import './MainPage.css';
import {
  Switch,
  Link,
  Route
} from "react-router-dom";
import { withRouter } from "react-router";
import { New } from '../New';
import { History } from '../History';

export class MainPage extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="MainPage">
        <div className="tabs">
          <Link to="/history"
            className={"tab " + (this.props.location === "/history" ? "active-tab" : "")} >
            История заявок
          </Link>
          <Link to="/new"
            className={"tab " + (this.props.location === "/new" ? "active-tab" : "")}>
            Создать заявку
          </Link>
        </div>
        <Switch>
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
