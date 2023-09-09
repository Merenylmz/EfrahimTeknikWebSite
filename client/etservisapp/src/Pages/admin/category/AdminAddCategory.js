import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../../../redux/actions/categoryAction';
import { useNavigate } from 'react-router';

const AdminAddCategory = () => {
    const [inputs, setInputs] = useState({name: ''});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {token, isAuth} = useSelector((state)=>state.auth);


    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addCategory(inputs, token));
        navigate("/user/categories");
    }

    return (
        <div className='container mt-3'>
            <form method="post" style={{margin: "120px 0"}} onSubmit={handleSubmit}>
                <label>Kategori Adı:</label>
                <input type="text" id="title" className='form-control' value={inputs.name} onChange={(e)=>setInputs({...inputs, name: e.target.value})}/>
                <button type="submit" className='btn btn-primary mt-5'>Ekle</button>
            </form>
        </div>
    )
}

export default AdminAddCategory