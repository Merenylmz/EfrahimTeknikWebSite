import React, {  useEffect, useState } from 'react';
import {  useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/authActions';

const Login = () => {

  const [inputs, setInputs] = useState({email: '', password: ''});
  // const {info, setInfo} = useContext(MainContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state)=> state.auth);
  const [authenticated, setAuthenticated] = useState(false);
  
  const handleSubmit = async(e)=>{
    e.preventDefault();

    dispatch(login(inputs.email, inputs.password));
  }

  useEffect(() => {
    if (status.isAuth && status.token != null) {
      setAuthenticated(true);
    }
    else if(status.token == null && !status.isAuth){
      setAuthenticated(false);
    }
  }, [status.isAuth, status.token]);

  useEffect(()=>{
    if (authenticated) {
      return navigate("/");
    }
    setInputs({email: '', password: ''});
  }, [authenticated, navigate]);

  return (
    <div style={{marginTop: "170px", marginBottom: "170px"}} className='container'>
      <form method="post" onSubmit={handleSubmit} style={{margin: "auto", width: "30%"}}>
        <label className='form-label'>Kullanıcı Adı veya Mailiniz</label>
        <input type="text" className="form-control" value={inputs.email} onChange={(e)=>setInputs({...inputs, email: e.target.value})}/>
        <br />
        <label>Şifreniz</label>
        <input type="password" className="form-control" value={inputs.password} onChange={(e)=>setInputs({...inputs, password: e.target.value})}/>
        <br />
        <button className='btn btn-primary w-100'>Giriş Yap</button>
      </form>
    </div>
  )
}

export default Login