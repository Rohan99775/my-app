import React from 'react'
import './App.css'
import { motion } from "framer-motion";

function About() {
    return (
        <div>
            <section className='about'>
                <div id='about' className='container'>
                    <motion.div className='box card text-center my-md-5 shadow p-3 mb-5 bg-white rounded border-0 d-flex flex-column align-items-center'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }} >
                        <h1 className='card-title'>What I do</h1>
                        <hr className='w-25 mb-sm-3' />
                        <p className='lead card-body'>At present time I'm working on a multi role, as a Web Developer i design and create various websites And as UI/UX Designer create many designs for Web Applications and Mobile applications, I create the beauty of the site. I'm responsible for the site's technical aspects, such as its performance and capacity, which are measures of a website's speed and how much traffic the site can handle. In addition, I also create content for the site.</p>
                    </motion.div>
                </div>
                <div className='container'>
                    <div className='row about-cards'>

                        <motion.div whileHover={{ scale: '1.2' }} className='about-card col-md-2 col-xs-12 text-center d-flex flex-column align-items-center border-0 shadow p-3 mb-5 bg-white'>
                            <div className='car-img-top mt-md-4'>
                                <img className='card-icon-size' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuA_dyoYtrQjp3ot5yXKANDu_V8LUaHeZXEn3ZRIRZSQ9rq3YQa5EiFXGK_QPxC3LSHI&usqp=CAU' alt='' />
                            </div>
                            <h3 className='card-title'>Working Hard</h3>
                            <hr className='w-25' />
                            <p className='lead card-body'>Always belive in hard-work in  my profession</p>
                        </motion.div>

                        <motion.div whileHover={{ scale: '1.2' }} className='about-card col-md-2 col-xs-12 text-center d-flex flex-column align-items-center border-0 shadow p-3 mb-5 bg-white'>
                            <div className='card-img-top mt-md-4'>
                                <img className='card-icon-size' src='https://thumbs.dreamstime.com/b/black-website-laptop-screen-icon-isolated-yellow-background-globe-symbol-world-wide-web-long-shadow-style-vector-209852798.jpg' alt='' />
                            </div>
                            <h3 className='card-title'>UI/UX Design</h3>
                            <hr className='w-25' />
                            <p className='lead card-body'>Love to do UI/UX design for new product</p>
                        </motion.div>

                        <motion.div whileHover={{ scale: '1.2' }} className='about-card col-md-2 col-xs-12 text-center d-flex flex-column align-items-center border-0 shadow p-3 mb-5 bg-white'>
                            <div className='card-img-top mt-md-4'>
                                <img className='card-icon-size' src='https://thumbs.dreamstime.com/b/black-go-to-web-icon-isolated-yellow-background-www-website-pictogram-world-wide-symbol-internet-your-site-design-app-long-200712126.jpg' alt='' />
                            </div>
                            <h3 className='card-title'>Web Design</h3>
                            <hr className='w-25' />
                            <p className='lead card-body'>Passionate about Web Design from start</p>
                        </motion.div>

                        <motion.div whileHover={{ scale: '1.2' }} className='about-card col-md-2 col-xs-12 text-center d-flex flex-column align-items-center border-0 shadow p-3 mb-5 bg-white'>
                            <div className='card-img-top mt-md-4'>
                                <img className='card-icon-size' src='https://media.istockphoto.com/id/1372764637/photo/coding-language-development-icon-on-yellow-background-software-development-concept.jpg?s=170667a&w=0&k=20&c=8Cv1UaeMHGsL4guSh_AS9msnx3bfUNFtrKSsa9LOILM=' alt='' />
                            </div>
                            <h3 className='card-title'>Web Development</h3>
                            <hr className='w-25' />
                            <p className='lead card-body'>Created all types of modern web development</p>
                        </motion.div>

                    </div>

                    <div className='intro container'>

                        <motion.div  initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.8, origin: 1 }} className='card d-flex align-items-center p-sm-2 shadow p-3 mb-5 bg-white border-0'>
                            <h1 className='card-title'>Hello! This is Sanajit</h1>
                            <hr className='w-25 mb-sm-3' />
                        </motion.div>
                        <div className='d-lg-flex justify-content-between'>

                            <div className='intro-img'>
                                <img className='rounded float-left img-fluid' src='https://github.com/sanajitjana/My-Portfolio-v1/blob/master/public/assets/img/about-image.jpg?raw=true' alt='' />
                            </div>

                            <div className='intro-para'>
                                <p className='lead px-4'>I am a web developer from Kolkata, India. I enjoy building everything from small business sites to rich interactive web apps. if you are a business seeking a web presence or an employer looking to hire, you can get in touch with me here I design and build digital products with simple and beautiful code. I specialize in custom web theme development and love what I do.</p>
                                <p className='lead px-4'>Since beginning my journey as a web developer in my college days, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
                            </div>

                        </div>
                    </div>

                    <div className='text-center about-btn'>
                        <motion.button whileHover={{ scale: '1.2' }} className='btn btn-warning m-2' type='button'>See Resume</motion.button>
                        <motion.button whileHover={{ scale: '1.2' }} className='btn btn-warning m-2' type='button'>Hire Me</motion.button>
                    </div>

                    <div className='row about-cards mt-4'>

                        <motion.div whileHover={{ scale: '1.2' }} className='about-card-2 col-md-2 text-center d-flex flex-column align-items-center border-0 shadow p-3 mb-5 bg-white'>
                            <div className='card-img-top mt-md-4'>
                                <img className='card-icon-size' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuA_dyoYtrQjp3ot5yXKANDu_V8LUaHeZXEn3ZRIRZSQ9rq3YQa5EiFXGK_QPxC3LSHI&usqp=CAU' alt='' />
                            </div>
                            <h3 className='card-title'>0021</h3>
                            <hr className='w-25' />
                            <p className='lead card-body'>Web Design Completed</p>
                        </motion.div>

                        <motion.div whileHover={{ scale: '1.2' }} className='about-card-2 col-md-2 text-center d-flex flex-column align-items-center border-0 shadow p-3 mb-5 bg-white'>
                            <div className='card-img-top mt-md-4'>
                                <img className='card-icon-size' src='https://thumbs.dreamstime.com/b/black-website-laptop-screen-icon-isolated-yellow-background-globe-symbol-world-wide-web-long-shadow-style-vector-209852798.jpg' alt='' />
                            </div>
                            <h3 className='card-title'>0040</h3>
                            <hr className='w-25' />
                            <p className='lead card-body'>UI/UX Design Done</p>
                        </motion.div>

                        <motion.div whileHover={{ scale: '1.2' }} className='about-card-2 col-md-2 text-center d-flex flex-column align-items-center border-0 shadow p-3 mb-5 bg-white'>
                            <div className='card-img-top mt-md-4'>
                                <img className='card-icon-size' src='https://thumbs.dreamstime.com/b/black-go-to-web-icon-isolated-yellow-background-www-website-pictogram-world-wide-symbol-internet-your-site-design-app-long-200712126.jpg' alt='' />
                            </div>
                            <h3 className='card-title'>0015</h3>
                            <hr className='w-25' />
                            <p className='lead card-body'>Website Created</p>
                        </motion.div>

                        <motion.div whileHover={{ scale: '1.2' }} className='about-card-2 col-md-2 text-center d-flex flex-column align-items-center border-0 shadow p-3 mb-5 bg-white'>
                            <div className='card-img-top mt-md-4'>
                                <img className='card-icon-size' src='https://media.istockphoto.com/id/1372764637/photo/coding-language-development-icon-on-yellow-background-software-development-concept.jpg?s=170667a&w=0&k=20&c=8Cv1UaeMHGsL4guSh_AS9msnx3bfUNFtrKSsa9LOILM=' alt='' />
                            </div>
                            <h3 className='card-title'>0012</h3>
                            <hr className='w-25' />
                            <p className='lead card-body'>Developed Website</p>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default About