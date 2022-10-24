import React from "react";
import Container from "../components/Container";
import fetch from "isomorphic-fetch"
import Users from "../components/Users";

const index = (props) => {
  return (
    <Container title="Home">
      <h1>Home</h1>
      <Users users={props.users}/>
    </Container>
  );
};

index.getInitialProps = async (ctx) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return { users: data };
  
};

export default index;
