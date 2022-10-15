import React from "react";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const footer = () => {
  return (
    <footer>
      <div>
        <h2>MBA Burger Wala</h2>

        <p>We are trying to give you the best taste possible</p>
        <br />
        <em>We give attention to genuine feedback</em>

        <strong>All Rights reserved @RishiiRaj</strong>
      </div>
      <aside>
        <h4>Follow me</h4>
        <a href="https://www.instagram.com/rishi.__.raj/">
          <AiFillInstagram />
        </a>
        <a href="https://www.linkedin.com/in/RishiiRaj12">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/RishiiRaj">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default footer;
