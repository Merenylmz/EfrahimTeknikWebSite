import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import {logout} from "../redux/actions/authActions";

const Navbar = () => {

    const [isLoader, setIsLoader] = useState(true);
    const [navbar, setNavbar] = useState(false);
    const authStatus = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoader(false);
        }, 1000);
    })
    const toogleNavbarBtn = ()=>{
        if (navbar) {
            setNavbar(false);
        } else{
            setNavbar(true);
        }
    }

    const logoutOperation = () =>{
        dispatch(logout());
        navigate("/");
    }

    return (
        <>
            <div className="preloader" style={{display: isLoader ? "block" : "none",}}>
                <div className="preloader-inner">
                    <div className="preloader-icon">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <header className="header navbar-area"  style={{backgroundColor: "#24126A"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="nav-inner">
                                <nav className="navbar navbar-expand-lg">
                                    <a className="navbar-brand" href="/">
                                        <img src="assets/images/logo/whiteLogo.png" alt="Logo"/>
                                    </a>
                                    <button className="navbar-toggler mobile-menu-btn" type="button" onClick={toogleNavbarBtn} data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent" style={{display: navbar ? "block": "none"}}>
                                        <ul id="nav" className="navbar-nav ms-auto">
                                            <li className="nav-item">
                                                <NavLink to="/" className="active" aria-label="Toggle navigation">Anasayfa</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/about-us" aria-label="Toggle navigation">Hakkımızda</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/products">Ürünler</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/contact" aria-label="Toggle navigation">İletişim</NavLink>
                                            </li>
                                            {
                                                authStatus.isAuth ? <>
                                                    <li className="nav-item">
                                                        <NavLink to="/user" aria-label="Toggle navigation">Ürünler Listesi</NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="/user/categories" aria-label="Toggle navigation">Kategori Listesi</NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="/user/messages" aria-label="Toggle navigation">Mesajlar</NavLink>
                                                    </li>
                                                </>: ""
                                                    
                                            }
                                        </ul>

                                        {
                                            authStatus.isAuth ? (
                                                <>
                                                    
                                                    <div className="button wow fadeInUp" data-wow-delay=".8s">
                                                        <button onClick={logoutOperation} className="btn">Çıkış Yap</button>
                                                    </div>
                                                </>
                                            ):(
                                                <div>
                                                    <NavLink to="/login" style={{paddingRight: "15px", color: "white"}}>(Admin) Giriş Yap</NavLink>
                                                </div>
                                            )
                                        }
                                        
                                    </div> 
                                </nav>
                            </div>
                        </div>
                    </div> 
                </div> 
            </header>
        </>
    )
}

export default Navbar