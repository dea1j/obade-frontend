import React from 'react'
import './footer.css'
import HOME from '../../assets/img/home.svg';
import HISTORY from '../../assets/img/history.svg';
import LOGO from '../../assets/img/obadeLogo.svg';
import CARDS from '../../assets/img/cards.svg';
import PROFILE from '../../assets/img/profile.svg';

export default function Footer() {
    return (
        <div className='navigation'>
            <div className='nav-contents'>
                <div>
                    <img src={HOME} alt='home' />
                    <p>
                        Home
                    </p>
                </div>
                <div>
                    <img src={HISTORY} alt='history' />
                    <p>
                        History
                    </p>
                </div>
                <div>
                    <img src={LOGO} alt='logo' />
                    <p>
                        Wallet
                    </p>
                </div>
                <div>
                    <img src={CARDS} alt='cards' />
                    <p>
                        My Cards
                    </p>
                </div>
                <div>
                    <img src={PROFILE} alt='profile' />
                    <p>
                        Profile
                    </p>
                </div>
            </div>
        </div>
    )
}
