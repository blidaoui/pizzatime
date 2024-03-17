import React from 'react';
import { Carousel } from 'antd';
import { useRouter } from "next/navigation"; 
import { setId } from '@/app/components/store';
import { ListShop } from '@/app/const/ListShop';
import Link from 'next/link';
import Icons from '@/app/components/Icons/Icons';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
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

const App: React.FC = () => (
  <Carousel autoplay>
    <div>
    {Object.values(ListShop).map((item: any, index: number) => { 
            const isOpen = isShopOpen(index); 
            return (
      <div style={contentStyle}>   <div
      key={index} 
      onClick={() => navigateToOtherPage(item.shopid)}
     
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
   </div>
    )})}
    </div>
 </Carousel>
 );
export default App;