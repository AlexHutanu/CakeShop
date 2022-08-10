import CheckIcon from '../../../icons/CheckIcon'
import { iceCreamFlavoursArray } from '../../constants/iceCreamFlavours'


export default () => {

   return <div className="ice-cream">
      <div className="ice-cream__image-slides">
         <img src='iceCream1.jpg' alt='photo'/>
      </div>
      <div className="ice-cream__info">
         <p className="ice-cream__info__title">In dorinta de a fi cat mai aproape de clientii nostri
            am adaugat in oferta cofetariei si inghetata la cornet pentru a le readuce aminte de
            gustul copilariei. De asemenea ne am adaptat cerintelor pietei aducand o gama diversa de
            arome, disponibile cate 2 pe zi in functie de cererile si sugestiile clientilor.</p>
         <div className="ice-cream__flavours">
            {iceCreamFlavoursArray.map((flavour, id) => {
                  return (
                     <ul>
                        <li key={id} style={{ color: `${flavour.color}` }}>
                           <CheckIcon/> {flavour.flavour}
                        </li>
                     </ul>
                  )
               }
            )}
         </div>
         <div className="ice-cream__info__prices">
            <p className="ice-cream__info__prices__element">Cornet
               6 lei</p>
            <p className="ice-cream__info__prices__element">Pahar
               mic 8 lei</p>
            <p className="ice-cream__info__prices__element">Pahar
               mare 10 lei</p>
         </div>
      </div>
   </div>
}