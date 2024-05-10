import { useFormik } from 'formik';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup'
import {toast,ToastContainer} from 'react-toastify'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Login = () => {
const [userData,setUserData]=useState([])
const navigate=useNavigate()
const initialValues={
    userName:'',
    password:''
}
const validationSchema=Yup.object().shape({
    userName:Yup.string().required('userName required'),
    password:Yup.string().required('password required')
})
const formik=useFormik({
    initialValues,
    validationSchema,
    onSubmit:async(e)=>{
try {
    await axios.post('https://e-voting-back-end.onrender.com/api/loginUser',e).then(res=>{
toast.success(res.data.message)
setUserData(res.data.data)
setTimeout(()=>{
    if(userData.role=='admin'){
navigate('/admin')
    }
    else(navigate('/user'))
},4000)
}) 
} catch (error) {
    
     toast.error(error.response.data.message||error.message)
}
    }
    
})
    return (
    <div><ToastContainer/>
<div className='form'>

            <form className="form-container col-12 col-md-8" onSubmit={formik.handleSubmit}>
            <div >
<div className='heading'>
    <h2 className='pb-2 border-bottom border-2 '>Sign-In</h2>
</div>
<div className="name">
    
    <input type="text" id='userName' placeholder='UserName' onChange={formik.handleChange} />
<span className='error'>{formik.errors.userName}</span>
</div>

<div className="password">
    
    <input type="password" name="password" id="password"  placeholder='password' onChange={formik.handleChange}/>
    <span className='error'>{formik.errors.password}</span>
</div>

<div className='button'> 
    <button type="submit">login</button>
</div>
<p>
    Dont't have an account <NavLink to='/register'>Click Here</NavLink>
</p>
</div>
</form>
<div className='col-12 col-md-4 register-greetings' >
                <h1>
                <span>Welcome</span> back! <span>Ready</span> to <span>cast</span> your vote? Let's <span>get</span> <span>started</span> with a secure <span>login.</span>
             </h1>
            </div>

                       
        </div>
        </div>
    );

};

export default Login;