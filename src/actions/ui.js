import { types } from "../components/types/types";

export const setError = (err)=>({
    type: types.uiSetError,
    payload: err
})

export const removeError = (err)=>({
    type: types.uiRemoveError,
    payload: err
})