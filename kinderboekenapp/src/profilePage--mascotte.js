import React from 'react';
import './Mascotte.css'


class ProfileMascotte extends React.Component {


    render() {
        return (
            <section className="mascotte-name__section">
                <figure className="mascotte-name__section__figure">
                    <img className="mascotte-name__section__figure__img" src="img/mascotte_blue.png" alt="foto van een robot"></img>
                </figure>   
            </section>
        );
    }
}

export default ProfileMascotte;