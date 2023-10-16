import React from "react";
export default function Header() {
  return (
    <div className="Hearder_container">
      <div className="Logo_container">
        <p className="Logo_T">T</p>
        <p className="Logo_Treact">Treact</p>
      </div>
      <div className="option">
        <p className="list">About</p>
        <p className="list">Blog</p>
        <p className="list">location</p>
        <p className="list">Pricing</p>
      </div>
      <div >
        <button className="button" >Hire Us</button>
      </div>
    </div>
  );
}
