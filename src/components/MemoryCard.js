import React from 'react';
import '../styles/MemoryCard.css';
import belly from '../assets/media/belly.png';
import smallRibbon from '../assets/media/small_ribbon.webp';
import largeRibbon from '../assets/media/large_ribbon.webp';

export default function MemoryCard(props) {
    const { select } = props;
    const { name, photo, bounty, crew } = props.pirate;
    return (
        <div
            className="card"
            data-name={name}
            onClick={(e) => select(e.currentTarget.getAttribute('data-name'))}
        >
            <img className="photo" src={photo} alt={name} />
            <div>
                <div className="ornament">
                    <img alt="" className="ribbon small left" src={smallRibbon} />
                    <img alt="" className="ribbon large left" src={largeRibbon} />
                </div>
                <div className="info">
                    <h3 className="name">{name}</h3>
                    <p className="crew">{crew} Pirates</p>
                    <div className="bounty">
                        <img className="belly-symbol" src={belly} alt="Belly" />
                        <p>{bounty.toLocaleString('en-US')}&ndash;</p>
                    </div>
                </div>
                <div className="ornament">
                    <img alt="" className="ribbon small right" src={smallRibbon} />
                    <img alt="" className="ribbon large right" src={largeRibbon} />
                </div>
            </div>
        </div>
    );
}
