import React from 'react'
import './styles.css'

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-column">
                    <h3>Контакты</h3>
                    <p>Телефон: +77073225072</p>
                </div>
                <div className="footer-column">
                    <h3>Социальные сети</h3>
                    <a href='https://wa.me/77073225072'>Whatsapp</a>
                </div>
                <div className="footer-column">
                    <p>{`© ${new Date().getFullYear()} Adel&N. All Rights Reserved.`}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
