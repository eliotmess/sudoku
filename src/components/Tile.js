import React from 'react';

const Tile = props =>
    <input
        type="number"
        min="0"
        max="9"
        className={props.className}
        //disabled
    // co z takim atrybutem jak disabled - czy da się napisać instrukcję warunkową
        key={props.id}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
    ></input>

export default Tile;