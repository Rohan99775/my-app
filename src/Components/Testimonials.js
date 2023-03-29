import React from 'react'
import '../App.css'
import Slide from '../Slider';

function Testimonials() {
    return (
        < section className='testimonial' >
            <div className='testimonial-container container'>
                <div className='card text-center my-md-5 shadow p-3 mb-5 bg-white rounded border-0 d-flex flex-column align-items-center'>
                    <h1 className='card-title'>Testimonials</h1>
                    <hr className='w-25 m-1' />
                    <p className='lead'>People I have worked with have said some nice things.</p>
                </div>

                <div className='container slide d-flex justify-content-center'>
                    <Slide />
                </div>
            </div>
        </section >
    )
}

export default Testimonials