import React from "react";
import "./footer.css";

import Boxes from "../Footer-boxes/boxes";
import NewsLetter from "../NewsLetter/newsletter";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="footer">
      <NewsLetter />
      <div className="big">
        <div className="logoName">
          <h5>onCampus Kicks</h5>
          <br />
          <p>your personal brand</p>
        </div>
        <Boxes
          title="Products"
          links={[
            "Best Seller",
            "WishList",
            "Featured Products",
            "Trending Products",
          ]}
        />
        <Boxes
          title="Our Company"
          links={[
            "Search",
            "Contact Us",
            "Delivery",
            "Terms & conditions of Use",
          ]}
        />
        <Boxes
          disable="true"
          title="Store Information"
          links={[
            "Shoes Store, Near Road, Karachi",
            "+921234567891",
            "shoes@store.com",
            ".",
          ]}
          icons={[<LocationOnIcon />, <PhoneIcon />, <EmailIcon />]}
        />
      </div>
      {/* <div className="small">
        <p>Copyright &copy; Shoes 2023</p>
        <p>
          Powered by{" "}
          <span role="img" aria-labelledby="heart">
          ⚡
          </span>{" "}
          onCampus Kicks
        </p>
      </div> */}
    </div>
  );
};

export default Footer;
