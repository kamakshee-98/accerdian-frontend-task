import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import Validation from './Signupvalidation';
import axios from 'axios';

const Signup = () => {
    /* create state for values */
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })

    /* create navigate  */
    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    /* onchange values */
    const handleInput = (event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    /* form submission */
    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.name === '' && errors.email === '' && errors.password === ''){
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/login');
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <>
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <div className='bg-white p-2 w-50 rounded'>
                    {/* card */}
                    <div className="card">
                        <div className="card-body px-5">
                            {/* heading */}
                            <h5 className="card-title text-center fw-bold mt-2">Sign up</h5>

                            {/* Sign-up form */}
                            <form action='' onSubmit={handleSubmit}>

                                {/* user name */}
                                <div className="mb-2">
                                    <label className='fw-bold'>User name</label>
                                    <input type="text" className="form-control" onChange={handleInput} name='name' autoComplete='name' placeholder='Enter User name'></input>
                                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                                </div>

                                {/* email */}
                                <div className="mb-2">
                                    <label className='fw-bold'>Email</label>
                                    <input type="email" className="form-control" onChange={handleInput} name='email' autoComplete='email' placeholder='Enter email'></input>
                                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                                    
                                </div>

                                {/* password */}
                                <div className="mb-2">
                                    <label htmlFor='password' className='fw-bold'>Password</label>
                                    <input type="password" onChange={handleInput} className="form-control" name='password' autoComplete='current-password' placeholder='Enter password'></input>
                                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                                    
                                </div>

                                {/* login button */}
                                <div className=' mt-3 d-grid'>
                                    <button type='submit' className="custom-btn custom-btn-blue fw-bold">Sign up</button>
                                </div>

                                <div className='my-2'>
                                    <hr className='text-muted' />
                                    <h5 className='text-muted text-center'>OR</h5>
                                    <hr className='text-muted' />
                                </div>

                                {/* signup button in login page */}
                                <div className='mt-2 mb-3 d-grid'>
                                    <button className="custom-btn custom-btn-blue fw-bold">
                                        <span className='text-muted fs-6'>Existing account?</span>
                                        <Link to='/login' className='ms-1 text-info fw-bold'>Login</Link>
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

export default Signup
