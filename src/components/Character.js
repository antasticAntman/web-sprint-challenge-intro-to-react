// Write your Character component here
import React from 'react';

const Character = props => {
    return(
        <div className = 'CharacterWrapper'>
            {props.data.name}


        </div>
    )
}
export default Character;