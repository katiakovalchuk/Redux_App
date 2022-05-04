import {useState} from 'react';
import {useDispatch} from 'react-redux';

import {addBook} from '../store/actions/actions';
import '../index.css';

import {Box, Button, TextField} from '@mui/material';


const Form = () => {
    const initialState = {title: '', description: ''};
    const dispatch = useDispatch();
    const [{title, description}, setBook] = useState(initialState);

    const handleAddBook = e => {
        e.preventDefault();
        if (!title || !description) return;
        const newBook = {
            title,
            description,
            id: Date.now().toString()
        }
        dispatch(addBook(newBook));
        alert('Book has been saved!');
        setBook(initialState);
    }

    return (
        <Box sx={{mt: 10}}>
            <form className='form' onSubmit={handleAddBook}>
                <h2>Please enter book title and description to add a new book</h2>
                <TextField
                    id="outlined-basic"
                    label="Book title"
                    variant="outlined"
                    style={{marginTop: 20}}
                    required
                    fullWidth
                    value={title}
                    onChange={e => {
                        setBook(prev => ({...prev, title: e.target.value}))
                    }}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Book description"
                    multiline
                    rows={4}
                    style={{marginTop: 20}}
                    required
                    fullWidth
                    value={description}
                    onChange={e => {
                        setBook(prev => ({...prev, description: e.target.value}))
                    }}
                />
                <Button
                    sx={{m: 2}}
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Save book
                </Button>
            </form>
        </Box>
    )
}

export default Form;
