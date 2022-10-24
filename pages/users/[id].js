import React from "react";
import { useRouter } from "next/router";
import Users from "../../components/Users";
import fetch from "isomorphic-fetch";
import Container from "../../components/Container";

const User = ({user}) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container>
      <div className="uk-child-width-1-2@m uk-text-center" data-uk-grid>
        <div>
          <div className="uk-card uk-card-default uk-card-header">
            <h5 className="uk-card-title">{user.name}</h5>
          </div>
          <div className="uk-card uk-card-default uk-card-body">{user.email}</div>
          <div className="uk-card-footer">{user.username}</div>
        </div>
        
      </div>
    </Container>
  );
};

User.getInitialProps = async (ctx) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${ctx.query.id}`
  );
  const data = await res.json();
  return { user: data };
};

export default User;
