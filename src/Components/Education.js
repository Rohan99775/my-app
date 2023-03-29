import React from 'react'
import '../App.css'

function Education() {
  return (
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
              <hr className='w-25 m-1' />
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
  )
}

export default Education