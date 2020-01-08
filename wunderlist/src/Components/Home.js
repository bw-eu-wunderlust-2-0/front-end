import React from "react";
import styled from "styled-components";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import TodoList from "./TodoList";
import PrivateRoute from "../Utils/PrivateRoute";

function Home(props) {
  const Wrapper = styled.div`
    background: linear-gradient(red, blue);
    min-height: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Wrapper>
      {/* <Switch> */}
      <Route exact path="/" component={Login} />
      {/* <Register /> */}
      {/* <TodoList /> */}
      <Route exact path="/Register" component={Register} />

      <PrivateRoute exact path="/list-of-todos" component={TodoList} />
      {/* </Switch> */}
    </Wrapper>
  );
}

export default Home;
