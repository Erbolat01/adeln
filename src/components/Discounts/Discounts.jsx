import React from 'react'
import { Card } from 'components/Card'
import backpack2 from 'assets/images/products/backpack2.jpg'
import backpack3 from 'assets/images/products/backpack3.jpg'
import backpack6 from 'assets/images/products/backpack6.jpg'
import backpack7 from 'assets/images/products/backpack7.jpg'
import backpack8 from 'assets/images/products/backpack8.png'
import backpack9 from 'assets/images/products/backpack9.png'
import backpack10 from 'assets/images/products/backpack10.png'
import backpack11 from 'assets/images/products/backpack11.png'
import backpack12 from 'assets/images/products/backpack12.png'
import backpack13 from 'assets/images/products/backpack13.png'
import './styles.css'

const products = [
    {
        imageUrls: [backpack2, backpack3],
        altText: 'backpack',
        description: 'Рюкзак мужской городской для путешествий - это лучший выбор для людей, которые ценят комфорт и стиль. Наш функциональный черный рюкзак для ноутбука обеспечивает удобство в повседневной жизни, а также надежную защиту вещей во время путешествий. Рюкзак имеет красивый дизайн и отличную вместительность',
        link: 'https://kaspi.kz/shop/p/rjukzak-shkol-nyi-rjukzak-dlja-noutbuka-sh45-poliester-oksford-chernyi-121761264/'
    },
    {
        imageUrls: [backpack6],
        altText: 'backpack',
        description: 'Детский рюкзак для мальчика или девочки от 2 до 6 лет — это стильный и яркий аксессуар, который станет отличным дополнением к образу вашего малыша. С таким рюкзаком ваш ребенок будет выглядеть модно и современно, а главное — чувствовать себя комфортно и удобно.',
        link: 'https://kaspi.kz/shop/p/rjukzak-s-edinorogom-tekstil-rozovyi-114982694'
    },
    {
        imageUrls: [backpack7],
        altText: 'backpack',
        description: 'Детский рюкзак для мальчика или девочки от 2 до 6 лет — это стильный и яркий аксессуар, который станет отличным дополнением к образу вашего малыша. С таким рюкзаком ваш ребенок будет выглядеть модно и современно, а главное — чувствовать себя комфортно и удобно.',
        link: 'https://kaspi.kz/shop/p/rjukzak-s-mashinkami-tekstil-sinii-114982695'
    },
    {
        imageUrls: [backpack8, backpack9, backpack10],
        altText: 'backpack',
        description: 'Рюкзак школьный для девочки для подростка выполнен из качественной непромокаемой ткани. Рюкзачок подходит для прогулок, тренировок, для школы и танцев.',
        link: 'https://kaspi.kz/shop/p/rjukzak-shkol-nyi-kuromi-kuromi-poliester-belyi-chernyi184048373-poliester-belyi-chernyi-122174004/'
    }, 
    {
        imageUrls: [backpack13, backpack12, backpack11],
        altText: 'backpack',
        description: 'Рюкзак мужской городской для путешествий - это лучший выбор для людей, которые ценят комфорт и стиль. Наш функциональный черный рюкзак для ноутбука обеспечивает удобство в повседневной жизни, а также надежную защиту вещей во время путешествий.',
        link: 'https://kaspi.kz/shop/p/rjukzak-shkol-nyi-rjukzak-dlja-noutbuka-sh45-poliester-oksford-chernyi-121761264/'
    }, 
]

const Discounts = () => {
    return (
        <div className="new-container">
            <div className="card-container">
                {products.map((product, index) => (
                    <Card key={index} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Discounts