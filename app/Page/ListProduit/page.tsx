import React from 'react' 
import ItemCategorie from './produit'
import MenuCategorie from '../Boutique/MenuCategorie'
import Header from '../Boutique/Header'
import HeaderNav from '@/app/components/Navbar/Headerpanier'
 function ListProduit() {
  return (
    <div>
      <a href='/'><HeaderNav/></a> 
        <Header />
        <MenuCategorie />
        <ItemCategorie/>
        
    </div>
  )
}
export default ListProduit