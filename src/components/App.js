import React, { useEffect, useState } from 'react';
import { sample, select } from 'underscore';
import { pirates } from '../index';
import Scoreboard from './Scoreboard';
import MemoryCard from './MemoryCard';
import '../styles/App.css';
import logo from '../assets/media/logo.svg';

function App() {
    const [currScore, setCurrScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [chosen, setChosen] = useState([]);

    function resetGame() {
        setCurrScore(0);
        setChosen([]);
    }

    function selectCard(name) {
        console.log(chosen);
        if (chosen.includes(name)) {
            resetGame();
        } else {
            setCurrScore((prevScore) => prevScore + 1);
            setChosen((alreadyChosen) => alreadyChosen.concat(name));
        }
    }

    useEffect(() => {
        if (currScore > bestScore) setBestScore(currScore);
    }, [currScore, bestScore]);

    return (
        <div id="App">
            <div id="hero">
                <img src={logo} alt="One Piece" id="title-logo" />
                <h2 id="subtitle">(Most) Wanted (bounty poster style font)</h2>
                <p>
                    Can you track down all the members of the <strong>Worst Generation</strong> and
                    report them to the marines?
                    <br />
                    But be careful: they are already suspicious and the will run away and hide if
                    they become aware of your presence, so
                    <strong> do NOT choose the same one twice</strong>.
                </p>
            </div>

            <Scoreboard currScore={currScore} bestScore={bestScore} />
            <div id="cards-container">
                {sample(pirates, 10).map((pirate, idx) => (
                    <MemoryCard key={idx} pirate={pirate} select={selectCard} />
                ))}
            </div>
        </div>
    );
}

export default App;
