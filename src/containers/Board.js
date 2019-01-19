import React from 'react';
import style from './style.css';
import Tile from '../components/Tile.js'

class Board extends React.Component {

    render() {
        const nums = this.props.nums;
        const initNums = this.props.initNums;
        const disabled = disabled;
        const {board, sudokuBoard, sudokuTile, sudokuTileBlock} = style;

        return (
            <div className={board}>
                <div className={sudokuBoard}>
                    {nums.map((item, index) => {
                        return (
                            <Tile
                                value={item}
                                className={`${sudokuTile} ${(nums[index] === initNums[index]) && initNums[index] !== '.' ? sudokuTileBlock : null}`}
                                key={index}
                                disabled={`${(nums[index] === initNums[index]) && initNums[index] !== '.' ? null : this.props.disabled}`}
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