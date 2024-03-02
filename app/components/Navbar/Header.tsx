"use client"
import React from "react";
import Image from "next/image";
import i1 from "@/public/image/i1.jpg";
import DropDownMenu from "../DropDown/DropDownMenu";

const HeaderNav = () => {
  return (
    <div className="mt-3 mb-3">
      <div>
        <nav>
          <a href="/">
        <div className="container-fluid" >
         <div className="container">
              <div className="logo">
                
                  <Image
                    src={i1}
                    width={80}
                    height={80}
                    alt="LOGO"
                    className="cursor-pointer"
                  />
               
                 
              </div> 
            </div>
          </div></a>
          <DropDownMenu />
        </nav>
      </div>
    </div>
  );
};

export default HeaderNav;
