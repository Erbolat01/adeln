import React, { useState, useEffect } from 'react'
import './styles.css'
import useBreakPoint from '../hooks/useBreakPoint'

const ProductCard = ({ product, onClose }) => {
    const [mainImage, setMainImage] = useState(null)
    const { md } = useBreakPoint()

    useEffect(() => {
        if (product && product.imageUrls && product.imageUrls.length > 0) {
            setMainImage(product.imageUrls[0])
        }
    }, [product])

    if (!product) {
        return null
    }

    const { description, link, imageUrls, altText } = product

    const handleImageClick = (url) => {
        setMainImage(url)
    }

    return (
        <div className={`product-card ${md ? 'desktop' : 'mobile'}`}>
            <div className='images-container'>
                <div className='main-image-container'>
                    {mainImage && <img src={mainImage} alt={altText} className='main-image' />}
                </div>
                <div className='additional-images-container'>
                    {imageUrls.map((url, index) => (
                        <img
                            key={index}
                            src={url}
                            alt={`${altText} - ${index + 1}`}
                            className='additional-image'
                            onClick={() => handleImageClick(url)}
                        />
                    ))}
                </div>
            </div>
            <div className="product-info">
                <p className='product-description'>{description}</p>
                <div className='buy-button-container'>
                    <button onClick={() => window.open(link, '_blank')} className='buy-button'>Купить</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
