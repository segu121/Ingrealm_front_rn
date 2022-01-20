import React, {useState} from "react";

const UseMove = () => {
    const [move, setMove] = useState({x:0, y:0});

    const handleMouseMove = e => {
        e.persist();
        setMove(move => ({move , x: e.clientX, y: e.clientY}));
    }

    return {
        x: move.x,
        y: move.y,
        handleMouseMove
    }
}

export default UseMove;