import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 w-full bg-[#5BA835]">
      <div className="container flex justify-center items-center">
        <p className="">
          POLLIWOG © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
