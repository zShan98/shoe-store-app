import React from "react";

export const SellerHeader = (props) => {
  return (
    <header>
      <div className="Sheader">
        <div className="logo">
          <img src={props.image} alt="Brand Logo" />
        </div>
      </div>
    </header>
  );
};
