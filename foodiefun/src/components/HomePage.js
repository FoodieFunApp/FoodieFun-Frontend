import React from 'react';
import Navigation from './Navigation.js';

import HeroImg from '../FoodieFunHero.jpg';
import Ken from '../Ken.png';
import Eric from '../Eric.png';
import DJ from '../DJ.png';

function HomePage () {
    return(
        <div className="home-page">
            <Navigation/>
            <div className="hero">
                <img src={HeroImg} />
            </div>
            <div className="team">
                <div className="team-member">
                    <p>Ken Ruf</p>
                    <img src={Ken}/>
                </div>
                <div className="team-member">
                    <p>Eric Hendrix</p>
                    <img src={Eric}/>
                </div>
                <div className="team-member">
                    <p>Dj Zaragosa</p>
                    <img src={DJ}/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;