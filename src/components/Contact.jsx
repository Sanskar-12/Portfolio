import React, { useState } from "react";
import vg from "../assets/vg.png";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disablebtn,setDisablebtn]=useState(false)

  const submithandler = async (e) => {
    e.preventDefault();
    setDisablebtn(true)
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
      });
      setName("")
      setEmail("")
      setMessage("")
      toast.success("Message Sent");
      setDisablebtn(false)
    } catch (error) {
      toast.error("Error")
      setDisablebtn(false)
    }
  };

  const animation = {
    form: {
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
        x: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="contact">
      <section>
        <motion.form  onSubmit={submithandler} {...animation.form}>
          <h2>Contact</h2>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Your Query"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <motion.button type="submit" {...animation.button} disabled={disablebtn} className={disablebtn ? "disablebtn" : ""}>
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="Img" />
      </aside>
    </div>
  );
};

export default Contact;
