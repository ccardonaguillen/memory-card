import React, { useState } from 'react';
import '../styles/Scoreboard.css';

export default function Scoreboard(props) {
    const { currScore, bestScore } = props;
    return (
        <div id="scoreboard">
            <p>
                <strong>Score</strong>: {currScore}
            </p>
            <p>
                <strong>Best</strong>: {bestScore}
            </p>
        </div>
    );
}
