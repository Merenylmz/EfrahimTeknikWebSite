import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addMessage } from '../redux/actions/messageActions';
import { useNavigate } from 'react-router';

const Contact = () => {
    
    const [inputs, setInputs] = useState({name: '', email: '', subject: '', messages: ''});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addMessage(inputs));
        alert("Mesajınız İletildi En Kısa Zamanda Cevap Verilecektir :)");
        navigate("/");
    }
    return (
        <div style={{width: "1000px", margin: "auto"}}>
            <div style={{margin: "200px auto", display: "flex"}}>
                <div style={{marginRight: "30px"}}>
                    <h3 className='mb-4'>Hadi Bize Mesaj Gönder :)</h3>
                    <form method="post" onSubmit={handleSubmit}>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <div><label>Adınız:</label><input type="text" id="name" className='form-control' value={inputs.name} onChange={(e)=>setInputs({...inputs, name: e.target.value})}/></div>
                            <div><label>Email:</label><input type="email" id="email" className='form-control' value={inputs.email} onChange={(e)=>setInputs({...inputs, email: e.target.value})}/></div>
                        </div>
                        <label>Konu</label>
                        <input type="text" id="subject" className='form-control' value={inputs.subject} onChange={(e)=>setInputs({...inputs, subject: e.target.value})}/>
                        <br />
                        <label>Mesajınız</label>
                        <textarea id="message" cols="30" rows="5" className='form-control' value={inputs.messages} onChange={(e)=>setInputs({...inputs, messages: e.target.value})}></textarea>
                        <br />
                        <button type="submit" className='btn btn-primary w-100 btn-sm'>Gönder</button>
                    </form>
                </div>
                <iframe title='deneme' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.669855940638!2d28.87006751153891!3d41.054348271224555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabaa595b9120d%3A0xb0e13d146e58059!2sEfrahim%20Teknik%20Servis!5e0!3m2!1str!2str!4v1691673963128!5m2!1str!2str" width="500" height="450" style={{border: "0"}} loading="lazy" ></iframe>
            </div>

        </div>
    )
}

export default Contact