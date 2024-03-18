"use client"
import React from "react";
import { useRouter } from "next/navigation"; 
import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";
import ImgHeader from "./components/imageHeader/ImgHeader";
import Icons from "./components/Icons/Icons";
import  { setId } from "./components/store";
import { ListShop } from "./const/ListShop";
import HomeHeader from "./components/Navbar/HomeHeader";

export default function Home() {
  const router = useRouter();
  const isShopOpen = (id: number) => {
    if (id === 0 || id === 2) {
      return true;
    } else {
      return false;
    }
  };
  const navigateToOtherPage = (id: number) => {
    setId(id);
    localStorage.setItem("id", id.toString());
    router.push("/components/Boutiques");
  };

  return (
    <div>
      <HomeHeader/>
      <ImgHeader />
      <Navbar />
      <div className="container" role="button">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {Object.values(ListShop).map((item: any, index: number) => {
              const isOpen = isShopOpen(index);
              return (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <div className="card">
                    <Link href="/components/Boutiques">
                      <img src={item.image} alt=""  className="card-img-top"/>
                    </Link>
                    <div className="card-body">
                      <p className="card-title">{item.Company}</p>
                      <p style={{ display: "inline", color: isOpen ? "green" : "red" }}>
                        {isOpen ? "Ouvert" : "Fermé"}
                      </p>
                      <p>{item.Address}, {item.PostalCode} {item.town}</p>
                      <Icons />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
