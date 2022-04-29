import {ADD_BOOK, DELETE_BOOK, EDIT_BOOK} from '../types';
import BOOK_LIST from '../books.json';


const initialState = {
    bookList: [...BOOK_LIST]
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            // console.log(state);
            return {
                ...state,
                bookList: [...state.bookList, action.payload]
            }

        case DELETE_BOOK:
            return {
                ...state,
                bookList: state.bookList.filter(book => book.id !== action.payload)
            }

        case EDIT_BOOK:
            const editedBookList = state.bookList.map(book => book.id === action.payload.id ? (
                {
                    ...book,
                    title: action.payload.title,
                    description: action.payload.description
                }
            ) : book)
            console.log(editedBookList);
            return {
                ...state,
                bookList: editedBookList
                // bookList: [...state.bookList.filter(book => book.id !== action.payload.id), {...action.payload, key: action.payload.id }]
            }

        default:
            // console.log(action);
            // console.log(state);
            return state;
    }
}

export default bookReducer;
