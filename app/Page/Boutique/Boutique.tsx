import React from 'react'
import Header from './Header'
import MenuCategorie from './MenuCategorie'
import CardCategorie from './CardCategorie'
import HeaderNav from '@/app/components/Navbar/Headerpanier'
import HomeHeader from '@/app/components/Navbar/HomeHeader'

function Boutique() {
  return (
    <div>
      <a href='/'><HomeHeader/></a>
      <Header />
      <MenuCategorie />
      <CardCategorie />
      
    </div>
  )
}

export default Boutique
