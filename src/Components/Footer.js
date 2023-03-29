import React from 'react'
import '../App.css'

function Footer() {
    return (
        < footer className='contact' >
            <div id='contact' className='contact-contianer'>
                <div className='container'>
                    <div className='card text-center my-md-5 shadow p-3 mb-5 bg-white rounded border-0 d-flex flex-column align-items-center'>
                        <h1 className='card-title'>Contact Me</h1>
                        <hr className='w-25 m-1' />
                        <p className='lead'>I am always open to discussing product design work or partnership opportunities.</p>
                    </div>

                    <div className='contact-details row mt-md-5 p-md-2'>
                        <div className='contact-sources card col-md-3 text-center d-flex flex-column align-items-center border-0 shadow p-3 mb-5 bg-white'>
                            <img className='card-img-top card-icon-size mt-4' src='https://thumbs.dreamstime.com/b/yellow-location-icon-isolated-white-background-yellow-location-icon-118971235.jpg' />
                            <h3 className='card-title'>Address</h3>
                            <p className='lead'>Kolkata, West Bengal, India.</p>
                        </div>

                        <div className='contact-sources card col-md-3 text-center d-flex flex-column align-items-center border-0 shadow p-3 mb-5 bg-white'>
                            <img className='card-img-top email-icon' style={{ width: '5rem', height: '5rem' }} src='https://img.freepik.com/premium-vector/email-letter-icon-modern-vector-illustration-single-pictogram-badge-writing-yellow-color_547674-602.jpg?w=2000' />
                            <h3 className='card-title'>Email</h3>
                            <p className='lead'>sanajitjana@gmail.com</p>
                        </div>

                        <div className='contact-sources card col-md-3 text-center d-flex flex-column align-items-center border-0 shadow p-3 mb-5 bg-white'>
                            <img className='card-img-top phone-icon mt-4 mb-2' style={{ width: '3rem', height: '3rem' }} src='https://st2.depositphotos.com/5266903/8456/v/950/depositphotos_84569318-stock-illustration-phone-flat-yellow-color-icon.jpg' />
                            <h3 className='card-title'>Phone</h3>
                            <p className='lead'>+91 8372876775</p>
                        </div>

                        <div className='contact-sources card col-md-3 text-center d-flex flex-column align-items-center border-0 shadow p-3 mb-5 bg-white'>
                            <img className='card-img-top card-icon-size mt-4' src='https://media.istockphoto.com/id/658256840/vector/briefcase-vector-icon.jpg?s=612x612&w=0&k=20&c=9xVA0nStXu-KcVOFEFdWIPhb45xomw0u5mWKSWq1Txk=' />
                            <h3 className='card-title'>Portfolio</h3>
                            <p className='lead'>https://sanajitjana.github.io/</p>
                        </div>
                    </div>
                </div>

                <div className='bg-white px-1 pb-1'>
                    <div className='footer-links bg-warning d-flex align-items-center flex-column justify-content-center'>
                        <div className='social-media pb-2'>
                            <a className='fb-ic' href='#'>
                                <i className="footer-icon bi-facebook fa-3x text-blue mr-2"></i>
                            </a>

                            <a className="tw-ic">
                                <i className="footer-icon bi-twitter fa-3x text-info mr-2"> </i>
                            </a>

                            <a className="li-ic">
                                <i className="footer-icon bi-linkedin fa-3x text-primary mr-2"> </i>
                            </a>

                            <a className="ins-ic">
                                <i class="footer-icon bi-instagram fa-3x text-pink mr-2"> </i>
                            </a>

                            <a className="pin-ic">
                                <i className="footer-icon bi-pinterest fa-3x text-danger mr-2"> </i>
                            </a>
                        </div>
                        <p>© 2022, Made with ❤️ by sanajit jana.</p>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer