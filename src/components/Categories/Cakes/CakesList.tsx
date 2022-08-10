import BottomArrowIcon from '../../../icons/BottomArrowIcon'
import CakeDescription from '../../ProductsInfo/CakeDescription'
import CakesInfo from '../../ProductsInfo/CakesInfo'
import Cake from './Cakes'
import { cakesArray } from '../../constants/cakes'


export default () =>
   <div className="category-list">
      <div className="category-list__information">
         <CakeDescription />
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

