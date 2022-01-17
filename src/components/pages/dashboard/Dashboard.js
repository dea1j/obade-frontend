import React from 'react'
import Transactions from '../history/Transactions'
import Footer from '../../Footer/Footer'
import './dashboard.css'
import WALLET from '../../../assets/img/wallet.svg';
import AIRTIME from '../../../assets/img/airtimeLogo.svg';
import DATA from '../../../assets/img/dataLogo.svg';
import CHECK from '../../../assets/img/Check-badge.png';
import ARROW from '../../../assets/img/Arrow-forward.png';
import BELL from '../../../assets/img/bell.png';

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <div className='dashboard-container'>
                <div className='notification mb-3 mt-2'>
                    <div className='d-flex'>
                        <div className='pic'></div>
                        <h2 className='p-2'>Hi, Dolapo</h2>
                    </div>
                    <div className='p-2'>
                        <img src={BELL} alt='notification' />
                    </div>
                </div>
                <div className='dboard-contents'>
                    <div className='wallet-balance p-3'>
                    <div className='balance'>
                        <p>Wallet Balance</p>
                        <h1>N20,000</h1>
                    </div>
                    <div className='wallet-svg'>
                        <img src={WALLET} alt='wallet' />
                    </div>
                </div>
                <div className='option my-4'>
                    <div className='airtime'>
                            <img src={AIRTIME} />
                        <p>Purchase Airtime</p>
                    </div>
                    <div className='data'>
                        <div>
                            <img src={DATA} />
                        </div>
                        <p>Data & Internet</p>
                    </div>
                </div>
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
                                <img src={CHECK} alt='check' />
                            </div>
                            <div>
                                <p className='howto-p'>The Obade Vison Statement</p>
                            </div>
                            <div>
                                <img src={ARROW} alt='arrow' />
                            </div>
                             <div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='history'>
                    <h3>Transaction History</h3>
                    <Transactions />
                </div>
                </div>
            </div>
                <Footer />
        </div>
    )
}
