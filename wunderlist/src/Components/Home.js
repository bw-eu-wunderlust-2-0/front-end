import React from "react";
import styled from "styled-components";
import Login from "./Login";
import Register from "./Register";
import { Route } from "react-router-dom";
import TodoList from "../Components/TodoList";
import PrivateRoute from "../Utils/PrivateRoute";
// import { axiosWithAuth } from "../Utils/axiosAuth";

function Home(props) {
  const Wrapper = styled.div`
    background: linear-gradient(purple, red);
    min-height: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Wrapper>
      <Route exact path="/" component={Login} />
      <Route exact path="/Register" component={Register} />
      <PrivateRoute exact path="/list-of-todos" component={TodoList} />
    </Wrapper>
  );
}

export default Home;
