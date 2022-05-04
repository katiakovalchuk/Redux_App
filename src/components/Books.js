import Book from './Book';
import {useTheme} from '../context/ThemeContext';
import '../index.css';

import {Box, Button} from '@mui/material';

const Books = ({bookList}) => {
    const {toggleTheme} = useTheme();

    return (
        <div>
            {
                bookList.length ? (
                    <Box sx={{mt: 10}}>
                        <div className='booklist-heading'>
                            <h2>Books available:</h2>
                            <Button
                                sx={{mx: 3, mt: 3}}
                                variant="outlined"
                                style={{
                                    backgroundColor: "rgb(248,250,244)",
                                }}
                                onClick={() => toggleTheme()}
                            >
                                Change theme
                            </Button>
                        </div>
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
