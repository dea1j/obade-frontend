import React from 'react'

export default function PersonalInfo() {
    return (
        <div className='dashboard'>
            <div className='dashboard-container'>
                <div className='mb-5'>
                        <h3>Personal Information</h3>
                        <p className=''>Edit your personal information</p>
                    </div>

                    <div className=''>
                        <form className="signup-form">
                            <div className="form-group mb-4">
                                <input
                                    autoComplete="off"
                                    type="email"
                                    placeholder='Email / phone number'
                                    className='email brder'
                                    disabled
                                />
                            </div>
                            <div className="form-group mb-4">
                                <input
                                    autoComplete="off"
                                    type="text"
                                    placeholder='Current Password'
                                    className='password brder'
                                />
                            </div>
                            <div className="form-group mb-4">
                                <input
                                    autoComplete="off"
                                    type="text"
                                    placeholder='New Password'
                                    className='password brder'
                                />
                            </div>
                            <div className="form-group mb-5">
                                <input
                                    autoComplete="off"
                                    type="text"
                                    placeholder='Comfirm Password'
                                    className='password brder'
                                />
                            </div>
                            <div className="form-group">
                                <button className="btn mt-5">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    )
}
