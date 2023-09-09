import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom';
import { getCategories } from '../redux/actions/categoryAction';
import { getProductsById } from '../redux/actions/productsActions';

const Detail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCategories());
        dispatch(getProductsById(id));
    }, [dispatch, id]);

    const categories = useSelector((state=>state.categories.categories));
    const data = useSelector((state)=>state.products.products);

    return ( 
        <section className="call-action" style={{marginTop:"100px", marginBottom: "75px"}}>
        <div className="container">
            {
                data && (
                    <div className="inner-content">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-5 col-12">
                                <div className="text">
                                <img src={data.imageUrl} alt="" style={{maxWidth: "420px", maxHeight: "416px", borderRadius: "15px"}}/>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7 col-12">
                            <h3>{data.title}</h3>
                            <p>Ürün Açıklaması: {data.description} <br />Fiyatı: {data.price} TL</p>
                            <ul>
                                <li>Hizmetlerimiz: {data.services}</li>
                                <li>Parça Durumu: {data.pieceState ? "Var": "Yok"}</li>
                                <li>Kategori: {categories && categories.find(category=>category._id == data.categoryId)?.name}</li>
                            </ul>
                            <br /><br />
                            <NavLink to="/products">Geri Dön</NavLink>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </section>
    )
}

export default Detail