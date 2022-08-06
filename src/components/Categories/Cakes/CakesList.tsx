import CakesInfo from '../../ProductsInfo/CakesInfo'
import Cake from './Cakes'
import { cakesArray } from '../../constants/cakes'


export default () =>
   <div className="category-list">
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

