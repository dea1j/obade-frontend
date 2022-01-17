import React from 'react'

import Footer from '../../Footer/Footer'
import CHECK from '../../../assets/img/Check-badge.png';
import ARROW from '../../../assets/img/Arrow-forward.png';

export default function Profile() {
    return (
        <div className='dashboard'>
            <div className='dashboard-container'>
                <div className='notification mb-3 mt-2'>
                    <div className=''>
                        <h2 className='p-2'>Profile</h2>
                    </div>
                </div>
                <div className='dboard-contents'>
                    <div className='howto mb-5'>
                    <h3>Get your money working</h3>
                    <div className='pt-3'>
                        <div className='how-works mb-3'>
                            <div>
                                <img src={CHECK} alt='check' />
                            </div>
                            <div>
                                <p className='howto-p'>How cashback works?</p>
                            </div>
                            <div>
                                <img src={ARROW} alt='arrow' />
                            </div>
                        </div>
                        <div className='vision'>
                            <div>
                                <p className='howto-p'>Discover New Features</p>
                                <p>Read more on obade to get access to the new features and services.</p>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
