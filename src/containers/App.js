import React from 'react';
import Board from './Board.js';
import { hot } from'react-hot-loader';
import sudoku from 'sudoku-umd';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialBoard: [],
            board: []
        };
    };
    
    componentWillMount() {
        // for(let i=0; i < startBoard.length; i++) {
        //     if(startBoard[i] === "."){
        //         startBoard[i] = '';
        //     }
        //     return startBoard;
        // }
        // tutaj let, bo sie zmienia??
        let startBoard = sudoku.generate("hard").split('');
        
        this.setState({
            initialBoard: startBoard,
            board: startBoard
        })

    }

    handleType(e) {
        let gameBoard = this.state.board;
        const oriBoard = this.state.initialBoard;
        let rep = e.currentTarget.value;
        
        if (gameBoard[e.target.id] !== oriBoard[e.target.id] || gameBoard[e.target.id] === '.') {
            gameBoard[e.currentTarget.id] = rep;
            // console.log(e.currentTarget.value);
            console.log(gameBoard[e.currentTarget.id]);
            console.log(oriBoard[e.currentTarget.id]);
        }

        // gameBoard.forEach = (val, index) => {
        //     if(e.currentTarget.value === val && e.target.id === index) {
        //                 this.newVal = e.currentTarget.value;
        //                 console.log(this.newVal);
        //                 gameBoard[e.target.id] = this.newVal;
        //             }
        //             return gameBoard;
        // }
        //this.newVal='';
        // console.log(this.newVal)
        

        // oriBoard.forEach = (val, index) => {
        //     if(e.currentTarget.value === val && e.target.id === index) {
        //         this.newVal = e.currentTarget.value;
        //         console.log(this.newVal);
        //         gameBoard[e.target.id] = this.newVal;
        //     }
        //     return gameBoard;
        // }
        console.log(gameBoard)
        this.setState({
            board: gameBoard
        })
        
    }

    newGame() {
        // this.newVal; // przyjmuje ostatnią wartość inputa i mapuje na wszystkie z '.'

        let startBoard = sudoku.generate("hard").split('');

        this.setState({
            initialBoard: startBoard,
            board: startBoard
        })
    }

    // isEnabled(e) {
    //     let isEnabled = oriBoard[e.currentTarget.id] ===  gameBoard[e.target.id] && gameBoard[e.target.id] != '.';
    //     return isEnabled;
    // }

    render() {
        return (
            <React.Fragment>
                <h1>sudoku</h1>
                <Board
                    nums={this.state.board}
                    handleType={this.handleType.bind(this)}
                    newVal={this.newVal}
                    //disabled={this.isEnabled}
                />
                <div>
                    <button onClick={this.newGame.bind(this)}>new game</button>
                    <button>check</button>
                    <button>solve</button>
                    <button>restart</button>
                </div>
            </React.Fragment>
        )
    }
};

export default hot(module)(App);