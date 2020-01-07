import React from "react";
import "./App.css";
import styled from "styled-components";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodoList from "./TodoList";

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
      {/* <Login /> */}
      {/* <Register /> */}
      <TodoList />

      <Route exact path="/Register" component={Register} />
    </Wrapper>
  );
}

export default Home;
