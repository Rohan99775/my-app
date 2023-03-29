import React from 'react'
import '../App.css'

function Skill() {
    return (
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
    )
}

export default Skill