import React from 'react'
import '../App.css'

function Blog() {
    return (
        < section className='blog' >
            <div id='blog' className='blog-container container'>
                <div className='card text-center my-md-5 shadow p-3 mb-5 bg-white rounded border-0 d-flex flex-column align-items-center'>
                    <h1 className='card-title'>My Blog</h1>
                    <hr className='w-25 m-1' />
                    <p className='lead'>The Blog, Which has thoughts on life, work and everything in between.</p>
                </div>

                <div className='blog-cards  my-md-5 p-md-2 container-fluid'>
                    <div className='row p_height'>
                        <div className='col-md-3 text-left d-flex flex-column border-0 shadow p-3 mb-5 bg-white'>
                            <img className='card-img-top' src='https://github.com/sanajitjana/My-Portfolio-v1/blob/master/public/assets/img/blog/blog1.png?raw=true' />
                            <div className='text mt-2'>
                                <h3>What is the importance of hooks in React JS?</h3>
                                <p>In this article, you will learn what are hooks in React JS? and when to use react hooks? React JS is developed by Facebook in the year 2013. There are many students and the new developers who have confusion between react and hooks in react. Well, it is not different, react is a programming language and hooks is...</p>
                            </div>
                            <div className='btn-div flex'>
                                <div className='btn btn-light shadow'>
                                    <a className='link-dark text-decoration-none' href='#'>Read More</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3 text-left d-flex flex-column border-0 shadow p-3 mb-5 bg-white'>
                            <img className='card-img-top' src='https://github.com/sanajitjana/My-Portfolio-v1/blob/master/public/assets/img/blog/blog2.png?raw=true' />
                            <div className='text mt-2'>
                                <h3>The importance of UI/UX | Software Engineering</h3>
                                <p>UI or User Interface is the interface that is the access point where users interact with computers. It is also a way through which users can interact with a website or an application. UI design typically refers to graphical user interfaces but also includes others, such as voice-controlled ones, a keyboard and the appearance...</p>
                            </div>
                            <div className='btn-div flex'>
                                <div className='btn btn-light shadow'>
                                    <a className='link-dark text-decoration-none' href='#'>Read More</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3 text-left d-flex flex-column border-0 shadow p-3 mb-5 bg-white'>
                            <img className='card-img-top' src='https://github.com/sanajitjana/My-Portfolio-v1/blob/master/public/assets/img/blog/blog3.png?raw=true' />
                            <div className='text mt-2'>
                                <h3>Form Example in Laravel 8</h3>
                                <p>Laravel 8 form example tutorial. In this post, i will teach from starting on how to send form data on controller and how to insert form data in database using laravel 8. If you are trying to create form and want to insert form data into database using laravel 8 latest version. So this post will help you to do this. Because in this post example, i will create contact-list...</p>
                            </div>
                            <div className='btn-div d-flex'>
                                <div className='btn btn-light shadow'>
                                    <a className='link-dark text-decoration-none' href='#'>Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='btn2-div d-flex justify-content-center'>
                    <div className='btn btn-warning btn-2'>
                        <a className='text-decoration-none text-black' href='#'>More Blog</a>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Blog;