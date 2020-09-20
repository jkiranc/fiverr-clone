import React from "react";
import "./gridcard.css";

const Gridcard = ({ userData }) => {
  return (
    <div className="gridCard">
      <div className="container">
        <div className="gridCard_image">
          <img className="gridCard_slider" src={userData.image} alt="" />
        </div>
        <div className="gridCard_info">
          <div className="gridCard_profile_img">
            <img
              className="sellerpic"
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/17039415/original/11998855_846577825460757_3904954703175407382_n.jpg"
              alt=""
            />
          </div>
          <div className="gridCard_sub">
            <p className="sellername">Lvtrees</p>
            <p className="sellerrating">Top Rated Seller</p>
          </div>
          
        </div>
          <div className="gridCard_title">
            <h3>{userData.title}</h3>
            
          </div>
          <div className="gridCard_rating">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width={15} height={15}><path fill="#ffbf00" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" /></svg>
          {userData.rating}.0 <span>({userData.review})</span>
          </div>
          <div className="gridCard_price">
            <div className="gridCard_price_left">
            <svg width={20} fill="#b5b6ba" height={20} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z" /></svg>

            </div>
            <div className="gridCard_price_right">
              <small>STARTING AT</small>
              <p>{userData.price}</p>

            </div>
          </div>
      </div>
    </div>
  );
};

export default Gridcard;
