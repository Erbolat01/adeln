import React from 'react'
import { Card } from 'components/Card'
import shirt1 from 'assets/images/products/t-shirt1.jpg'
import shirt2 from 'assets/images/products/t-shirt2.png'
import shirt3 from 'assets/images/products/t-shirt3.png'
import shirt4 from 'assets/images/products/t-shirt4.png'
import './styles.css'

const products = [
    {
        imageUrls: [shirt1],
        altText: 't-shirt',
        description: 'Представляем вам нашу стильную женскую футболку оверсайз. Эта однотонная футболка идеально сочетает в себе комфорт и модный дизайн, делая её незаменимым элементом вашего гардероба. Она подходит как для создания повседневных образов, так и для отдыха, обеспечивая вам свободу движений и легкость в носке.',
        link: 'https://kaspi.kz/shop/p/futbolka-futbolka-odnotonnaja-adel-n-zheltyi-m-138255217/'
    },
    {
        imageUrls: [shirt2],
        altText: 't-shirt',
        description: 'Представляем вам нашу стильную женскую футболку оверсайз. Эта однотонная футболка идеально сочетает в себе комфорт и модный дизайн, делая её незаменимым элементом вашего гардероба. Она подходит как для создания повседневных образов, так и для отдыха, обеспечивая вам свободу движений и легкость в носке.',
        link: 'https://kaspi.kz/shop/p/futbolka-futbolka-odnotonnaja-adel-n-zheltyi-m-138255217/'
    },
    {
        imageUrls: [shirt3],
        altText: 't-shirt',
        description: 'Представляем вам нашу стильную женскую футболку оверсайз. Эта однотонная футболка идеально сочетает в себе комфорт и модный дизайн, делая её незаменимым элементом вашего гардероба. Она подходит как для создания повседневных образов, так и для отдыха, обеспечивая вам свободу движений и легкость в носке.',
        link: 'https://kaspi.kz/shop/p/futbolka-futbolka-odnotonnaja-adel-n-zheltyi-m-138255217/'
    },
    {
        imageUrls: [shirt4],
        altText: 't-shirt',
        description: 'Представляем вам нашу стильную женскую футболку оверсайз. Эта однотонная футболка идеально сочетает в себе комфорт и модный дизайн, делая её незаменимым элементом вашего гардероба. Она подходит как для создания повседневных образов, так и для отдыха, обеспечивая вам свободу движений и легкость в носке.',
        link: 'https://kaspi.kz/shop/p/futbolka-futbolka-odnotonnaja-adel-n-zheltyi-m-138255217/'
    }
];

const New = () => {
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

export default New;
