import React, { memo, useEffect, useState } from 'react'
import { useMyContext } from '../context/context'
import './css/Box.css'

function Generate() {

    //import context state
    const { state, dispatch } = useMyContext();

    //store total count of boxes
    const [BoxCount, setBoxCount] = useState([]);

    //diagonal box index number array
    const [DiagonalBox, setDiagonalBox] = useState([]);

    //generate Array of Boxes Counts
    useEffect(() => {
        setBoxCount(() => {
            return [...Array(state.totalBoxes).keys()]
        })

        //setdiagonal box 
        setDiagonalBox(() => {
            let arr = [];
            for (let i = 1; i <= state.row; i++) {
                if (i == 1) {
                    arr.push(i)
                } else {
                    // e.g 2*4-4+2 ==> 6 
                    arr.push(i * state.column - state.column + i);
                }
            }

            return arr;
        })

    }, [state])



    //css of grid
    const GridContainerCss = {
        width: "90vw",
        height: "60dvh",
        display: 'grid',
        gridTemplateColumns: `repeat(${state.column},1fr)`,
        gridTemplateRows: `repeat(${state.row},1fr)`,
        border: "2px solid rgb(255, 0, 234)",
        outline: "2px solid lime",
        outlineOffset: "2px",
        borderRadius: "2px",
        marginTop: "50px",
        transform: "scale(1)",
        transformOrigin: "bottom",
        transition: ".3s",
    }

    const BoxBorder = {
        width: "100%",
        height: "100%",
        border: "1px solid aqua",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "aqua",
    }

    const DialogBoxCSS = {
        width: "100%",
        height: "100%",
        border: "1px solid black",
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `${state.diagColor}`
    }


    console.log(DiagonalBox)




    return (
        <>
            {
                BoxCount.length > 0 ?
                    <div className='GridBoxContainer' style={GridContainerCss}>
                        {BoxCount.map((data, ind) => {
                            return (
                                DiagonalBox.includes(data+1) ? <div className="Boxes" name='Boxes' key={ind} style={DialogBoxCSS}>{data + 1}</div> : <div className="Boxes" name='Boxes' key={ind} style={BoxBorder}>{data + 1}</div>
                            )
                        })}
                    </div> : ''
            }
        </>
    )
}

export default memo(Generate)
