import React from "react";
import Testimonialcard from "./Testimonialcard";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonials</h2>
      <section>
        <Testimonialcard
          name={"Sanskar"}
          feedback={"Your concepts are very good"}
        />
        <Testimonialcard
          name={"Vijay"}
          feedback={"Yours portfolio is amazing"}
        />
        <Testimonialcard
          name={"Sanchit"}
          feedback={"Web development is only made for you"}
        />
      </section>
      
    </div>
  );
};

export default Testimonial;
