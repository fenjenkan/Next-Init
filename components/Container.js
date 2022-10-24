import React from "react";
import Navigation from "./Navigation";
import Head from "next/head";

const Container = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.15.10/dist/css/uikit.min.css"/>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.15.10/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.15.10/dist/js/uikit-icons.min.js"></script>
      </Head>
      <Navigation />
      <div className="uk-container uk-container-expand">
        {props.children}
      </div>
      
    </div>
  );
};

export default Container;
