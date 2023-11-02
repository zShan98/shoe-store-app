import React from "react";
// import { Link } from "react-router-dom";
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const List = (props) => {
  return (
    <>
      <li>
        <i class={props.icon}></i>
        <a href={props.path}>{props.option}</a>
      </li>
    </>
  );
};

export default List;
