"use client"
import React from 'react';
import { useRouter } from "next/navigation";
import { card } from './constants/constants';
import Navbar from './components/Navbar';
import ImgHeader from './components/ImgHeader';
import Icons from './components/Icons/Icons';
import { setId } from './components/store';
import Link from 'next/link';

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
     <div className="container " role="button"  >
      <Link href='/components/Boutiques'> 
       <div className="row ">
        {Object.values(card.shoplist).map((item: any, id: number) => (
          <div key={id} onClick={()=>navigateToOtherPage(id)}className="col-sm-3 my-3" >
             <div className="card " style={{ width: "18rem" }} >
            <img src={item.image} alt="Card image cap" className="card-img-top" />
            <div className="card-body">
            <p className="card-title">{item.Company} </p>
            <p>
              {" "}
              {item.Address},{item.PostalCode} {item.town}
            </p>
            <Icons/>
          </div> </div></div>
        ))}
    </div>
     </Link>
      </div> 
       </div>   
  );
}
