import { card } from '@/app/constants/constants'
import { Card } from '@nextui-org/react'
import React from 'react'
function MenuCategorie() {
  return (
    <Card>
    <div className="d-flex justify-content-between">
    <div className='mt-2'>
    <ul style={{backgroundColor  :"#FFFFFF"}}>
      {Object.entries(card.categories) .slice(0, 10).map(([key, value] :any) => (
        <li key={key}>{value.title}</li>
      ))}
    </ul>
    </div>
    <div className='d-flex align-items-center'>
    <select className="max-w-xs nav-link mx-5"> 
    {Object.entries(card.categories) .slice(10, Object.keys(card.categories).length).map(([key, value] :any) => (
         <option key={key} value={value.title}> {value.title}</option>  
      ))}
 </select> 
  </div>
  </div>
  </Card>
  )
}
export default MenuCategorie
