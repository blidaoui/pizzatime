"use client"
import React from "react";
import { useRouter } from "next/navigation"; 
import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";
import ImgHeader from "./components/imageHeader/ImgHeader";
import Icons from "./components/Icons/Icons";
import  { setId } from "./components/store";
import Header from "./components/Navbar/Header";
import { ListShop } from "./const/ListShop";



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
    <div  >
       
      <Header />
      <ImgHeader />
      <Navbar />
      <div className="container" role="button" >
        <div className="row row-cols-1 row-cols-md-4">
          {Object.values(ListShop).map((item: any, index: number) => { 
            const isOpen = isShopOpen(index); 
            return (
              <div
                key={index} 
                onClick={() => navigateToOtherPage(item.shopid)}
                className="col-sm-3 my-3"
              >
                <div className="card" style={{ width: "18rem" }}>
                  <Link href="/components/Boutiques">
                    <img
                      src={item.image}
                      alt=""
                      className="card-img-top"
                    />
                  </Link>
                  <div className="card-body">
                    <p className="card-title">{item.Company}</p>
                    <p
                      style={{
                        display: "inline",
                        color: isOpen ? "green" : "red",
                      }}
                    >
                      {isOpen ? "Ouvert" : "Fermé"}
                    </p>
                    <p>
                      {item.Address}, {item.PostalCode} {item.town}
                    </p>
                    <Icons />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
     
    </div>
 
  );
}
