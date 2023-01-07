// Write your Character component here
import React from 'react';
import styled from 'styled-components'

const CharWrap = styled.div `
    text-align:center;
    border:1px solid black;
    border-radius:10px;
    h3{
        color:black;
        border:1px solid black;
        display:flex;
        align-items:center;
        margin-left:20px;
        &:hover {
            border:2px solid yellow;
            scale:1.5;
        }
    }

    display:flex;
    justify-content:space-around;
    align-items:center;
`

const Character = props => {
    return(
        <CharWrap className = 'CharacterWrapper'>
            <h1>Name: {props.data.name}</h1>
            <h3> - {props.data.birth_year}</h3>
            <h3> - {props.data.gender}</h3>

        </CharWrap>
    )
}
export default Character;