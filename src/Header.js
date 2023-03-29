import React from 'react'
import './App.css'
import { motion } from "framer-motion";


export default function Header() {

    return (
        <header id='#home' className="App-header">

            <div className="area" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >

            <nav className="nav navbar navbar-expand-md pt-3">
                <div className="container-xl ">
                    <div className='navbar-brand text-warning'>
                        Sanajit Jana
                    </div>
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <motion.a whileHover={{ scale: '1.3' }} transition={{ delay: '0.3s' }} className="nav-link text-white" aria-current="page" href="#">Home</motion.a>
                            </li>
                            <li className="nav-item">
                                <motion.a whileHover={{ scale: '1.3' }} className="nav-link text-white" href="#about">About</motion.a>
                            </li>
                            <li className="nav-item">
                                <motion.a whileHover={{ scale: '1.3' }} className="nav-link text-white" href="#skill">Skill</motion.a>
                            </li>
                            <li className="nav-item">
                                <motion.a whileHover={{ scale: '1.3' }} className="nav-link text-white" href="#education">Education</motion.a>
                            </li>
                            <li className="nav-item">
                                <motion.a whileHover={{ scale: '1.3' }} className="nav-link text-white" href="#service">Services</motion.a>
                            </li>
                            <li className="nav-item">
                                <motion.a whileHover={{ scale: '1.3' }} className="nav-link text-white" href="#blog">Blog</motion.a>
                            </li>
                            <li className="nav-item">
                                <motion.a whileHover={{ scale: '1.3' }} className="nav-link text-white" href="#contact">Contact</motion.a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className='branding container-fluid'>
                <div className='d-flex justify-content-center flex-column align-items-center'>
                    <div className='display-1 text-warning mb-md-2'>
                        Sanajit Jana
                    </div>
                    <div className='d-flex justify-content-center w-25'>
                        <a className='icon-link' href='#'>
                            <i className="bi-linkedin text-white mr-1" style={{ fontSize: '2rem', marginRight: '0.6rem' }}></i>
                        </a>
                        <a className='icon-link' href='#'>
                            <i className="bi-github text-white" style={{ fontSize: '2rem', marginRight: '0.6rem' }}></i>
                        </a>
                        <a className='icon-link' href='#'>
                            <i className="bi-twitter text-white" style={{ fontSize: '2rem', marginRight: '0.6rem' }}></i>
                        </a>
                        <a className='icon-link' href='#'>
                            <i className="bi-facebook text-white" style={{ fontSize: '2rem', marginRight: '0.6rem' }}></i>
                        </a>
                        <a className='icon-link' href='#'>
                            <i className="bi-instagram text-white" style={{ fontSize: '2rem' }}></i>
                        </a>
                    </div>
                </div>
            </div>

        </header>
    )
}
