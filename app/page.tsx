"use client"
import React from 'react';
import { useRouter } from "next/navigation";
import { card } from './constants/constants';
import Navbar from './components/Navbar';
import ImgHeader from './components/ImgHeader';
import Icons from './components/Icons/Icons';
import { setId } from './components/store';

export default function Home() {
  const router = useRouter();
  const navigateToOtherPage = (id:number) => {
     setId(id)
    localStorage.setItem("id",id.toString())
    router.push('/components/Boutiques');
  };
  return (
   <div>
    <ImgHeader/>
    <Navbar />
     <div className="containers" role="button" >
        {Object.values(card.shoplist).map((item: any, id: number) => (
          <div key={id} onClick={()=>navigateToOtherPage(id)}>
            <img src={item.image} alt={`Produit`} className="image" />
            <p>{item.Company} </p>
            <p>
              {" "}
              {item.Address},{item.PostalCode} {item.town}
            </p>
            <Icons/>
          </div>
        ))}
      </div>
   
   </div>
   
  );
}
