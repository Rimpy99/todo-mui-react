import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/system';

import { Link, useLocation } from 'react-router-dom';

const NavHomeLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 23px;
    font-weight: 900;
    letter-spacing: 3px;
    padding: 10px 0;
    margin: 0 10px;
    ${location.pathname === '/' || location.pathname === '/todo-mui-react' && 'text-decoration: underline'}
`;

const NavCardsLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 23px;
    font-weight: 900;
    letter-spacing: 3px;
    padding: 10px 0;
    margin: 0 10px;
    ${location.pathname === '/cards' && 'text-decoration: underline'}
`;

const Navbar: React.FC = () => {
    const location = useLocation();

    return(
        <>
            <AppBar
                position='fixed'
                sx={{
                    backgroundColor: '#6b90ff',
                }}
            >
                 <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <NavHomeLink to='/'>HOME</NavHomeLink>
                        <NavCardsLink to='/cards'>CARDS</NavCardsLink>
                    </Toolbar>
                 </Container>
            </AppBar>
        </>
    )
}

export default Navbar;