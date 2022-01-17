import React from 'react'
import '../style.css';
import LOGO from '../../../assets/img/logo.svg';

export default function NewPassword() {
    return (
        <div className='signup'>
            <div className='signup-container'>
                <div className='form-part'>
                    <div className='mb-5'>
                        <img className='mb-2' src={LOGO} alt="logo" />
                        <h1>New Password</h1>
                        <p className='p-faint'>Perhaps something a little easier?</p>
                    </div>

                    <div className=''>
                        <form className="signup-form">
                            <div className="form-group mb-4">
                                <input
                                    autoComplete="off"
                                    type="text"
                                    placeholder='Password'
                                    className='password brder'
                                />
                            </div>
                            <div className="form-group mb-4">
                                <input
                                    autoComplete="off"
                                    type="text"
                                    placeholder='Comfirm Password'
                                    className='password brder'
                                />
                            </div>
                            <div className="form-group">
                                <button className="btn">
                                    Save and Continue
                                </button>
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
