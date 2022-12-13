import React from 'react';
import '../styles/MemoryCard.css';
import belly from '../assets/media/belly.png';

export default function MemoryCard(props) {
    const { select } = props;
    const { name, photo, bounty, crew, flag } = props.pirate;
    return (
        <div
            className="card"
            data-name={name}
            onClick={(e) => select(e.currentTarget.getAttribute('data-name'))}
        >
            <img className="photo" src={photo} alt={name} />
            <h3 className="name">{name}</h3>
            <p className="crew">{crew} Pirates</p>
            <div className="bounty">
                <img className="belly-symbol" src={belly} alt="Belly" />
                <p>{bounty.toLocaleString('en-US')}</p>
            </div>
        </div>
    );
}
