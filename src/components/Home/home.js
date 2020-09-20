import React from "react";
import "./styles.css";
import Header from "./header";
import {
 Link
} from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home_section1">
        <Header />
        <div className="home_mini_container">
          <div className="home_container">
            <h1 className="home_title">
              Find the perfect <i>freelance</i>
              <br />
              services for your business
            </h1>
            <div className="home_form">
              <input
                className="home_form_input"
                placeholder='Try "building mobile app"'
              />
              <button class="home_form_input_button">Search</button>
            </div>
            <div className="home_popular">
              Popular:
              <ul>
                <li><Link to="/category/webandMobile">Web and Mobile Design</Link></li>
                <li><Link to="/category/wordpress">WordPress</Link></li>
                <li><Link to="/category/logodesign">Logo Design</Link></li>
                <li><Link to="/category/dropshipping">Dropshipping</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
