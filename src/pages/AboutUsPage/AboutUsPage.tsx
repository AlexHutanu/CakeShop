import NavBar from '../../components/NavBar'
import FacebookIcon from '../../icons/FacebookIcon'
import InstagramIcon from '../../icons/InstagramIcon'
import PhoneIcon from '../../icons/PhoneIcon'
import PinIcon from '../../icons/PinIcon'
import RightArrowIcon from '../../icons/RightArrowIcon'
import { contactInfo } from '../../components/constants/contactInfo';


export default () => {

   return <div className="about-us__wrapper">
      <NavBar/>
      <div className="about-us">
         <div className="about-us__information">
            <div className="about-us__information__sections">
               <div
                  className="about-us__information__sections__section">
                  <div className="about-us__information__sections__section__arrow">
                     <RightArrowIcon/>
                  </div>
                  <div className="about-us__information__sections__section__container">
                     <p className="about-us__information__sections__section__container__title">
                        Informatii despre comenzi
                     </p>
                     <div
                        className="about-us__information__sections__section__container__details">
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex itaque magni
                           minus, nam nulla quis quos rem sit? Aliquam, itaque? Lorem ipsum dolor
                           sit amet, consectetur adipisicing elit. Ab accusantium, amet at dolorem
                           doloremque incidunt iste nihil reprehenderit saepe totam?
                        </p>
                     </div>
                  </div>
               </div>
               <div
                  className="about-us__information__sections__section">
                  <div className="about-us__information__sections__section__arrow">
                     <RightArrowIcon/>
                  </div>
                  <div className="about-us__information__sections__section__container">
                     <p className="about-us__information__sections__section__container__title">
                        Contact
                     </p>
                     <div
                        className="about-us__information__sections__section__container__details">
                        <div
                           className="about-us__information__sections__section__container__details__contact-list">
                           <div
                              className="about-us__information__sections__section__container__details__contact-list__element">
                              <PinIcon/>
                              <p className="about-us__information__sections__section__container__details__contact-list__element__name">
                                 {contactInfo.address}
                              </p>
                           </div>
                           <div
                              className="about-us__information__sections__section__container__details__contact-list__element">
                              <PhoneIcon/>
                              <p className="about-us__information__sections__section__container__details__contact-list__element__name">
                                 <a href='tel:0728 165 676'>0728 165 676</a>
                              </p>
                           </div>
                           <div
                              className="about-us__information__sections__section__container__details__contact-list__social-media">
                              <div
                                 className="about-us__information__sections__section__container__details__contact-list__social-media__element" onClick={() => window.open('https://www.facebook.com/Cofetaria-Acasa-Targu-Ocna-101771164709091')}>
                                 <FacebookIcon />
                              </div>
                              <div
                                 className="about-us__information__sections__section__container__details__contact-list__social-media__element" onClick={() => window.open('https://www.instagram.com/claudiabranzaru/')}>
                                 <InstagramIcon/>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
}