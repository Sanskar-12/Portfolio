import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png"

const Home = () => {
  const clientcount=useRef(null)
  const projectcount=useRef(null)

  const animationclientcount=()=>{
    animate(0,100,{
      duration:1,
      onUpdate:(v)=>(clientcount.current.textContent=v.toFixed())
    })
  }

  const animationprojectcount=()=>{
    animate(0,500,{
      duration:1,
      onUpdate:(v)=>(projectcount.current.textContent=v.toFixed())
    })
  }

  const animations = {
    h1: {
      intial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      intial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I am <br /> Sanskar Vishwakarma!
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:sanskarv2004@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>
          <article>
            <p>
              +<motion.span ref={clientcount} whileInView={animationclientcount}></motion.span>
            </p>
            <span>Clients Worldwide</span>
          </article>
          <aside>
            <article>
              <p>
                +<motion.span whileInView={animationprojectcount} ref={projectcount}></motion.span>
              </p>
              <span>Projects Made</span>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>sanskarv2004@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Sanskar"/>
      </section>
      <BsChevronDown/>
    </div>
  );
};

export default Home;
