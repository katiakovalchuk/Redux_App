import {useSelector} from 'react-redux';

import Books from './components/Books';
import Form from './components/Form';
import ThemeContext, {themes} from './context/ThemeContext';
import './index.css';

import {Box, Container} from "@mui/material";

function App() {
    const bookList = useSelector(state => state.bookReducer.bookList);

    return (
        <ThemeContext.Provider value={themes.light}>
            <Container maxWidth="md">
                <Box sx={{height: '100vh'}}>
                    <Form/>
                    <Books bookList={bookList}/>
                </Box>
            </Container>
        </ThemeContext.Provider>
    );
}

export default App;
