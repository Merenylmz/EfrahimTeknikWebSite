import React from 'react'
import { NavLink } from 'react-router-dom'

const Slider = () => {
    return (
        <>
            <section className="hero-area">
                <img className="hero-shape" src="assets/images/hero/hero-shape.svg" alt="#"/>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="hero-content">
                                <h4 className="wow fadeInUp" data-wow-delay=".2s">Hızlı & Güvenli Hizmet</h4>
                                <h1 className="wow fadeInUp" data-wow-delay=".4s">Sitemize <br />Hoşgeldiniz
                                </h1>
                                <p className="wow fadeInUp" data-wow-delay=".6s">Parça Temini, Tamir Ve Bakım vb. hizmetlerimizle 25 yıldan fazladır sizlerleyiz
                                </p>
                                <div className="button wow fadeInUp" data-wow-delay=".8s">
                                    <NavLink to="/about-us" className="btn ">Hakkımızda</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className="hero-image">
                                <img src="assets/images/hero/electric-screwdriver-icon-vectorportal.svg" className="main-image" alt="" style={{width: "450px"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Slider