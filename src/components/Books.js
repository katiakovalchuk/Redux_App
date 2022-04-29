import Book from './Book';
import '../index.css';

import {Box} from '@mui/material';

const Books = ({bookList}) => {

    return (
        <div>
            {
                bookList.length ? (
                    <Box sx={{mt: 10}}>
                        <h2>Books available:</h2>
                        {
                            bookList.map((book, idx) => <Book key={book.id} idx={idx} book={book}/>)
                        }
                    </Box>
                ) : (
                    <Box sx={{mt: 10}}>
                        <h2>Please add book to create a book list</h2>
                    </Box>
                )
            }
        </div>
    )
}

export default Books;
