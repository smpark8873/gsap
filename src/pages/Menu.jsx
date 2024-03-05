import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay } from 'swiper/modules';


function Menu () {
    return(
        <section className="menu bg-cover">
            <div className="menu_slide rel">
                <span className="menu_sl_bg l50"><img src="/img/page/fran/menu_sl_bg.png" alt="" /></span>
                <Swiper
                    slidesPerView={'auto'}                           
                    loop={true}                      
                    centeredSlides={true}
                    allowTouchMove={true}
                    speed={800} 
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}                            
                >                          
                    <SwiperSlide>
                        <div className="menu_sl">
                            <img src="/img/page/fran/menu_sl01.png" alt="" />
                        </div>
                        <p className="menu_txt abs">
                            Salted<br />
                            Butter<br />
                            Rolls
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="menu_sl">
                            <img src="/img/page/fran/menu_sl02.png" alt="" />
                        </div>
                        <p className="menu_txt abs">
                            Cream<br />
                            Teddybear<br />
                            Cake
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="menu_sl">
                            <img src="/img/page/fran/menu_sl03.png" alt="" />
                        </div>
                        <p className="menu_txt abs">
                            Choco<br />
                            Teddybear<br />
                            Cake
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="menu_sl">
                            <img src="/img/page/fran/menu_sl04.png" alt="" />
                        </div>
                        <p className="menu_txt abs">
                            Strawberry<br />
                            Croffle
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="menu_sl">
                            <img src="/img/page/fran/menu_sl05.png" alt="" />
                        </div>
                        <p className="menu_txt abs">
                            Shinemuscat<br />
                            Croffle
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="menu_sl">
                            <img src="/img/page/fran/menu_sl06.png" alt="" />
                        </div>
                        <p className="menu_txt abs">
                            Lotus<br />
                            Croffle
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="menu_sl">
                            <img src="/img/page/fran/menu_sl07.png" alt="" />
                        </div>
                        <p className="menu_txt abs">
                            Icecream<br />
                            Croffle
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="menu_sl">
                            <img src="/img/page/fran/menu_sl08.png" alt="" />
                        </div>
                        <p className="menu_txt abs">
                            Marlenka<br />
                            Cake
                        </p>
                    </SwiperSlide>                           
                </Swiper>
            </div>
        </section>
    );
}

export default Menu;