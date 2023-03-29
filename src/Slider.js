import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import qoute from './kisspng-desktop-wallpaper-computer-font-quotation-marks-5b0d3527eb6343.0413160015275922319642.png';
import './App.css'

function Slide() {
    return (
        <Carousel className='bg-secondary rounded-1 d-flex justify-content-center' style={{ height:'400px', width:'800px'
        }}> 
            <Carousel.Item className='text-center'>
                <img className='card-icon-size my-4' src={qoute} alt='' />
                <p className='lead'>"Sanajit has done a fantastic job overall. Not only the site is to design, but the code is also very clean and slick. Love the way he achieved the translations portion of the site"</p>
                <h3>~Shahadat Mahapatra</h3>
            </Carousel.Item>
           
            <Carousel.Item className='text-center'>
                <img className='card-icon-size my-4' src={qoute} alt='' />
                <p className='lead'>"Sanajit has done a fantastic job overall. Not only the site is to design, but the code is also very clean and slick. Love the way he achieved the translations portion of the site"</p>
                <h3>~Shahadat Mahapatra</h3>
            </Carousel.Item>

            <Carousel.Item className='text-center'>
                <img className='card-icon-size my-4' src={qoute} alt='' />
                <p className='lead'>"Sanajit has done a fantastic job overall. Not only the site is to design, but the code is also very clean and slick. Love the way he achieved the translations portion of the site"</p>
                <h3>~Shahadat Mahapatra</h3>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slide;