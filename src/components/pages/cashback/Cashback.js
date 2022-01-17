import React from 'react'
import ARROW from '../../../assets/img/Arrow-back.png'
import LOGO from '../../../assets/img/squareLogo.svg'

export default function Cashback() {
    return (
        <div>
            <div className='airtime-card my-3'>
                <img src={LOGO} alt='aitrime' />
                <div className='airtime-cont'>
                    <div className='airtime-details'>
                        <div>
                            0903 895 8829
                        </div>
                        <div>
                            Airtel
                        </div>
                    </div>
                </div>
                <div>
                    <p>+N500</p>
                </div>
            </div>
            <div className='airtime-card my-3'>
                <img src={LOGO} alt='aitrime' />
                <div className='airtime-cont'>
                    <div className='airtime-details'>
                        <div>
                            0903 895 8829
                        </div>
                        <div>
                            Airtel
                        </div>
                    </div>
                </div>
                <div>
                    <p>+N500</p>
                </div>
            </div>
        </div>
    )
}
