import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editCategory, getCategoryById } from '../../../redux/actions/categoryAction';
import { useNavigate, useParams } from 'react-router';

const AdminEditCategory = () => {
    const [inputs, setInputs] = useState({name: ''});
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();
    const categories = useSelector((state)=>state.categories.categories);
    const {token, isAuth} = useSelector((state)=>state.auth);

    useEffect(()=>{
        dispatch(getCategoryById(id));
    } ,[dispatch, id]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(editCategory(id, inputs, token));
        navigate("/user/categories");
    }

    useEffect(()=>{
        if (categories) {
            setInputs(prevInputs => ({
                ...prevInputs,
                ...categories
            }));
        }
    }, [categories])


    return (
        <div className='container mt-3'>
            <form method="post" style={{margin: "120px 0"}} onSubmit={handleSubmit}>
                <label>Başlık</label>
                <input type="text" id="title" className='form-control' value={inputs.name} onChange={(e)=>setInputs({...inputs, name: e.target.value})}/>
                <br />
                <button type="submit" className='btn btn-primary mt-5'>Değişiklikleri Kaydet</button>
            </form>
        </div>
    )
}

export default AdminEditCategory