import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
        <footer className="footer section" style={{position: "relative", bottom: "0", width: "100%"}}>
       
        <div className="footer-top">
            <div className="container">
                <div className="inner-content">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">

                            <div className="single-footer f-about">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src="assets/images/logo/whiteLogo.png" alt="#"/>
                                    </a>
                                </div>
                                <p>Sizlere En iyi hizmeti sunmaya çalışıyoruz.</p>
                                <h4 className="social-title">Bizi Takip Edin:</h4>
                                <ul className="social">
                                    <li><a href="https://wa.me/05445465098" target="_blank" rel='noreferrer'><i className="lni lni-whatsapp"></i></a></li>
                                    {/* <li><a href="#a" target="_blank" rel='noreferrer'><i className="lni lni-instagram"></i></a></li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <div className="single-footer f-link">
                                <h3>Sayfalarımız</h3>
                                <ul>
                                    <li><NavLink to="/">Anasayfa</NavLink></li>
                                    <li><NavLink to="/products">Ürünler</NavLink></li>
                                    <li><NavLink to="/about-us">Hakkımızda</NavLink></li>
                                    <li><NavLink to="/contact">İletişim</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-12" style={{display: "block", opacity: 0}}>
                            <div className="single-footer f-link">
                                
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-footer newsletter">
                                <h3>Teşekkürler :)</h3>
                                <p>Sitemizi incelediğiniz için teşekkürler</p>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="inner-content">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <p className="copyright-text">© {new Date().getFullYear()} Efrahim Teknik Servis - Tüm Hakları Saklıdır</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <p className="copyright-owner">Site Tasarımı ve Yazılımı <a href="#a"
                                >Muhammet Eren YILMAZ</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <a href="#" className="scroll-top">
        <i className="lni lni-chevron-up"></i>
    </a>

    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/wow.min.js"></script>
    <script src="assets/js/tiny-slider.js"></script>
    <script src="assets/js/glightbox.min.js"></script>
    <script src="assets/js/count-up.min.js"></script>
    <script src="assets/js/main.js"></script>
    <script src='assets/js/deneme.js'></script>
    </>
    )
}

export default Footer