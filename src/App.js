import React, {useEffect, useState} from 'react';
import Square from "./Square";

const clearSquares = ["", "", "", "", "", "", "", "", "", ""];

function App() {
    const [gameState, setGameState] = useState(clearSquares)
    const [isXChance, setIsXChance] = useState(false)


    const squareClickHandler = (index) => {
        let strings = Array.from(gameState);
        if (strings[index])
            return;
        strings[index] = isXChance ? "X" : "0";
        setIsXChance(!isXChance)
        setGameState(strings)
    }

    const clearGame = () => {
        setGameState(clearSquares)
    }

    
    let checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];
            }
        }
        return null;
    }


    useEffect(() => {
        let winner = checkWinner();
        console.log(winner)
        if (winner) {
            alert(`Ta da ! ${winner} won the Game !`)
            clearGame();
        }
    }, [gameState])

    return (
        <div className="header">
            <p className="heading-text">Tic-Tac-Toe </p>
            <div className="row jc-center">
                <Square className="b-bottom-right b-top b-left" onClick={() => squareClickHandler(0)} state={gameState[0]}/>
                <Square className="b-bottom-right b-top" onClick={() => squareClickHandler(1)} state={gameState[1]}/>
                <Square className="b-bottom-right b-top b-right" onClick={() => squareClickHandler(2)} state={gameState[2]}/>
            </div>
            <div className="row jc-center">
                <Square className="b-bottom-right b-left" onClick={() => squareClickHandler(3)} state={gameState[3]}/>
                <Square className="b-bottom-right" onClick={() => squareClickHandler(4)} state={gameState[4]}/>
                <Square className="b-bottom-right b-right" onClick={() => squareClickHandler(5)} state={gameState[5]}/>
            </div>
            <div className="row jc-center">
                <Square className="b-bottom-right b-bottom b-left" onClick={() => squareClickHandler(6)} state={gameState[6]}/>
                <Square className="b-bottom-right b-bottom" onClick={() => squareClickHandler(7)} state={gameState[7]}/>
                <Square className="b-bottom b-right" onClick={() => squareClickHandler(8)} state={gameState[8]}/>
            </div>
            <button className="clear-button" onClick={clearGame}>CLEAR GAME</button>
            <h2>Game by Harish Muddasani</h2>
            
        </div>
    );
}

export default App;