import React from 'react' 
import ItemCategorie from './produit'
import MenuCategorie from '../Boutique/MenuCategorie'
import Header from '../Boutique/Header'
import HeaderNav from '@/app/components/Navbar/Header'
 function ListProduit() {
  return (
    <div>
       <HeaderNav/>
        <Header />
        <MenuCategorie />
        <ItemCategorie/>
        
    </div>
  )
}
export default ListProduit