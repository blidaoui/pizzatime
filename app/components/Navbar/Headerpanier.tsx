"use client";
import React from "react";
import Image from "next/image";
import i1 from "@/public/image/i1.jpg";
import DropDownMenu from "../DropDown/DropDownMenu"; 
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Dropdownpanier from "../DropDown/Dropdownpanier";



const HeaderNav = () => {
  return (
    <div className="mt-4 mb-4">
            <ToastContainer limit={1} />      
      <div>
        <nav className="">
          <div className="container-fluid">
            <div className="container">
              <div className="logo">
               
                <a href="/">
                  <Image
                    src={i1}
                    width={80}
                    height={80}
                    alt="LOGO"
                    className="cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex-container"><Dropdownpanier /> </div> 
      
        </nav>
      </div>
    </div>
  );
};

export default HeaderNav;
