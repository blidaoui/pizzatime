"use client";
import React from "react";
import Image from "next/image";
import i1 from "@/public/image/i1.jpg";
import DropDownMenu from "../DropDown/DropDownMenu";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const HeaderNav = () => {
  return (
    <div className="mt-3 mb-3">
            <ToastContainer limit={1} /> 
        
      <div>
        <nav>
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
          
             
              <a href={"/cart"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" cart cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </a>
              </div>
            </div>
          </div>
          <DropDownMenu />
        </nav>
      </div>
    </div>
  );
};

export default HeaderNav;
