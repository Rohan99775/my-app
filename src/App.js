import React from 'react';
import './App.css';
import Slide from './Slider';
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from './Header';
import About from './About';


function App() {

  return (
    <div className="App">
      <Header />
      <About />

      {/* ---------------------------------------Skill Section-------------------------------------  */}

      <section className='skill'>
        <div id='skill' className='container'>

          <div className='card text-center my-md-5 shadow p-3 mb-5 bg-white rounded border-0 d-flex flex-column align-items-center'>
            <h1 className='card-title'>My Skill</h1>
            <hr className='w-25 m-1' />
            <p className='lead card-body p-0'>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
          </div>

          <div className='container px-4'>
            <div className='skill-detail row'>
              <p className='col-md lead'>UI/UX involves planning and iterating a site's structure and layout. Once the proper information architecture is in place, I design the visual layer to create a beautiful user experience. Front End Development is building out the visual components of a website. Using HTML, CSS, and Javascript, I build fast, interactive websites. This also may include a CMS, apis, or other integrations. The work that I am most interested in is 0-1 work (helping you get your idea into the world).</p>
              <div className='proficiency col-md w-100'>
                <p className='m-0'>HTML/CSS - 97%</p>
                <hr className='mt-0 mb-2' />
                <p className='m-0'>UI/UX - 92%</p>
                <hr className='mt-0 mb-2' />
                <p className='m-0'>React JS - 30%</p>
                <hr className='mt-0 mb-2' />
                <p className='m-0'>PHP (Laravel) - 93%</p>
                <hr className='mt-0 mb-2' />
                <p className='m-0'>MySQL - 95%</p>
                <hr className='mt-0 mb-2' />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ----------------------------------Education & Work Section--------------------------------- */}

      <section className='education-work'>
        <div id='education' className='container'>
          <div className='education-container'>

            <div className='card text-center my-md-5 shadow p-3 mb-5 bg-white rounded border-0 d-flex flex-column align-items-center'>
              <h1 className='card-title'>Educational Story</h1>
              <hr className='w-25 m-1' />
              <p className='lead'>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            </div>

            <div className='education-cards  my-md-5 p-md-2 container-fluid'>
              <div className='row'>
                <div className='col-md-3 text-center d-flex flex-column align-items-center border-0 shadow p-3 mb-5 bg-white'>
                  <div className='card-img-top mt-md-4'>
                    <img className='card-icon-size' src='https://previews.123rf.com/images/mingirov/mingirov2008/mingirov200802321/154176476-black-school-bus-icon-isolated-on-yellow-background-long-shadow-style-vector.jpg' alt='' />
                  </div>
                  <h3 className='card-title'>School</h3>
                  <p className='lead m-0'>2010-2017</p>
                  <hr className='w-25' />
                  <p className='lead card-body'>Completed my school life from Haludbari High School (HS), Khejuri, West Bengal, India.</p>
                </div>

                <div className='col-md-3 text-center d-flex flex-column align-items-center border-0 shadow p-3 mb-5 bg-white'>
                  <div className='card-img-top mt-md-4'>
                    <img className='card-icon-size' src='https://www.shutterstock.com/image-vector/graduation-hat-icon-on-yellow-260nw-311804195.jpg' alt='' />
                  </div>
                  <h3 className='card-title'>Graduation</h3>
                  <p className='lead m-0'>2017-2020</p>
                  <hr className='w-25' />
                  <p className='lead card-body'>Achieved my Graduation Degree from CCLMS (Contai College of Learning and Management Science), Contai, West Bengal, India.</p>
                </div>

                <div className='col-md-3 text-center d-flex flex-column align-items-center border-0 shadow p-3 mb-5 bg-white'>
                  <div className='card-img-top mt-md-4'>
                    <img className='card-icon-size' src='https://www.shutterstock.com/image-vector/graduation-hat-icon-on-yellow-260nw-311804195.jpg' alt='' />
                  </div>
                  <h3 className='card-title'>Training and Skill</h3>
                  <p className='lead m-0'>2022-2022</p>
                  <hr className='w-25' />
                  <p className='lead card-body'>Currently learning Full-Stack Web Development from Masai School, Bengaluru, India.</p>
                </div>
              </div>
            </div>

          </div>

          <div className='work-container'>
            <div className='card text-center my-md-5 shadow p-3 mb-5 bg-white rounded border-0 d-flex flex-column align-items-center'>
              <h1 className='card-title'>Working Experience</h1>
              <hr className='card-title' />
              <p className='lead'>I don't like to define myself by the work I've done, I define myself by the work I want to do.</p>
            </div>

            <div className='work-cards  my-md-5 p-md-2'>
              <div className='row'>
                <div className='col-md-6 text-center d-flex flex-column align-items-center border-0 shadow p-3 mb-5 bg-white'>
                  <div className='card-img-top mt-md-4'>
                    <img className='card-icon-size' src='https://www.shutterstock.com/image-vector/graduation-hat-icon-on-yellow-260nw-311804195.jpg' alt='' />
                  </div>
                  <h3 className='card-title'>Patel G Tech LLP</h3>
                  <p className='lead m-0'>Repub Member</p>
                  <p className='lead m-0'>2019-2020</p>
                  <hr className='w-25' />
                  <p className='lead card-body'>I did an internship at Patel G Tech LLP as a Republication Team Member.</p>
                </div>

                <div className='col-md-6 text-center d-flex flex-column align-items-center border-0 shadow p-3 mb-5 bg-white'>
                  <div className='card-img-top mt-md-4'>
                    <img className='card-icon-size' src='https://www.shutterstock.com/image-vector/graduation-hat-icon-on-yellow-260nw-311804195.jpg' alt='' />
                  </div>
                  <h3 className='card-title'>Uaguria Software</h3>
                  <p className='lead m-0'>Web Developer</p>
                  <p className='lead m-0'>2020-2022</p>
                  <hr className='w-25' />
                  <p className='lead card-body'>At Uaguria Software, I was working as a Web Developer & IT consultant Person</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* ------------------------------------------Service section-------------------------------------------- */}

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

      {/* ------------------------------------Testimonial section-----------------------------------  */}

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

      {/* ---------------------------------------Blog section-----------------------------------  */}

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

      {/* ----------------------------------------contact footer-----------------------------------  */}

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

    </div >
  );
}

export default App;
