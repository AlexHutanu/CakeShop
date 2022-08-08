import CheckIcon from '../../../icons/CheckIcon'
import { iceCreamFlavoursArray } from '../../constants/iceCreamFlavours'
import ImageSlider from '../../ImageSlider'


export default () => {

   const iceCreamImagesSlides = [
      { url: './iceCream1.jpg', title: 'Pepene galben & Ciocolata' },
      { url: './iceCream2.jpg', title: 'Pepene galben' },
      { url: './iceCream3.jpg', title: 'Capsuni' }
   ]

   return <div className="ice-cream">
      <div className="ice-cream__image-slides">
         <ImageSlider slides={iceCreamImagesSlides}/>
      </div>
      <div className="ice-cream__info">
         <p className="ice-cream__info__title">Inghetata
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum laboriosam
            qui recusandae rem tenetur. Aut deserunt in laudantium numquam
            repellendus.</p>
         <div className="ice-cream__info__prices">
            <p className="ice-cream__info__prices__element">Cornet
               6 lei</p>
            <p className="ice-cream__info__prices__element">Pahar
               mic 8 lei</p>
            <p className="ice-cream__info__prices__element">Pahar
               mare 10 lei</p>
         </div>
      </div>
      <div className="ice-cream__flavours">
         {iceCreamFlavoursArray.map((flavour, id) => {
               return (
                  <ul>
                     <li key={id} style={{color: `${flavour.color}`}}>
                        <CheckIcon/> {flavour.flavour}
                     </li>
                  </ul>
               )
            }
         )}
      </div>
   </div>
}