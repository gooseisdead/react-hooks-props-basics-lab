import React from "react";
import Links from './Links'
import user from "../data/user";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.user.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <p><Links github={user.links.github} linkedin={user.links.linkedin} /></p>

    </div>
  );
}

export default About;
