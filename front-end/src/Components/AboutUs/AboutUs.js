import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <header className="about_header">
        <h1 className="header_title">About Us</h1>
        <h6 className="header_slogan"> Wander - Explore - Discover </h6>
      </header>
      <div className="tittle">
        <h1>Who We Are</h1>
        <hr />
      </div>
      <main className="about_main">
        <div className="main_desc">
          <div className="main_text">
            <p id="p_one">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              quaerat atque corporis asperiores mollitia perspiciatis iusto et
              laboriosam blanditiis! Excepturi velit, reiciendis dolores autem
              iste quas magni, veniam numquam quaerat ipsa quisquam.{" "}
            </p>
            <p id="p_two">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              alias repellat a. Itaque et consequatur amet eos! Unde
              accusantium, dolorum praesentium animi adipisci aut, nesciunt qui
              voluptatum natus totam distinctio dolor.
            </p>
          </div>
          <div className="main_img"></div>
        </div>
      </main>
      <footer className="footer_container">
        <div className="footer_header">
          <h1>Travel Tips</h1>
        </div>
        <hr />
        <div className="boxes_container">
          <div className="box" id="one">
            <h6>Hotel</h6>
            <div>
              <ul className="spend_tips">
                <li>Uses booking portals</li>
                <li>check for status match</li>
                <li>apply for hotel credit cards</li>
              </ul>
            </div>
          </div>
          <div className="box" id="two">
            <h6>Earn</h6>
            <div>
              <ul className="earn_tips">
                <li>Sign up for rewards programs</li>
                <li>Pay with the right card</li>
                <li>Buy Points when possible</li>
              </ul>
            </div>
          </div>
          <div className="box" id="three">
            <h6>Travel</h6>
            <div>
              <ul className="travel_tips">
                <li>Use Google flight to book flight</li>
                <li>Be flexible with your travel date</li>
                <li>Buy basic economic tickets</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default AboutUs;
