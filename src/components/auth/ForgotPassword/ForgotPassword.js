import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../../utils/context/UserContext';
import { POPULATE_USER } from '../../../utils/context/UserContext/Types';
import '../style.css';
import LOGO from '../../../assets/img/logo.svg';

export default function ForgotPassword() {
  const [signupData, setSignupData] = useState({
    fullname: "",
    email: "",
    phone_number: ""
  });

  function handleChange(e) {
    signupData[e.target.name] = e.target.value;
    setSignupData(signupData);
  }

    const userContext = useContext(UserContext);

    return (
        <div className='signup'>
            <div className='signup-container'>
                <div className='form-part'>
                    <div className='mb-4'>
                        <img className='mb-2' src={LOGO} alt="" />
                        <h1>Password Recovery</h1>
                        <p className='p-faint'>Let’s help you get back in</p>
                    </div>

                    <div className=''>
                        <form className="signup-form">
                            <div className="form-group mb-4">
                                <input
                                    autoComplete="off"
                                    type="text"
                                    placeholder='Email / phone number'
                                    className='email brder'
                                    name="email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <button className="btn" type="submit">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>  
                </div>
                <div className='forgot'>
                    <p>Forgot Password?</p>
                </div>
                <div className='terms'>
                    <p>By continuing you accept our Terms of Use and Privacy Policy.</p>
                </div>
            </div>
        </div>
    )
}

