import { DRAW_X, DRAW_0 } from '../components/helpers/actionTypes';


export const drawXAction = (cell) => {
    return {
        type: DRAW_X,
        cell
    }
}

export const draw0Action = (cell) => {
    return {
        type: DRAW_0,
        cell
    }
}