import React from 'react'
import { Card } from 'components/Card'
import long1 from 'assets/images/products/long1.jpeg'
import long2 from 'assets/images/products/long2.jpeg'
import long3 from 'assets/images/products/long3.jpeg'
import long4 from 'assets/images/products/long4.jpeg'
import './styles.css'

const products = [
    {
        imageUrls: [long1],
        altText: 'long-sleeve',
        description: 'Базовый лонгслив из мягкого, гладкого трикотажного полотна, плотностью 210/м2 - идеально подходит для частого ношения в летний, осенний или зимний сезон. Стилизуйте его в паре с лонгсливом другого оттенка или носите самостоятельно. За счет хорошей плотности материала изделие не просвечивает, а небольшое количество искусственных волокон делает его эластичным и долговечным.',
        link: 'https://kaspi.kz/shop/p/longsliv-30333027-149772988-temno-zelenyi-44-128955178/'
    },
    {
        imageUrls: [long2],
        altText: 'long-sleeve',
        description: 'Базовый лонгслив из мягкого, гладкого трикотажного полотна, плотностью 210/м2 - идеально подходит для частого ношения в летний, осенний или зимний сезон. Стилизуйте его в паре с лонгсливом другого оттенка или носите самостоятельно. За счет хорошей плотности материала изделие не просвечивает, а небольшое количество искусственных волокон делает его эластичным и долговечным.',
        link: 'https://kaspi.kz/shop/p/longsliv-30333027-149772988-temno-zelenyi-44-128955178/'
    },
    {
        imageUrls: [long3],
        altText: 'long-sleeve',
        description: 'Базовый лонгслив из мягкого, гладкого трикотажного полотна, плотностью 210/м2 - идеально подходит для частого ношения в летний, осенний или зимний сезон. Стилизуйте его в паре с лонгсливом другого оттенка или носите самостоятельно. За счет хорошей плотности материала изделие не просвечивает, а небольшое количество искусственных волокон делает его эластичным и долговечным.',
        link: 'https://kaspi.kz/shop/p/longsliv-30333027-149772988-temno-zelenyi-44-128955178/'
    },
    {
        imageUrls: [long4],
        altText: 'long-sleeve',
        description: 'Базовый лонгслив из мягкого, гладкого трикотажного полотна, плотностью 210/м2 - идеально подходит для частого ношения в летний, осенний или зимний сезон. Стилизуйте его в паре с лонгсливом другого оттенка или носите самостоятельно. За счет хорошей плотности материала изделие не просвечивает, а небольшое количество искусственных волокон делает его эластичным и долговечным.',
        link: 'https://kaspi.kz/shop/p/longsliv-30333027-149772988-temno-zelenyi-44-128955178/'
    }
];

const Popular = () => {
    return (
        <div className="new-container">
            <div className="card-container">
                {products.map((product, index) => (
                    <Card key={index} imageUrl={product.imageUrl} altText={product.altText} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Popular
