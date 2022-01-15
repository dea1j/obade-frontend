import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../../utils/context/UserContext';
import { POPULATE_USER } from '../../../utils/context/UserContext/Types';
import '../style.css';
import LOGO from '../../../assets/img/logo.svg';

export default function SignUp() {
    const [displaySpinner, setDisplaySpinner] = useState(false);
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
    
    const dispatch = () => {

    }

    useEffect(() => {
        userContext.dispatch({
            type: POPULATE_USER,
            payload: {
                name: "Dayo",
                password: "12345"
            }
        })
    }, [])

    console.log(userContext)

    return (
        <div className='signup'>
            <div className='signup-container'>
                <div className='form-part'>
                    <div className='mb-5'>
                        <img className='mb-2' src={LOGO} alt="logo" />
                        <h1>Create account</h1>
                        <p className='p-faint'> Instant cashback on services</p>
                    </div>

                    <div className=''>
                        <form className="signup-form">
                            <div className="form-group mb-4">
                                <input
                                    autoComplete="off"
                                    type="text"
                                    placeholder='FullName'
                                    className='fname brder'
                                    name="fullname"
                                    onChange={handleChange}
                                />
                            </div>
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
                            <div className="form-group mb-4">
                                <input
                                    autoComplete="off"
                                    type="tel"
                                    placeholder='Password'
                                    className='password brder'
                                    name="password"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mb-4">
                                <input
                                    autoComplete="off"
                                    type="tel"
                                    placeholder='Re-enter password'
                                    className='password brder'
                                    name="password"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <button hidden={displaySpinner} className="btn" type="submit">
                                    Create Account
                                </button>
                                <div hidden={!displaySpinner} className="spinner-border mt-3 text-success" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>

                <div className='terms'>
                    <p>By continuing you accept our Terms of Use and Privacy Policy.</p>
                </div>
            </div>
        </div>
    )
}
