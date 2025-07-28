import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import promoFirstImg from 'assets/images/promo_first.jpeg'
import promoSecondImg from 'assets/images/promo_second.jpeg'
import promoThirdImg from 'assets/images/promo_third.jpeg'
import promoFourthImg from 'assets/images/promo_fourth.jpeg'
import useBreakPoint from '../hooks/useBreakPoint'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './styles.css'

const slides = [
    { id: 1, url: promoSecondImg, alt: 'Promo slide 1' },
    { id: 2, url: promoFirstImg, alt: 'Promo slide 2' },
    { id: 3, url: promoThirdImg, alt: 'Promo slide 3' },
    { id: 4, url: promoFourthImg, alt: 'Promo slide 4' }
]

const Promo = () => {
    const screen = useBreakPoint()

    const scrollToSection = () => {
        const el = document.getElementById('tabs');
        el?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='promo-container'>
            <div className='promo-content'>
                <div className='slogan'>
                    <h1>
                        Твой гардероб - Твоя история. Будь в тренде
                    </h1>
                    <p>Летняя коллекция! Спеши купить</p>
                    <button onClick={scrollToSection} className='buy-button'>Купить</button>
                </div>
                <div className='swiper-container'>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        navigation={false}
                        pagination={{ clickable: true }}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40
                            },
                            1284: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            },
                        }}
                    >
                        {slides.map(({ id, url, alt }) => (
                            <SwiperSlide key={id}>
                                <div className='promo-slide' >
                                    <img src={url} alt={alt} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Promo
