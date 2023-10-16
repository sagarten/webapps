import React from "react";
import image from "../Image/record.jpg";

export default function TrackRecord() {
  return (
    <div className="Record">
      <div className="Image">
        <div>
          <img
            style={{
              height: "50rem",
            }}
            alt="Record"
            src={image}
          ></img>
        </div>
      </div>
      <div className="Image" style={{width:"50rem"}}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              font:"normal normal 600 18px/20px Work Sans",
              color: "#5f1bfc",
            }}
          >
            Our Track Record 
          </p>
          <div style={{ display: "flex", }}>
            <p
              style={{
                fontSize: "50px",
                fontWeight:"bold",
                color: "black",
                marginRight:"1rem",
                margin:"0rem",
              }}
            >
              we have been doing this since{" "}
              <p
             style={{
              display:"inline",
              fontSize: "50px",
              fontWeight:"bold",
              color: "#8237FF",
              margin:"0rem",
            }}>1999.</p>
            </p>
          
          </div>
          <p style={{
            
            margin:"0px"
          }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum earum
            suscipit possimus dignissimos provident veritatis sed ipsum fugiat
            omnis numquam. Natus sed cupiditate doloremque a iure perferendis
            fugiat, excepturi rerum.
          </p>
          <div style={{
            display:"flex",
          }}>
            <div style={{
              margin:"2rem 2rem 2rem 0rem"
            }}>
              <p
              style={{
                font:"normal normal 700 28px/20px Work Sans",
              }}
              >2282+</p>
              <p
              style={{
                font:"normal normal 600 24px/20px Work Sans",
                color:"#8237FF"
              }}
              >Clients</p>
            </div>
            <div
             style={{
              margin:"2rem"
            }}>
              {" "}
              <p style={{
                font:"normal normal 700 28px/20px Work Sans",
              }}>3891+</p>
              <p  style={{
                font:"normal normal 600 24px/20px Work Sans",
                color:"#8237FF"
              }}>Project</p>
            </div>
            <div
            style={{
              margin:"2rem"
            }}
            >
              {" "}
              <p style={{
                font:"normal normal 700 28px/20px Work Sans",
              }}>1000+</p>
              <p  style={{
                font:"normal normal 600 24px/20px Work Sans",
                color:"#8237FF"
              }}>Awords</p>
            </div>
          </div>
          <button className="button" style={{
            width:"8rem"
          }}>Learn More</button>
        </div>
      </div>
    </div>
  );
}
