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
          service="Grassfed" 
          description="An organic pet food website created to display my frontend skills"/>
      </SwiperSlide>

      <SwiperSlide>
        <ServiceCard 
          service="Cadet Landing Page" 
          description="Landing Page to display UI fundamentals and design techniques in figma that can be transfered and handed off to a developer"/>
      </SwiperSlide>

      <SwiperSlide>
        <ServiceCard 
          service="Boxed Landing page" 
          description="Create and maintain websites performance and capacity, giving your product or business an onling homebase for operations to give you time to handle none technical tasks."/>
      </SwiperSlide>

      <SwiperSlide>
        <ServiceCard 
          service="Gigibite" 
          description="collecting, delivering, retrieving, governance and overall management of information in any format on your site or app. All one email away"/>
      </SwiperSlide>
     
    </Swiper>
      
    </div>
  )
}

export default Carousel