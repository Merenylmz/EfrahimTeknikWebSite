import React, { useEffect } from 'react'
import PopUp from "../Components/PopUp";
import Slider from "../Components/Slider";
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../redux/actions/categoryAction';
import { getLimitedProduct } from '../redux/actions/productsActions';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCategories());
        dispatch(getLimitedProduct(3));
    }, [dispatch]);
    const products = useSelector((state)=>state.products.products);
    const categories = useSelector((state)=> state.categories);
    return (
        <>
        <Slider/>
            <>
                <div className="feature section" style={{marginTop: "100px"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title">
                                    <h3 className="wow zoomIn" data-wow-delay=".2s">Ürünler</h3>
                                    <h2 className="wow fadeInUp" data-wow-delay=".4s">Ürünlerimiz</h2>
                                    <p className="wow fadeInUp" data-wow-delay=".6s">İşletmemizde bulunan Ürünler, Güvenli bir şekilde temin edebilirsiniz</p>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className='categorybtngroup' style={{display: 'flex'}}>
                            {
                                categories.categories.length > 0 && categories.categories.map(category => (
                                    <div data-wow-delay=".8s" key={category._id}>
                                        <NavLink to={`/cat/${category._id}`} style={{
                                            backgroundColor: "#3e80ff",
                                            padding: "7px 15px",
                                            borderRadius: "20px",
                                            color: "#fff",
                                            marginRight: "10px"
                                        }}>{category.name}</NavLink>
                                    </div>
                                ))
                            }
                        </div>
                        <br />
                        <div className="row">
                            {
                                products.length > 0 && products.map(product => (
                                    <NavLink to={`/details/${product._id}`} className="col-lg-4 col-md-6 col-12" key={product._id}>
                                        <div className="wow fadeInUp" data-wow-delay=".2s" style={{color: 'black'}}>
                                            <div className="feature-box">
                                                <div className="tumb">
                                                    <img src={product.imageUrl} alt=""/>
                                                </div>
                                                <h4 className="text-title">{product.title}</h4>
                                                <p> Fiyat: {product.price.toLocaleString("tr-TR")} TL<br /> Kategori:  {categories.categories && categories.categories.find(cat =>Number.parseInt(cat._id) === Number.parseInt(product.categoryId))?.name} </p>
                                                <p>Verdiğimiz Hizmetler: {product.services}</p>
                                                <p style={{color: "#1371fc"}}>Detay</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </>
        <PopUp/>
        </>
    )
}

export default Home