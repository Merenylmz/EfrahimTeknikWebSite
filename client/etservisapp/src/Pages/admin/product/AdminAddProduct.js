import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../../redux/actions/productsActions';
import { getCategories } from '../../../redux/actions/categoryAction';
import { useNavigate } from 'react-router';

const AdminAddProduct = () => {
    const [inputs, setInputs] = useState({title: '', description: '', price: 0, services: '', pieceState: false, imageUrl: '', categoryId: 0});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {token, isAuth} = useSelector((state)=>state.auth);

    useEffect(()=>{
        dispatch(getCategories());
    } ,[dispatch]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addProduct(inputs, token));
        navigate("/user");
    }

    const categories = useSelector((state)=>state.categories.categories);
    return (
        <div className='container mt-3'>
            <form method="post" style={{margin: "120px 0"}} onSubmit={handleSubmit}>
                <label>Başlık</label>
                <input type="text" id="title" className='form-control' value={inputs.title} onChange={(e)=>setInputs({...inputs, title: e.target.value})}/>
                <br />
                <label>Açıklama</label>
                <textarea type="text" id="description" className='form-control' value={inputs.description} onChange={(e)=>setInputs({...inputs, description: e.target.value})}></textarea>
                <br />
                <label>Fiyat</label>
                <input type="number" id="price" className='form-control' value={inputs.price} onChange={(e)=>setInputs({...inputs, price: e.target.value})}/>
                <br />
                <label>Hizmetler</label>
                <input type="text" id="services" className='form-control' value={inputs.services} onChange={(e)=>setInputs({...inputs, services: e.target.value})}/>
                <br />
                <label>Parça Durumu</label>
                <select id="pieceState" className='form-control' value={inputs.pieceState} onChange={(e)=>setInputs({...inputs, pieceState: e.target.value})}>
                    <option value="true">Var</option>
                    <option value="false">Yok</option>
                </select>
                <br />
                <label>Image Url</label>
                <input type="text" id="imageUrl" className='form-control' value={inputs.imageUrl} onChange={(e)=>setInputs({...inputs, imageUrl: e.target.value})}/>
                <br />
                <label>Kategori Seçiniz</label> 
                <select id="categoryid" className='form-control' value={inputs.categoryId} onChange={(e)=>setInputs({...inputs, categoryId: e.target.value})}>
                    <option value="-1">Seçiniz...</option>
                    {
                        categories && categories.map(category=>(
                            <option value={category._id} key={category._id}>{category.name}</option>
                        ))
                    }
                </select>
                <button type="submit" className='btn btn-primary mt-5'>Ekle</button>
            </form>
        </div>
    )
}

export default AdminAddProduct