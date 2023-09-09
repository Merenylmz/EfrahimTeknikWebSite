import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { getProductByCategoryId } from '../redux/actions/productsActions';

const ProductsByCategory = () => {

    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(()=>{
        dispatch(getProductByCategoryId(id));
    }, [dispatch]);
    const products = useSelector((state)=>state.products.productByCategoryId);

    return (
        <div>
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
                    <h3 style={{textAlign: "center", marginBottom: "10px"}}>{products.length} Tane Sonuç Döndü</h3>
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
                                            <p> Fiyat: {product.price.toLocaleString("tr-TR")} TL <br /> </p>
                                            <p>Verdiğimiz Hizmetler: {product.services}</p>
                                            <NavLink to={`/details/${product._id}`}>Detay</NavLink>
                                        </div>
                                    </div>
                                </NavLink>
                            ))
                        }
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsByCategory