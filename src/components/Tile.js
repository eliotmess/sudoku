import React from 'react';

const Tile = props => {
    const {className, disabled, id, value, onChange} = props;
    return (
    <input
            type="number"
            min="0"
            max="9"
            className={className}
            //{...disabled}
            key={id}
            id={id}
            value={value}
            onChange={onChange}
    ></input>
    )
}

export default Tile;