import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <>
            <div className="feature section" style={{marginTop: "100px"}}>
                <div className="container">
                    <div className="inner-content">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-7 col-12">
                                <div className="text">
                                    <h2>Efrahim Teknik Servis</h2>

                                    <p style={{display: "block", marginTop: "10px"}}></p>
                                    <p>Efrahim Teknik Servis  Ünvanı ile İstanbul Esenler ilçesinde, 1999 yılında <br /> başlayan hizmet serüvenimize aynı heyecan ve istekle devam etmekteyiz.</p>
                                    <br />
                                    <p>Kücük ev aletleri tamiri ve Pilsan Marka Akülü Arac yetkili servisligi <br /> grubunda hızlı, güvenilir, garantili ve zamanında teslim olanağı ile sunulmaktadır.</p>
                                    <p>Teknisyen ekibimiz olabildiğince güleryüzlü işinin ehli ve tüm belgeleri <br /> mevcut olup iş yerimizde oldukça temiz ve düzenlidir. Güven içinde gelebilirsiniz <br /> Emin Olun Memnun kalacaksınız.</p>
                                    <br />
                                    <p>Yapılan ürünlerimizin bazıları;</p>
                                    <ul>
                                        <li>-Elektrikli Süpürgeler</li>
                                        <li>-Ütü Ve Buhar makinaları</li>
                                        <li>-Akülü Araba Tamiratı (Yanlızca Pilsan ürünleri için)</li>
                                        <li>-Vantilatöre Ve Klimalar</li>
                                        <li>-UFO ve Diğer Isıtıcı Ürünler</li>
                                        <li>-Blender ve Rondo Tamiratı</li>
                                        <li>...</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-5 col-12">
                                <div className="button">
                                    <NavLink to="/contact" className="btn">İletişime Geçin
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About