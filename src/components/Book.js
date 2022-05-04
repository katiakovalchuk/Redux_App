import {useState} from 'react';
import {useDispatch} from 'react-redux';

import {deleteBook, editBook} from "../store/actions/actions";
import {useTheme} from '../context/ThemeContext';
import '../index.css';

import {Card, CardContent, Typography} from '@material-ui/core';
import {Button, TextField} from '@mui/material';
import {DeleteOutline, EditOutlined} from '@material-ui/icons';

const Book = ({book, idx}) => {
    const {theme} = useTheme();
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [data, setData] = useState({
        title: false,
        description: false
    });

    const handleDeleteBook = id => {
        dispatch(deleteBook(id));
    }

    const handleEditBook = book => {
        dispatch(editBook({
            ...book,
            title: data.title,
            description: data.description
        }));
        setEdit(false);
    }

    return (
        <Card
            variant="outlined"
            style={{...theme, marginTop: 35}}
        >
            <CardContent>
                {
                    edit ? (
                        <>
                            <TextField
                                label='Edit book title'
                                fullWidth
                                required
                                sx={{ input: { color: theme.color }, marginTop: 3 }}
                                value={data.title}
                                onChange={e => setData(prev => ({...prev, title: e.target.value}))}
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Edit book description"
                                multiline
                                rows={4}
                                fullWidth
                                required
                                sx={{ textarea: { color: theme.color }, marginTop: 5 }}
                                value={data.description}
                                onChange={e => setData(prev => ({...prev, description: e.target.value}))}
                            />
                            <Button
                                sx={{mx: 3, mt: 3}}
                                variant="outlined"
                                endIcon={<EditOutlined/>}
                                style={{
                                    backgroundColor: "rgb(248,250,244)",
                                }}
                                onClick={() => handleEditBook(book)}
                            >
                                Save
                            </Button>
                            <Button
                                sx={{mt: 3}}
                                variant="outlined"
                                endIcon={<DeleteOutline/>}
                                style={{
                                    borderColor: "rgba(236,5,5,0.54)",
                                    color: "rgb(236,5,5,0.54)",
                                    backgroundColor: "rgb(221,232,238)",
                                }}
                                onClick={() => setEdit(false)}
                            >
                                Cancel
                            </Button>
                        </>
                    ) : (
                        <>
                            <Typography className='card-content' variant="h5" component="h3">
                                <div className='card-heading'>{idx + 1}.&nbsp;{book.title}</div>
                                <p className='card-description'>{book.description}</p>
                            </Typography>
                            <Button
                                sx={{mx: 3}}
                                variant="outlined"
                                endIcon={<DeleteOutline/>}
                                style={{
                                    borderColor: "rgba(236,5,5,0.54)",
                                    color: "rgb(236,5,5,0.54)",
                                    backgroundColor: "rgb(221,232,238)",
                                }}
                                onClick={() => handleDeleteBook(book.id)}
                            >
                                Delete
                            </Button>
                            <Button
                                variant="outlined"
                                endIcon={<EditOutlined/>}
                                style={{
                                    backgroundColor: "rgb(248,250,244)",
                                }}
                                onClick={() => {
                                    setEdit(true);
                                    setData({...data, title: book.title, description: book.description})
                                }}
                            >
                                Edit
                            </Button>
                        </>
                    )
                }
            </CardContent>
        </Card>
    )
}

export default Book;
