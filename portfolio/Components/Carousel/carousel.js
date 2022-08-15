import { Swiper, SwiperSlide } from 'swiper/react';

//icon
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import ServiceCard from '../ServiceCard/ServiceCard';
import 'swiper/css';

import styles from './carouse.module.scss'


function Carousel(props) {


  return (
    <div>
      <p className={styles.instructions}>swipe to see other services <br/> <br/><BsFillArrowRightCircleFill/></p>
      
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
       <ServiceCard 
          service="UI Design" 
          description="Strategizing product development by conducting market research on similar applications to create layout for unique selling points and determining areas for continuous improvement"/>
      </SwiperSlide>

      <SwiperSlide>
        <ServiceCard 
          service="Landing Page development" 
          description="standalone web page that the visitors reach after clicking on online ads, a link in email, or posts you have on social media to convert site visitors into leads or sales"/>
      </SwiperSlide>

      <SwiperSlide>
        <ServiceCard 
          service="Web Development" 
          description="Create and maintain websites performance and capacity, giving your product or business an onling homebase for operations to give you time to handle none technical tasks."/>
      </SwiperSlide>

      <SwiperSlide>
        <ServiceCard 
          service="Content Management" 
          description="collecting, delivering, retrieving, governance and overall management of information in any format on your site or app. All one email away"/>
      </SwiperSlide>
     
    </Swiper>
      
    </div>
  )
}

export default Carousel