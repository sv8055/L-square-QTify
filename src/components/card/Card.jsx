import React from "react";
import "./Card.css";

const Card = ({ album }) => {
    
  return (
    <div className="card">
      <div>
        <img src={album.image} alt={album.title} className="card_image" />
        <div className="card_body">
          <span>{album.followers} Follows</span>
        </div>
      </div>

      <div className="card_footer">
        <p>{album.title}</p>
      </div>
    </div>
  );
};

export default Card;
