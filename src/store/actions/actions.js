import {ADD_BOOK, DELETE_BOOK, EDIT_BOOK} from '../types';


export const addBook = book => {
    // console.log('-------');
    // console.log({
    //     type: ADD_BOOK,
    //     payload: book
    // });
    return {
        type: ADD_BOOK,
        payload: book
    }
}

export const deleteBook = id => {
    return {
        type: DELETE_BOOK,
        payload: id
    }
}

export const editBook = book => {
    return {
        type: EDIT_BOOK,
        payload: book
    }
}
