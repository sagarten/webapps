import React from "react";
import "./Writing.css";
import image from "../Image/client.jpg";

const Love = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          margin: "2rem",
          width: "40rem",
        }}
      >
        <h1
          style={{
            font: "normal normal 600 24px/20px Work Sans",
            color: "#8237FF",
          }}
        >
          Testimonials
        </h1>
        <div className="title-container">
          <h2
            style={{
              font: "normal normal 700 55px/20px Work Sans",
              margin: "2rem 1rem 2rem 0rem",
            }}
          >
            Our Clients{" "}
          </h2>
          <h2
            style={{
              font: "normal normal 700 55px/20px Work Sans",
              margin: "2rem 1rem 2rem 0rem",
              color: "#8237FF",
            }}
          >
            {" "}
            Love Us
          </h2>
        </div>
        <div>
          <p
            style={{
              font: "normal normal  18px/20px Work Sans",
              margin: "2rem 1rem 2rem 0rem",
            }}
          >
            Here are what some of our amazing customers are saying about our
            marketing professionals. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illum earum suscipit possimus dignissimos
            provident veritatis sed ipsum fugiat omnis numquam. Natus sed
            cupiditate doloremque a iure perferendis fugiat, excepturi rerum.
          </p>
        </div>
        <div className="undtxt">
          <p>
            <span
              style={{
                color: "#8237FF",
              }}
            >
              "
            </span>
            Duis aute inure dolor in reprehendent in voluporuisy esse cillum
            ffdyee cupls csg official{" "}
            <span
              style={{
                color: "#8237FF",
              }}
            >
              "
            </span>
          </p>
        </div>
        <h1 style={{
              font: "normal normal 700 45px/20px Work Sans",
              color: "#8237FF",
            }}>Charlotte Halie</h1>
        <p>CEO, India</p>
      </div>
      <div
        style={{
          margin: "2rem",
          height: "30rem",
          width: "30rem",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          overflow: "hidden",
        }}
      >
        <img src={image} alt="image" />
      </div>
    </div>
  );
};

export default Love;
