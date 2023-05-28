import React, { memo, useEffect, useState } from 'react'
import { useMyContext } from '../context/context'
import './css/Box.css'

function Generate() {

    //import context state
    const { state, dispatch } = useMyContext();

    //store total count of boxes
    const [BoxCount, setBoxCount] = useState([]);

    //generate Array of Boxes Counts
    useEffect(() => {
        setBoxCount(() => {
            return [...Array(state.totalBoxes).keys()]
        })
    }, [state])



    //css of grid
    const GridContainerCss = {
        width: "90vw",
        height: "60dvh",
        display: 'grid',
        color: "aqua",
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
        alignItems: "center"
    }



    return (
        <>
            {
                BoxCount.length > 0 ?
                    <div className='GridBoxContainer' style={GridContainerCss}>
                        {BoxCount.map((data, ind) => {
                            return (
                                <div className="Boxes" key={ind} style={BoxBorder}>{data + 1}</div>
                            )
                        })}
                    </div> : ''
            }
        </>
    )
}

export default memo(Generate)