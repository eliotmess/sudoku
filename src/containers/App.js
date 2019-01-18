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
        this.newGame();
    }

    handleChange(e) {
        let currentBoard = this.state.board;
        const oriBoard = this.state.initialBoard;
        let rep = e.currentTarget.value;
        
        if (currentBoard[e.target.id] !== oriBoard[e.target.id] || oriBoard[e.target.id] === '.') {
            currentBoard[e.target.id] = rep;
            this.setState({ board: currentBoard })
        }

        const compare = (currentBoard, oriBoard) => {
            for(let i = currentBoard.length; i--;) {
                if (currentBoard[i] !== oriBoard[i]) {
                    this.auto = false;
                    console.log('ok')
                }
            };
        }
        compare(currentBoard, oriBoard);
    }

    newGame() {
        const startBoard = sudoku.generate("hard").split('');
        this.setState({
            initialBoard: [...startBoard],
            board: [...startBoard]
        })
    }

    restart() {
        let initialBoard = this.state.initialBoard;
        this.setState({ board: [...initialBoard] })
    }

    solve() {
        let initialBoard = this.state.initialBoard;
        const solvedBoard = sudoku.solve(initialBoard.join('')).split('');
        this.setState({ board: solvedBoard })
    }

    check() {
        let currentBoard = this.state.board;
        let initialBoard = this.state.initialBoard;
        const solvedBoard = sudoku.solve(initialBoard.join('')).split('');

        const compare = (currentBoard, solvedBoard) => {
            let errs = 0;
            for(let i = currentBoard.length; i--;) {
                if (currentBoard[i] !== solvedBoard[i]) {
                    errs++; 
                }
            };
            if(errs === 0) {
                return alert('great.');
            } else {
                return alert(`lame. mistakes: ${errs}`);
            };
        }
        compare(currentBoard, solvedBoard);
    }

    render() {
        return (
            <React.Fragment>
                <h1>sudoku</h1>
                <Board
                    nums={this.state.board}
                    initNums={this.state.initialBoard}
                    handleChange={this.handleChange.bind(this)}
                    auto={this.auto}
                />
                <div>
                    <button onClick={this.newGame.bind(this)}>new game</button>
                    <button onClick={this.newGame.bind(this)}>easy</button>
                    <button onClick={this.check.bind(this)}>medium</button>
                    <button onClick={this.solve.bind(this)}>hard</button>
                    <button onClick={this.check.bind(this)}>check</button>
                    <button onClick={this.solve.bind(this)}>solve</button>
                    <button onClick={this.restart.bind(this)}>restart</button>
                </div>
            </React.Fragment>
        )
    }
};

export default hot(module)(App);