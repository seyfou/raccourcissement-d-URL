import React from "react";
import "./home.css";
import Footer from "./Footer"
function Home() {
  return (
    <div className="home">
      <img
        className="ImHome"
        src="http://panaqa.fr/wp-content/uploads/2021/02/hotel-check-in-tabhotel-m3-hospitality-1-e1613214029131.jpg"
      />
      <div style={{padding:16}}>
  <h2  style={{
            fontFamily: "Dancing Script ,cursive",
            fontSize: "71px",
            marginBottom: "100px",
            marginLeft:"-100px",
            color: "yellow",
            textShadow: "1px 1px 1px #333",
          }}>Bienvenue {" "}</h2>
</div>
      <Footer/> 
    </div>

  );
}

export default Home;
