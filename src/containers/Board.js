import React from 'react';
import style from './Board.css';
import Tile from '../components/Tile.js'

class Board extends React.Component {

    // jak warunkowo dodać klasę wygląd do tych elementów króre chce
    

    render() {
        const nums = this.props.nums;

        return (
            <div>
                <div className={style.sudokuBoard}>
                    {nums.map((item, index) =>
                        <Tile
                            value={item}
                            className={style.sudokuTile}
                            key={index}
                            id={index}
                            onChange={(e) => this.props.handleChange(e)}
                        />
                    )}
                </div>
            </div>
        )
    }
}


export default Board;