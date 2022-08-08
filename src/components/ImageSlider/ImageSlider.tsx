import { useState } from 'react'
import LeftArrowIcon from '../../icons/LeftArrowIcon'
import RightArrowIcon from '../../icons/RightArrowIcon'
import SliderProps from './interface'


export default ( { slides }: SliderProps) => {

   const [ currentIndex, setCurrentIndex ] = useState<number>(0)

   const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
      setCurrentIndex(newIndex)
   }

   const goToNext = () => {
      const isLastSlide = currentIndex === slides.length - 1
      const newIndex = isLastSlide ? 0 : currentIndex + 1
      setCurrentIndex(newIndex)
   }

   return <div className="image-slider__wrapper">
      <div className="image-slider__arrow__left" onClick={() => goToPrevious()}>
         <LeftArrowIcon/>
      </div>
      <div className="image-slider__arrow__right" onClick={() => goToNext()}>
         <RightArrowIcon/>
      </div>
      <div className="image-slider" style={{ backgroundImage: `url(${slides[currentIndex].url}` }}>
      </div>
   </div>
}