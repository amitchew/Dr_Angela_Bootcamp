import React from "react";
import ReactDOM from "react-dom";
const name = "Your name";
const copy = "2021";
ReactDOM.render(
  <div>
    <p>{name} </p>
    <p>{copy}</p>
  </div>,
  document.getElementById("root")
);

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
