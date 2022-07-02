import { useNavigate } from "react-router-dom";
import React from "react";
import HomeImage from "../../assets/home-image.svg";
import "./Home.css";

export default function Home() {
    const navigate = useNavigate();

  return (
    <div className="home-container">
      <h2>Welcome To The Best Note-App</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu
        dui. Lorem ipsum dolor sit amet, consectetur adipisce placerat mauris
        nisl. Proin vitae urna eu sem pellentesque laoreet.
      </p>
      <img src={HomeImage} alt="home" />
      <button onClick={() => navigate("/notes")}>Go to Notes</button>
    </div>
  );
}
