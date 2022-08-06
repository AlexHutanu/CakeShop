import { MutableRefObject, useRef, useState } from 'react'
import CookiesInfo from '../../ProductsInfo/CookiesInfo'
import Cookies from './Cookies'
import { cookiesArray } from '../../constants/cookies'
import { fastingCookiesArray } from '../../constants/fastingCookies'


export default () => {

   const [ visibleCookies, setVisibleCookies ] = useState<boolean>(true)
   const [ visibleCookiesFast, setVisibleCookiesFast ] = useState<boolean>(false)

   const gotoElement = (section: MutableRefObject<any>) => {
      section.current && section.current.scrollIntoView({ behavior: 'smooth' })
   }

   const productsSection = useRef(null)

   return <>
      <div className="category-list">
         <div className="category-list__choosing">
            <div className="category-list__choosing__first-section"
                 onClick={() => {
                    setVisibleCookies(true)
                    setVisibleCookiesFast(false)
                    gotoElement(productsSection)
                 }}>
               <p className="category-list__choosing__first-section__name">
                  Prajituri
               </p>
            </div>
            <div className="category-list__choosing__second-section"
                 onClick={() => {
                    setVisibleCookiesFast(true)
                    setVisibleCookies(false)
                    gotoElement(productsSection)

                 }}>
               <p className="category-list__choosing__second-section__name">
                  De post
               </p>
            </div>
         </div>
         <div className="category-list__products" ref={productsSection}>
            {visibleCookies ?
               cookiesArray.map((cookie, id) => {
                  const { type, image, info: { composition, recommendation, price } } = cookie
                  return <Cookies key={id} type={type} image={image} price={`${price}`}
                                  info={<CookiesInfo composition={composition}
                                                     recommendation={recommendation}
                                  />}/>
               })
               : null}
            {visibleCookiesFast ?
               fastingCookiesArray.map((cookie, id) => {
                  const { type, image, info: { composition, recommendation, price } } = cookie
                  return <Cookies key={id} type={type} image={image} price={`${price}`}
                                  info={<CookiesInfo composition={composition}
                                                     recommendation={recommendation}
                                  />}/>
               })
               : null}
         </div>
      </div>
   </>
}