import  Router  from "next/router";
import React from "react";

const Users = (props) => {
  console.log(props);
  return (
    <div>
      {props.users.map((user) => (
        <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m" key={user.id} onClick={e => Router.push("/users/[id]",`/users/${user.id}`)}>
          <h5 className="uk-card-title">{user.name}</h5>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
