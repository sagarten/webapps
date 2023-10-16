import React from "react";
import video from "../Image/video.mp4";

export default function HomeBody() {
  return (
    <div className="homeBody_container">
      <div className="homeBody_Left">
        <p className="we_have">We have now launched operations in Europe</p>
        <p className="hireUS">Hire the best</p>
        <div className="Marketing">
        
          <p >Marketing Team</p>
        </div>
        <button className="Read_button">Read Customer Stories</button>
      </div>
      <video width="640" height="360" controls loop autoPlay>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
