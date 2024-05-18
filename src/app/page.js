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

    const [pickedWord, setPickedWord] = useState('');
    const [pickedCategory, setPickCategory] = useState('');
    const [letters, setLetters] = useState([]);

    const pickWordAndCategory = () => {
        // Pick a random category
        const categories = Object.keys(words);
        const category =
            categories[
                Math.floor(Math.random() * Object.keys(categories).length)
            ];

        // Pick a random word
        const word =
            words[category][Math.floor(Math.random() * words[category].length)];

        return { word, category };
    };

    // Start the secret word game
    const startGame = () => {
        // Pick word and pick category
        const { word, category } = pickWordAndCategory();

        // Create an array of letters
        let wordLetters = word.split('');

        wordLetters = wordLetters.map((l) => l.toLowerCase());

        console.log(word, category);
        console.log(wordLetters);

        // Fill states
        setPickedWord(word);
        setPickCategory(category);
        setLetters(letters);

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
