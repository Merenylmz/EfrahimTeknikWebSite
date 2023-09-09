import React, { useEffect } from 'react'
import { deleteProduct, getProducts } from '../../../redux/actions/productsActions';
import { useDispatch, useSelector } from 'react-redux';
import "../table.css";
import { NavLink } from 'react-router-dom';

const AdminProducts = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts());
    }, [dispatch]);
    const products = useSelector((state)=>state.products.products);
    const {token, isAuth} = useSelector((state)=>state.auth);

    const deleteItem = (id) =>{
        if (window.confirm("Silmek İstediğinizden Emin misiniz?")) {
            dispatch(deleteProduct(id, token));
        }   
    }
    return (
        <div className='container mt-3'>
            <br />
            <br />
            <span style={{marginTop: "120px"}}></span>
            <div style={{display: 'flex', alignItems: "center", justifyContent: "space-between"}}>
                <button className='btn btn-primary'><NavLink to={`/user/addProduct`} style={{color: "white"}}>Yeni Ürün Ekle</NavLink></button>
                <button className='btn btn-primary btn-sm' onClick={()=>dispatch(getProducts())}>Yenile</button>
            </div>
            <table className="styled-table" style={{marginBottom: "85px"}}>
                <thead>
                    <tr>
                        <th>Başlık</th>
                        <th>Price</th>
                        <th>Hizmetler</th>  
                        <th>Parça Durumu</th>
                        <th>İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length > 0  && products.map((p, index)=>( 
                            <tr className={index % 2 == 0 ? "active-row" : ""} key={index}>
                                <td>{p.title}</td>
                                <td>{p.price}</td>
                                <td>{p.services}</td>
                                <td>{p.pieceState ? "Var" : "Yok"}</td>
                                <td>
                                    <button className='btn btn-danger btn-sm me-1' onClick={()=>deleteItem(p._id)}>Sil</button>
                                    <button className='btn btn-primary btn-sm'><NavLink to={`/user/${p._id}`} style={{color: "white"}}>Düzenle</NavLink></button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default AdminProducts