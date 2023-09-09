import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <Navbar/>
        <div className="container" style={{margin: "300px 0", }}>
            <h1>Hata Sayfa Bulunamadı</h1>
            <p>Lütfen Tekrar Deneyin ve sayfanın olduğundan emin olun <br /> Eğer sayfaya hala erişemiyorsanız bizimle iletişim kısmından irtibat kurun</p>
            <br />
            <NavLink to={`/contact`}>İletişim Sayfası</NavLink>
        </div>
        <Footer/>
    </div>
  )
}

export default Error