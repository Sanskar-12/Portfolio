import React from "react";
import dp from "../assets/profile.webp";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={dp} alt="Founder" />
        <h2>Sanskar Vishwakarma</h2>
        <p>Motivation is Temporary, But Discipline Last Forever</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://www.youtube.com/@6PackProgrammer" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a
            href="https://www.youtube.com/@https://github.com/Sanskar-12"
            target={"blank"}
          >
            <AiFillGithub />
          </a>
          <a href="https://www.instagram.com/__sanskar______/" target={"blank"}>
            <AiFillInstagram />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
