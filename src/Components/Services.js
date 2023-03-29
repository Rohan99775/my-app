import React from 'react'
import '../App.css'

function Services() {
    return (
        < section className='service' >
            <div id='service' className='container'>
                <div className='card text-center my-md-5 shadow p-3 mb-5 bg-white rounded border-0 d-flex flex-column align-items-center'>
                    <h1 className='card-title'>Service List</h1>
                    <hr className='w-25 m-1' />
                    <p className='lead'>I always want to make things that make the diffrence.</p>
                </div>

                <div className='service-cards container-fluid my-md-5 p-md-2'>
                    <div className='row'>
                        <div className='card col-md-3 text-center d-flex flex-column align-items-center border-0 shadow p-3 mb-5 bg-white'>
                            <img className='card-img-top' src='https://github.com/sanajitjana/My-Portfolio-v1/blob/master/public/assets/img/service/design-development.jpg?raw=true' />
                            <div className='img-div'>
                                <img className='card-icon-size mt-4' src='https://thumbs.dreamstime.com/b/black-website-laptop-screen-icon-isolated-yellow-background-globe-symbol-world-wide-web-long-shadow-style-vector-209852798.jpg' alt='' />
                            </div>
                            <h3 className='card-title'>Design + Development</h3>
                            <hr className='w-25' />
                            <p className='lead card-body'>Clean, modern designs - optimized for performance, search engines, and converting users to customers.</p>
                        </div>

                        <div className='card col-md-3 text-center d-flex flex-column align-items-center border-0 shadow p-3 mb-5 bg-white'>
                            <img className='card-img-top' src='https://github.com/sanajitjana/My-Portfolio-v1/blob/master/public/assets/img/service/e-commarce.jpg?raw=true' />
                            <div className='img-div'>
                                <img className='card-icon-size mt-4' src='https://thumbs.dreamstime.com/b/flat-shopping-cart-icon-yellow-background-lines-add-bag-basket-business-button-buy-buyer-click-commerce-commercial-160636599.jpg' alt='' />
                            </div>
                            <h3 className='card-title'>eCommerce</h3>
                            <hr className='w-25' />
                            <p className='lead card-body'>Integration of eCommerce platforms, payment gateways, custom product templates, and more.</p>
                        </div>

                        <div className='card col-md-3 text-center d-flex flex-column align-items-center border-0 shadow p-3 mb-5 bg-white'>
                            <img className='card-img-top' src='https://github.com/sanajitjana/My-Portfolio-v1/blob/master/public/assets/img/service/analytics.jpg?raw=true' />
                            <div className='img-div'>
                                <img className='card-icon-size mt-4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuA_dyoYtrQjp3ot5yXKANDu_V8LUaHeZXEn3ZRIRZSQ9rq3YQa5EiFXGK_QPxC3LSHI&usqp=CAU' alt='' />
                            </div>
                            <h3 className='card-title'>Analytics</h3>
                            <hr className='w-25' />
                            <p className='lead card-body'>Get insights into who is browsing your site so that you can make smarter business decisions.</p>
                        </div>
                    </div>

                    <div className=' my-md-5 p-md-2 container-fluid seo_mbl'>
                        <div className='row'>
                            <div className='col-md-3 text-center d-flex flex-column align-items-center border-0 shadow p-3 mb-5 bg-white'>
                                <img className='card-img-top' src='https://github.com/sanajitjana/My-Portfolio-v1/blob/master/public/assets/img/service/mobile-friendly.jpg?raw=true' />
                                <div className='img-div'>
                                    <img className='card-icon-size mt-4' src='https://img.myloview.com/stickers/smartphone-icon-on-yellow-background-modern-simple-flat-device-sign-vector-illustration-700-150904469.jpg' alt='' />
                                </div>
                                <h3 className='card-title'>Mobile-Friendly</h3>
                                <hr className='w-25' />
                                <p className='lead card-body'>A responsive design makes your website: accessible to all users regardless of their device</p>
                            </div>

                            <div className='col-md-3 text-center d-flex flex-column align-items-center border-0 shadow p-3 mb-5 bg-white'>
                                <img className='card-img-top' src='https://github.com/sanajitjana/My-Portfolio-v1/blob/master/public/assets/img/service/website-audit.jpg?raw=true' />
                                <div className='img-div'>
                                    <img className='card-icon-size mt-4' src='https://thumbs.dreamstime.com/b/computer-monitor-icon-flat-pc-symbol-vector-illustration-isolated-yellow-background-133498109.jpg' alt='' />
                                </div>
                                <h3 className='card-title'>Website Rank</h3>
                                <hr className='w-25' />
                                <p className='lead card-body'>Looking to improve your page performance, SEO, or user experience? Request a free site audit.</p>
                            </div>

                            <div className='col-md-3 text-center d-flex flex-column align-items-center border-0 shadow p-3 mb-5 bg-white'>
                                <img className='card-img-top' src='https://github.com/sanajitjana/My-Portfolio-v1/blob/master/public/assets/img/service/content-management.jpg?raw=true' />
                                <div className='img-div'>
                                    <img className='card-icon-size mt-4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuA_dyoYtrQjp3ot5yXKANDu_V8LUaHeZXEn3ZRIRZSQ9rq3YQa5EiFXGK_QPxC3LSHI&usqp=CAU' alt='' />
                                </div>
                                <h3 className='card-title'>Content Management</h3>
                                <hr className='w-25' />
                                <p className='lead card-body'>Custom theme and plugin development. Easily update site content with knowledge of powerful code.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Services