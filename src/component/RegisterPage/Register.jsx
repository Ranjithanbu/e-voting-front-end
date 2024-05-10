import React from 'react';
import './register.css'
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  axios  from 'axios';
import {useNavigate} from 'react-router-dom'
const Register = () => {
const navigate=useNavigate()    
    const initialValue={
        userName:'',
        email:'',
        password:''
    }
    const validationSchema=Yup.object().shape({
        userName:Yup.string().required('userName required'),
        email:Yup.string().email().matches(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, 'enter valid mail').required('email required'),
        password:Yup.string().min(5,'password must be gerater than 5 digits').max(10,'too length')
    })
   const formik=useFormik({
    initialValues:initialValue,
validationSchema,

onSubmit:async(e)=>{
    
    try {
        await axios.post('https://e-voting-back-end.onrender.com/api/registerUser',e).then(res=>{
        toast.success(res.data.message)
        setTimeout(()=>{
            navigate('/login')
        },4000)
    })    
    } catch (error) {
        toast.error(error.response.data.message||error.message)
    }
    
}

    
    

   })
    return (
        <div className='form' >
            <ToastContainer />
            <div className='col-12 col-md-4 register-greetings'>
                <h1>
                <span>Welcome!</span> Ready to make your <span>voice heard?</span> Let's get you <span>registered</span> to vote <span>quickly</span> and <span>securely.</span>
                </h1>
            </div>
             <form className="form-container col-12 col-md-8" onSubmit={formik.handleSubmit}>                 
            
<div >
<div className='heading'>
    <h2 className='pb-2 border-bottom border-2'>Register Account</h2>
</div>
<div className="name">
    
    <input type="text" id='userName' name='userName' placeholder='UserName' onChange={formik.handleChange} />
<span className='error'>{formik.errors.userName}</span>
</div>
<div className="email">
    
<input type="email" id='email' name='email' placeholder='xyz@gmail.com' onChange={formik.handleChange}/>
<span className='error'>{formik.errors.email}</span>
</div>
<div className="password">
    
    <input type="password" name="password" id="password"  placeholder='password' onChange={formik.handleChange}/>
    <span className='error'>{formik.errors.password}</span>
</div>

<div className='button'> 
    <button type="submit">Register</button>
</div>
<p>
    already have an account <NavLink to='/login'>Click Here</NavLink>
</p>
</div>  
</form>
     </div>
    );
};

export default Register;