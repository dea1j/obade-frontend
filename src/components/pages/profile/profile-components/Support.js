import React from 'react'

export default function Support() {
    return (
        <div className='dashboard'>
            <div className='dashboard-container'>
                <div className='mb-4'>
                        <h3>Support</h3>
                        <p className=''>How can we help you?</p>
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
                                    placeholder='Subject Title'
                                    className='password brder'
                                />
                            </div>
                            <div className="form-group mb-5">
                                <textarea
                                    placeholder='Enter your message'
                                    className='password brder'
                                />
                            </div>
                            <div className="form-group">
                                <button className="btn mt-5">
                                    Send Support Ticket
                                </button>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    )
}
