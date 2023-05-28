const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ROW_AND_COLUMN_AND_CALCULATE_TOTAL_BOX':
            return {
                ...state,
                row: +(action.payload.rows),
                column: +(action.payload.columns),
                totalBoxes: (+action.payload.rows) * +(+action.payload.columns),
                showBoxes : true,
            }
            break;
        default:
            return {...state}
    }
}

export default reducer;