import React from 'react'
import './purchase.css'
import BACK from '../../../assets/img/Arrow-back.png'

export default function purchaseAirtime() {
    return (
        <div className='dashboard'>
            <div className='dashboard-container'>
                <div>
                    <img src={BACK} alt='arrow' />
                </div>
                <div className='purchase-header mt-5'>
                    <h2>Purchase Airtime</h2>
                    <p>Who are you buying for ?</p>
                </div>
                <div>
                    <form>
                        <div className='form-group mb-3 d-flex justify-content-around'>
                            <div className='d-flex'>
                                <input type='checkbox' />
                                <p  className='px-2'>For Myself</p>
                            </div>
                            <div className='d-flex'>
                                <input type='checkbox' />
                                <p className='px-2'>Other Numbers</p>
                            </div>
                        </div>
                        <div className='form-group mb-4'>
                            <input type='tel' placeholder='Phone Number' className='phone brder' />
                        </div>
                        <div className='form-group mb-4'>
                            <select className='phone brder'>
                                <option value="0">Mobile Network</option>
                                <option value="1">MTN</option>
                                <option value="2">AIRTEL</option>
                                <option value="3">GLO</option>
                            </select>
                        </div>
                        <div className='form-group mb-4'>
                            <input type='tel' placeholder='Amount' className='phone brder' />
                        </div>

                        <div className='mb-4'>
                            <div className='d-flex mb-2 buttons-container'>
                                <button className='amount-button'>100</button>
                                <button className='amount-button'>200</button>
                            </div>
                            <div className='d-flex mb-2 buttons-container'>
                                <button className='amount-button'>500</button>
                                <button className='amount-button'>1500</button>
                            </div>
                        </div>

                        <div className='form-group mb-5'>
                            <select className='phone brder'>
                                <option value="0">Select Payment Method</option>
                                <option value="1">VISA- 2334 5666 3333 4566</option>
                                <option value="2">MASTER- 2334 5666 3333 4566</option>
                            </select>
                        </div>

                        <button className='btn'>Buy</button>

                    </form>

                </div>
            </div>
        </div>
    )
}
