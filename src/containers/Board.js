import React from 'react';
import style from './Board.css';
import Tile from '../components/Tile.js'

class Board extends React.Component {

    // jak warunkowo dodać klasę wygląd do tych elementów króre chce
    

    render() {
        // let value = (value) => {
        //     if (value != ".") {
        //         return value;
        //     } else {
        //         value = '';
        //         value = this.props.newVal;
        //         return value;
        //     }
        // }
        const nums = this.props.nums;

        //const isEnabled = this.props.isEnabled;

        return (
            <div>
                <h2>board</h2>
                <div className={style.sudokuBoard}>
                    {nums.map((item, index) =>
                        <Tile
                            value={(item === '.') ? this.props.newVal : item}
                            // value={value(item)}
                            style={style.sudokuTile}
                            key={index}
                            //disabled={!isEnabled}
                            id={index}
                            onChange={(e) => this.props.handleType(e)}
                        />
                    )}
                </div>
            </div>
        )
    }
}


export default Board;