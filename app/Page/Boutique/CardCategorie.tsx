import store from '@/app/components/store';
import { card } from '@/app/constants/constants'
import React from 'react'
import { useSnapshot } from 'valtio';
function CardCategorie() {
  const {id}= useSnapshot(store)  
  const categorieShop:any = Object.values(card.categories).filter((el:any)=>el.shopid===id);
  console.log("list",Object.values(card.categories),"id",id,"categorieShop",categorieShop);
  return (
<div className="container">
<div className="row">
    {categorieShop.map((value:any,key:number) => (
     <div className="col-sm my-3">
     <div className="card" style={{ width: '18rem' }}>
     <img className="card-img-top" src={value.imageUrl.Default.urlDefault ? value.imageUrl.Default.urlDefault :"https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/3/web/Famille122.webp" } alt="Card image cap" />
     <div className="card-body">
      <h5 className="card-title">{value.title}</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
   </div>
     </div> 
))};
</div>
</div>
)};
export default CardCategorie
