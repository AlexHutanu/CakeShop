import { useEffect } from 'react'
import ProductProps from './interface'


export default ({ showProduct, image, name }: ProductProps) => {

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return <div className="categories__element"
               onClick={showProduct}>
      <div className="categories__element__image">
         <img src={`./${image}`} alt="product image"/>
      </div>
      <div className="categories__element__category">
         <p className="categories__element__category__name">{name}</p>
      </div>
   </div>
}