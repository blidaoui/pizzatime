import React from 'react'
import Header from './Header'
import MenuCategorie from './MenuCategorie'
import CardCategorie from './CardCategorie'
import HeaderNav from '@/app/components/Navbar/Header'
import ItemCategorie from './ItemCategorie'

function Boutique() {
  return (
    <div>
      <HeaderNav/>
      <Header />
      <MenuCategorie />
      <ItemCategorie/>
      <CardCategorie />
    </div>
  )
}

export default Boutique
