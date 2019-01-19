import React from 'react';
import Board from './Board.js';
import style from './style.css';
import { hot } from'react-hot-loader';
import sudoku from 'sudoku-umd';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialBoard: [],
            board: [],
            lvl: 'easy'
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
    }

    newGame() {
        let startBoard = sudoku.generate(this.state.lvl).split('');
        this.setState({
            initialBoard: [...startBoard],
            board: [...startBoard]
        })
    }

    setEasy() {
        this.setState({ lvl: 'easy' }, () => { this.newGame() });
    }

    setMedium() {
        this.setState({ lvl: 'medium' }, () => { this.newGame() });
    }

    setHard() {
        this.setState({ lvl: 'hard' }, () => { this.newGame() });
    }

    restart() {
        let initialBoard = this.state.initialBoard;
        this.setState({ board: [...initialBoard] })
    }

    solve() {
        let initialBoard = this.state.initialBoard;
        const solvedBoard = sudoku.solve(initialBoard.join('')).split('');
        this.setState({ board: solvedBoard });
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

        const {main, header, btnWrapper, btnRow, btn, btnLvl, selected} = style;


        return (
            <main className={main}>
                <h1 className={header}>sudoku</h1>
                <Board
                    nums={this.state.board}
                    initNums={this.state.initialBoard}
                    handleChange={this.handleChange.bind(this)}
                />
                <div className={btnWrapper}>
                    <div className={btnRow}>
                        <button className={btn} 
                                onClick={this.newGame.bind(this)}>new game</button>
                        <button className={`${btn} ${btnLvl} ${(this.state.lvl === 'easy') && selected}`}
                                onClick={this.setEasy.bind(this)}>easy</button>
                        <button className={`${btn} ${btnLvl} ${(this.state.lvl === 'medium') && selected}`}
                                onClick={this.setMedium.bind(this)}>medium</button>
                        <button className={`${btn} ${btnLvl} ${(this.state.lvl === 'hard') && selected}`}
                                onClick={this.setHard.bind(this)}>hard</button>
                    </div>
                    <div className={btnRow}>
                        <button className={btn} onClick={this.check.bind(this)}>check</button>
                        <button className={btn} onClick={this.solve.bind(this)}>solve</button>
                        <button className={btn} onClick={this.restart.bind(this)}>restart</button>
                    </div>
                </div>
            </main>
        )
    }
};

export default hot(module)(App);