import React, { useEffect } from 'react'
import { deleteProduct } from '../../../redux/actions/productsActions';
import { useDispatch, useSelector } from 'react-redux';
import "../table.css";
import { NavLink } from 'react-router-dom';
import { deleteCategory, getCategories } from '../../../redux/actions/categoryAction';

const AdminCategories = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCategories());
    }, [dispatch]);

    const categories = useSelector((state)=>state.categories.categories);
    const {token, isAuth} = useSelector((state)=>state.auth);
    const deleteItem = (id) =>{
        if (window.confirm("Silmek İstediğinizden Emin misiniz?")) {
            dispatch(deleteCategory(id, token));
            dispatch(getCategories());
        }   
    }
    return (
        <div className='container mt-3'>
            <br />
            <br />
            <span style={{marginTop: "120px"}}></span>
            <div style={{display: 'flex', alignItems: "center", justifyContent: "space-between"}}>
                <button className='btn btn-primary'><NavLink to={`/user/addcategory`} style={{color: "white"}}>Yeni Kategori Ekle</NavLink></button>
                <b>Kategori Silerseniz O Kategoriye Ait Olan Ürünlerde Silenecektir</b>
                <button className='btn btn-primary btn-sm' onClick={()=>dispatch(getCategories())}>Yenile</button>
            </div>
            <table className="styled-table" style={{marginBottom: "85px"}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Kategori Adı</th>
                        <th>İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.length > 0 && categories.map((cat, index)=>( 
                            <tr className={index % 2 == 0 ? "active-row" : ""} key={index}>
                                <td>{cat._id}</td>
                                <td>{cat.name}</td>
                                <td>
                                    <button className='btn btn-danger btn-sm me-1' onClick={()=>deleteItem(cat._id)}>Sil</button>
                                    <button className='btn btn-primary btn-sm'><NavLink to={`/user/categories/${cat._id}`} style={{color: "white"}}>Düzenle</NavLink></button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default AdminCategories