import React from 'react'
import { NavLink } from 'react-router-dom'

const PopUp = () => {
    return (
        <>  
            <section className="call-action">
                <div className="container">
                    <div className="inner-content">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-7 col-12">
                                <div className="text">
                                    <h2>Ürünlerimiz En iyi Şekilde
                                        <br/> <span>Temin Edilir</span>
                                    </h2>
                                    <p style={{display: "block", marginTop: "10px"}}>Ürünlerin hepsini görmek için Ürünler Sayfasına gidiniz.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-5 col-12">
                                <div className="button">
                                    <NavLink to="/products" className="btn">Ürünler</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PopUp