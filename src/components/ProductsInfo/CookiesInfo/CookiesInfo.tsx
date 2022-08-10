import CheckIcon from '../../../icons/CheckIcon'
import ProductInfoProps from '../interface'


export default ({ composition, recommendation, image }: ProductInfoProps) => {
   return <div className="product-info">
      <div className="product-info__details">
         <div className="product-info__details__composition__wrapper">
            {composition.map((ingredient, id) => {
               return <div key={id} className="product-info__details__composition">
                  <div><CheckIcon/>
                     <p>{ingredient}</p>
                  </div>
               </div>
            })}
         </div>
         <div className='product-info__details__image'>
            <img src={image}  alt='photo'/>
         </div>
         <p className="product-info__details__recommendation">{recommendation}</p>
      </div>
   </div>


}