import React from 'react'
import Cashback from '../cashback/Cashback'
import Footer from '../../Footer/Footer'
import LOGO from '../../../assets/img/obadeLogo.svg'
import './wallet.css'

export default function MyWallet() {
    return (
        <div className='dashboard'>
            <div className='dashboard-container'>
                <div className=''>
                    <div className='d-flex'>
                        <h2 className=''>My Wallet</h2>
                    </div>
                </div>
                <div className='dboard-contents mb-5'>
                    <div className='wallet-card p-3'>
                        <div className='balance'>
                            <p>Wallet Balance</p>
                            <h1>N20,000</h1>
                            <p>Dolapo Olisa</p>
                        </div>
                    </div>
                </div>
                <div className='history'>
                    <p>CASHBACK HISTORY</p>
                    <Cashback />
                </div>
            </div>
            <Footer />
        </div>
    )
}
