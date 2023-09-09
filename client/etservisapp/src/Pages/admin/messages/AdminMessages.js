import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "../table.css";
import { NavLink } from 'react-router-dom';
import { deleteMessage, getAllMessages } from '../../../redux/actions/messageActions';

const AdminMessages = () => {

    const {token, isAuth} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllMessages(token));
    }, [dispatch]);

    const messages = useSelector((state)=>state.messages.messages);

    const deleteItem = (id) =>{
        if (window.confirm("Silmek İstediğinizden Emin misiniz?")) {
            dispatch(deleteMessage(id, token));
            dispatch(getAllMessages(token));
        }   
    }
    return (
        <div className='container mt-3'>
            <br />
            <br />
            <span style={{marginTop: "120px"}}></span>
            <button className='btn btn-primary btn-sm' onClick={()=>dispatch(getAllMessages(token))}>Yenile</button>
            <table className="styled-table" style={{marginBottom: "85px"}}>
                <thead>
                    <tr>
                        <th>Adı</th>
                        <th>Email</th>
                        <th>Mesajı</th>
                        <th>İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        messages.length > 0 && messages.map((msg, index)=>( 
                            <tr className={index % 2 == 0 ? "active-row" : ""} key={index}>
                                <td>{msg.name}</td>
                                <td>{msg.email}</td>
                                <td>{msg.messages}</td>
                                <td>
                                    <button className='btn btn-danger btn-sm' onClick={()=>deleteItem(msg._id)}>Sil</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default AdminMessages