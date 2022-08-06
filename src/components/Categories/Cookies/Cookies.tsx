import { useState } from 'react'

import CloseIcon from '../../../icons/CloseIcon'
import CookiesProps from './interface'


export default ({ type, image, info }: CookiesProps) => {

   const [ visibleProducts, setVisibleProducts ] = useState<boolean>(false)
   const [ visibleInfo, setVisibleInfo ] = useState<boolean>(false)

   return <>
      <div className="category">
         <div
            className={`category__container ${visibleProducts ? 'category__container__visible' : ''}`}>
            <div className="category__container__primary-info"
                 onClick={() => setVisibleInfo(prev => !prev)}>
               <div className="category__container__primary-info__image">
                  <div className="category__container__primary-info__image__wrapper">
                     <div
                        className={`category__container__primary-info__image__wrapper__card ${visibleInfo ? 'category__container__primary-info__image__wrapper__card__visible-info' : ''}`}>
                        <div
                           className="category__container__primary-info__image__wrapper__card__image">
                           <img src={image} alt="photo"/>
                        </div>
                        <div
                           className="category__container__primary-info__image__wrapper__card__descriptions">
                           <h1>{type}</h1>
                           <div>
                              {info} </div>
                        </div>
                     </div>
                  </div>
               </div>
               <p className="category__container__primary-info__type"
                  onClick={() => setVisibleProducts(prev => !prev)}>{type}</p>
            </div>
         </div>
      </div>
      <div className={`mobile-info ${ visibleInfo ? 'mobile-info__visible': ''}`} onClick={ (e) => e.stopPropagation()}>
         <div className="mobile-info__header">
            <p className="mobile-info__header__title">
               {type}
            </p>
         </div>
         <div className="mobile-info__body">
            <div className="mobile-info__body__info">
               {info}
            </div>
            <div className="mobile-info__body__image">
               <img src={image} alt='cake image' />
            </div>
         </div>
         <div className="mobile-info__close-button" onClick={ () => setVisibleInfo(prev => !prev)}>
            <CloseIcon />
         </div>
      </div>

   </>
}

