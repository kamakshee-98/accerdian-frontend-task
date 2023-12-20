import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import './Loginvalidation';
import Validation from './Loginvalidation';
import axios from 'axios';

const Login = () => {
    /* create state for values */
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    /* created navigate to move to home page */
    const navigate = useNavigate();

    /* error handling */
    const [errors, setErrors] = useState({})

    /* on changes values */
    const handleInput = (event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    /* on submitting the form */
    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email === '' && errors.password === ''){
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data === "Success"){
                    navigate('/home');
                }
                else{
                    alert("no record found");
                }
            })
            .catch(err => console.log(err));
        }
    }
    return (
        <>
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <div className='bg-white p-3 w-50 rounded'>
                    {/* card */}
                    <div className="card">
                        <div className="card-body px-5">
                            {/* heading */}
                            <h5 className="card-title text-center fw-bold mt-2">Log In</h5>

                            {/* login form */}
                            <form action='' onSubmit={handleSubmit}>
                                {/* email */}
                                <div className="mb-2">
                                    <label htmlFor="email" name='email' onChange={handleInput} className='fw-bold'>Email</label>
                                    <input type="email" className="form-control" placeholder='Enter email' autoComplete='email'></input>
                                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                                </div>

                                {/* password */}
                                <div className="mb-2">
                                    <label htmlFor='password' name='password' onChange={handleInput} className='fw-bold'>Password</label>
                                    <input type="password" className="form-control" placeholder='Enter password' autoComplete='password'></input>    
                                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                                </div>

                                {/* login button */}
                                <div className=' mt-3 d-grid'>
                                    <button type='submit' className="custom-btn custom-btn-blue fw-bold">Log In</button>
                                </div>

                                <div className='my-2'>
                                    <hr className='text-muted' />
                                    <h5 className='text-muted text-center'>OR</h5>
                                    <hr className='text-muted' />
                                </div>

                                {/* signup button in login page */}
                                <div className='mt-2 mb-3 d-grid'>
                                    <button className="custom-btn custom-btn-blue fw-bold">
                                        <span className='text-muted fs-6'>Create an account?</span>
                                        <Link to='/signup' className='ms-1 text-info fw-bold'>Sign Up</Link>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
