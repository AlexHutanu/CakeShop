import CakesInfo from '../../ProductsInfo/CakesInfo'
import Cake from './Cakes'
import { cakesArray } from '../../constants/cakes'


export default () =>
   <div className="category-list">
      <div className="category-list__information">
         <p>
            <mark className="orange"> Tortul insiropat</mark> &nbsp;
            dolor sit amet, consectetur adipisicing elit. Accusantium asperiores culpa
            dolorem eaque expedita, facilis maiores nam nisi nobis non quasi rem sint veniam. A
            atque blanditiis, cum dicta dolores doloribus eos excepturi hic ipsam maxime mollitia
            nam obcaecati repellendus.
         </p>
         <p>
            <mark className="orange">Tortul personalizat</mark> &nbsp;
             lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aspernatur atque
            corporis deleniti earum eius explicabo ipsum praesentium sequi?
         </p>
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

