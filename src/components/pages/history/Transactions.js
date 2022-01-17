import React from 'react'
import ARROW from '../../../assets/img/Arrow-forward.png'
import AIRTIME from '../../../assets/img/airtimeLogo.svg';
import DATA from '../../../assets/img/dataLogo.svg';
import './history.css'

export default function Transactions() {
    return (
        <div>
            <div className='airtime-card my-3'>
                    <img src={AIRTIME} alt='aitrime' />
                    <div className='airtime-cont'>
                        <div className='airtime-details'>
                            <div>
                                0903 895 8829
                            </div>
                            <div>
                                Airtel
                            </div>
                        </div>
                        <div>
                            <h2>N500</h2>
                        </div>
                    </div>
                    <div>
                        <img src={ARROW} alt='arrow-right' />
                    </div>
                </div>
            <div className='airtime-card'>
                <img src={DATA} alt='data' />
                <div className='airtime-cont'>
                    <div className='airtime-details'>
                        <div>
                            0903 895 8829
                        </div>
                        <div>
                            Airtel
                        </div>
                    </div>
                    <div>
                        <h2>N500</h2>
                    </div>
                </div>
                <div>
                    <img src={ARROW} alt='arrow-right' />
                </div>
            </div>
            <div className='airtime-card my-3'>
                    <img src={AIRTIME} alt='aitrime' />
                    <div className='airtime-cont'>
                        <div className='airtime-details'>
                            <div>
                                0903 895 8829
                            </div>
                            <div>
                                Airtel
                            </div>
                        </div>
                        <div>
                            <h2>N500</h2>
                        </div>
                    </div>
                    <div>
                        <img src={ARROW} alt='arrow-right' />
                    </div>
                </div>
            <div className='airtime-card'>
                <img src={DATA} alt='data' />
                <div className='airtime-cont'>
                    <div className='airtime-details'>
                        <div>
                            0903 895 8829
                        </div>
                        <div>
                            Airtel
                        </div>
                    </div>
                    <div>
                        <h2>N500</h2>
                    </div>
                </div>
                <div>
                    <img src={ARROW} alt='arrow-right' />
                </div>
            </div>
        </div>
    )
}
