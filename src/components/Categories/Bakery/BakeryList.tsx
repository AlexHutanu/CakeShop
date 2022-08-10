import { MutableRefObject, useRef, useState } from 'react'
import BakeryInfo from '../../ProductsInfo/BakeryInfo'
import Bakery from './Bakery'
import { bakeryArray } from '../../constants/bakery'
import { fastingBakeryArray } from '../../constants/fastingBakery'


export default () => {

   const [ visibleBakery, setVisibleBakery ] = useState<boolean>(true)
   const [ visibleBakeryFast, setVisibleBakeryFast ] = useState<boolean>(false)

   const gotoElement = (section: MutableRefObject<any>) => {
      section.current && section.current.scrollIntoView({ behavior: 'smooth' })
   }

   const productsSection = useRef(null)

   return <>
      <div className="category-list">
         <div className="category-list__choosing">
            <div className="category-list__choosing__first-section"
                 onClick={() => {
                    setVisibleBakery(true)
                    setVisibleBakeryFast(false)
                    gotoElement(productsSection)
                 }}>
               <p className="category-list__choosing__first-section__name">
                  Brutarie
               </p>
            </div>
            <div className="category-list__choosing__second-section"
                 onClick={() => {
                    setVisibleBakeryFast(true)
                    setVisibleBakery(false)
                    gotoElement(productsSection)

                 }}>
               <p className="category-list__choosing__second-section__name">
                  De post
               </p>
            </div>
         </div>
         <div className="category-list__products" ref={productsSection}>
            {visibleBakery ?
               bakeryArray.map((bakery, id) => {
                  const { type, image, info: { composition, recommendation, price } } = bakery
                  return <Bakery key={id} type={type} image={image} price={`${price}`}
                                 info={<BakeryInfo composition={composition}
                                                   image={image}
                                                   recommendation={recommendation}
                                 />}/>
               })
               : null}
            {visibleBakeryFast ?
               fastingBakeryArray.map((cookie, id) => {
                  const { type, image, info: { composition, recommendation, price } } = cookie
                  return <Bakery key={id} type={type} image={image} price={`${price}`}
                                 info={<BakeryInfo composition={composition}
                                                   image={image}
                                                   recommendation={recommendation}
                                 />}/>
               })
               : null}
         </div>
      </div>
   </>
}