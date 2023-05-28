import React, { memo, useRef } from 'react'
import { useMyContext } from '../context/context';
import Generate from './Generate';
import './css/Box.css'

function Input() {

    const { state, dispatch } = useMyContext();

    const rows = useRef();
    const columns = useRef();

    const HandleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_ROW_AND_COLUMN_AND_CALCULATE_TOTAL_BOX',
            payload: { rows: rows.current.value, columns: columns.current.value }
        })
    }

    return (
        <div>
            <form onSubmit={HandleSubmit}>
                <input type="number" ref={rows} placeholder='Enter Rows' required max={10} />
                <input type="number" ref={columns} placeholder='Enter columns' required max={10} />
                <input type="submit" value="SUBMIT" />
            </form>

            {/* //generate boxes here  */}
            <Generate />
        </div>
    )
}

export default memo(Input)