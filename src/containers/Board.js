import React from 'react';
import style from './Board.css';
import Tile from '../components/Tile.js'

class Board extends React.Component {

    // jak warunkowo dodać klasę wygląd do tych elementów króre chce
    

    render() {
        const nums = this.props.nums;
        let initNums = this.props.initNums;

        return (
            <div>
                <div className={style.sudokuBoard}>
                    {nums.map((item, index) => {
                        console.log(item);
                        return (
                            <Tile
                                value={item}
                                className={`${style.sudokuTile} ${(nums[index] === initNums[index]) ? style.sudokuTileBlock : null}`}
                                key={index}
                                id={index}
                                onChange={(e) => this.props.handleChange(e)}
                            />
                        )
                    }
                    )}
                </div>
            </div>
        )
    }
}


export default Board;