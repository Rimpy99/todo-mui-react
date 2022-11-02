import { useEffect } from 'react';

import { Typography, Toolbar, Container, AppBar } from '@mui/material';
import { styled } from '@mui/system';

import { Link, useLocation } from 'react-router-dom';

const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 23px;
    font-weight: 900;
    letter-spacing: 3px;
    padding: 10px 0;
    margin: 0 10px;
`;

const Navbar: React.FC = () => {
    const location = useLocation();

    return(
        <>
            <AppBar
                position='static'
                sx={{
                    backgroundColor: '#6b90ff',
                    height: '5vh',
                }}
            >
                 <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <NavLink to='/'>
                            <Typography 
                                variant="h2" 
                                sx={{ 
                                    fontSize: '23px', 
                                    padding: '10px', 
                                    borderRadius: '5px', 
                                    ...((location.pathname === '/' || location.pathname === '/todo-mui-react') && {backgroundColor: '#496bd1',})
                                }}
                            >
                                HOME
                            </Typography>
                        </NavLink>
                        <NavLink to='/cards'>
                            <Typography 
                                variant="h2" 
                                sx={{ 
                                    fontSize: '23px', 
                                    padding: '10px', 
                                    borderRadius: '5px', 
                                    ...(location.pathname === '/cards' && {backgroundColor: '#496bd1',})
                                }}
                            >
                                CARDS
                            </Typography>
                        </NavLink>
                    </Toolbar>
                 </Container>
            </AppBar>
        </>
    )
}

export default Navbar;