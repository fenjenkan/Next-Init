import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="uk-navbar-container uk-margin" uk-navbar="">
      <div className="uk-navbar-center">
        <div className="uk-navbar-center-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <Link href="/"><a>Home</a></Link>
            </li>
            <li className="uk-active">
              <Link href="/about">About</Link>
            </li>
            <li className="uk-active">
              <Link href="/services">Services</Link>
            </li>
          </ul>
        </div>
        <a className="uk-navbar-item uk-logo" href="#">
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
