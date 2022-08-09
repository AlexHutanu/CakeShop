import BottomArrowIcon from '../../../icons/BottomArrowIcon'
import CakeDescription from '../../ProductsInfo/CakeDescription'
import CakesInfo from '../../ProductsInfo/CakesInfo'
import Cake from './Cakes'
import { cakesArray } from '../../constants/cakes'


export default () =>
   <div className="category-list">
      <div className="category-list__information">
         {/*<p>*/}
         {/*   <mark className="orange"> Tortul insiropat</mark>*/}
         {/*   &nbsp;*/}
         {/*   vine in diverse combinatii de arome in functie de blatul ales. <br/>*/}
         {/*   Blatul de vanilie poate avea crema de: <mark className="orange">Iaurt cu fructe de*/}
         {/*   padure</mark> si ciocolata alba / pepene galben sau <mark className="orange">Ciocolata*/}
         {/*   alba </mark> si amarene / capsuni / zmeura / cocos / vanilie cu profiterol <br/>*/}
         {/*   Blatul de cacao poate avea crema de: <mark className="orange">Cicolata neagra</mark> si*/}
         {/*   ciocolata alba cu fructe de padure / ciocolata alba / ciocolata alba si zmeura / visine*/}
         {/*   si vanilie / mango / capsuni / zmeura sau <mark className="orange">ciocolata cu*/}
         {/*   menta</mark> si ciocolata alba cu fructe de padure sau <mark*/}
         {/*   className="orange">ciocolata</mark> si diplomat / amarene*/}
         {/*</p>*/}
         <CakeDescription />
         <p>
            <mark className="orange">Tortul personalizat</mark>
            &nbsp;
            lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aspernatur atque
            corporis deleniti earum eius explicabo ipsum praesentium sequi?
         </p>
         <div className="category-list__information__arrow">
            <BottomArrowIcon/>
         </div>
      </div>
      <div className="category-list__products">
         {cakesArray.map((cake, id) => {
            const { type, image, info: { composition, recommendation, price } } = cake
            return <Cake
               key={id}
               type={type}
               image={image}
               price={`${price}`}
               info={<CakesInfo
                  composition={composition}
                  recommendation={recommendation}
               />
               }
            />
         })}
      </div>
   </div>

