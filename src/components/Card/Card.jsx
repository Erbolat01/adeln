import React, { useState } from 'react'
import Modal from 'react-modal'
import { CgCloseO } from "react-icons/cg";
import { ProductCard } from 'components/ProductCard'
import './styles.css'

const Card = ({ product }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => setModalIsOpen(true)
    const closeModal = () => setModalIsOpen(false)

    const { imageUrls, altText } = product

    return (
        <>
            <div className='card' onClick={openModal}>
                <img className='card-image'
                    src={imageUrls.length && imageUrls[0]}
                    alt={altText}
                />
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Product Modal"
                style={{
                    content: {
                        position: 'relative',
                        inset: '50% auto auto 50%',
                        transform: 'translate(-50%, -50%)',
                        width: '90%',
                        maxWidth: '600px',
                        height: 'auto',
                        maxHeight: '80vh',
                        overflowY: 'auto',
                        margin: '0',
                        padding: '20px',
                        borderRadius: '24px',
                        boxSizing: 'border-box',
                        padding: '30px'
                    },
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1000
                    }
                }}
            >
                <ProductCard product={product} />
                <button
                    onClick={closeModal}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0
                    }}
                >
                    <CgCloseO size={24} color={'#ED6A5A'} />
                </button>
            </Modal >
        </>
    )
}

export default Card
