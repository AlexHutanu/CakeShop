import React, { MutableRefObject, useEffect, useRef, useState } from 'react'

import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar/NavBar'
import Product from '../../components/Product'
import ProductsShowcase from '../../components/ProductsShowcase'


export default () => {

   const [ showCakes, setShowCakes ] = useState<boolean>(true)
   const [ showCookies, setShowCookies ] = useState<boolean>(false)
   const [ showBakery, setShowBakery ] = useState<boolean>(false)
   const [ showIceCream, setShowIceCream ] = useState<boolean>(false)
   const [ showCandyBar, setShowCandyBar ] = useState<boolean>(false)

   const productsSection = useRef(null)

   const displayProducts = () => showCakes || showCookies || showIceCream || showBakery || showCandyBar

  enum Products {
    CAKES = 'Torturi',
    COOKIES = 'Prajituri',
    BAKERY = 'Brutarie',
    ICE_CREAM = 'Inghetata',
    CANDY_BAR = 'CandyBar'
  }

  const showProducts = (category: Products) => {
    setShowCakes(false)
    setShowCookies(false)
    setShowBakery(false)
    setShowIceCream(false)
    setShowCandyBar(false)
     switch (category) {
        case Products.CAKES:
            setShowCakes(true)
            break
        case Products.COOKIES:
            setShowCookies(true)
            break
        case Products.CANDY_BAR:
            setShowCandyBar(true)
            break
        case Products.BAKERY:
            setShowBakery(true)
            break
        case Products.ICE_CREAM:
            setShowIceCream(true)
            break
        default:
            break
     }
    gotoElement(productsSection)
  }

  const products = [
      {
       name: Products.CAKES,
       image: 'weedingCake.avif',
       show: () => showProducts(Products.CAKES)
     },
     {
      name: Products.COOKIES,
      image: 'macarons.avif',
      show: () => showProducts(Products.COOKIES)
    },
     {
      name: Products.BAKERY,
      image: 'placinte.jpg',
      show: () => showProducts(Products.BAKERY)
    },
     {
      name: Products.CANDY_BAR,
      image: 'candyBar.jpg',
      show: () => showProducts(Products.CANDY_BAR)
    },
    {
      name: Products.ICE_CREAM,
      image: 'iceCream.jpg',
      show: () => showProducts(Products.ICE_CREAM)
    }
]

   const gotoElement = (section: MutableRefObject<any>) => {
     section.current && section.current.scrollIntoView({ behavior: 'smooth' })
   }

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <div className="catalog-page__wrapper">
         <NavBar/>
         <div className="catalog-page">
            <div className="catalog-page__categories">
              {products.map(({name, image, show}, index) =>
                <Product key={index} name={name} image={image} showProduct={show}/>)}
            </div>
            <div ref={productsSection}>
            {displayProducts() &&
              <ProductsShowcase
                showCakes={showCakes}
               showCookies={showCookies}
               showBakery={showBakery}
               showIceCream={showIceCream}
               showCandyBar={showCandyBar}/>}
            </div>
         </div>
      </div>
   )
}