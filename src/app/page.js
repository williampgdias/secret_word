'use client';

// React
import { userCallback, useEffect, useState } from 'react';

// data
import { wordsList } from '../data/words';

// Components
import StartScreen from '@/components/StartScreen';
import Game from '@/components/Game';
import GameOver from '@/components/GameOver';

const stages = [
    { id: 1, name: 'start' },
    { id: 2, name: 'game' },
    { id: 3, name: 'end' },
];

export default function Home() {
    const [gameStage, setGameStage] = useState(stages[0].name);
    const [words] = useState(wordsList);

    // Start the secret word game
    const startGame = () => {
        setGameStage(stages[1].name);
    };

    // process the letter input
    const verifyLetter = () => {
        setGameStage(stages[2].name);
    };

    // restart the game
    const retry = () => {
        setGameStage(stages[0].name);
    };

    return (
        <div className="App">
            {gameStage === 'start' && <StartScreen startGame={startGame} />}
            {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
            {gameStage === 'end' && <GameOver retry={retry} />}
        </div>
    );
}
