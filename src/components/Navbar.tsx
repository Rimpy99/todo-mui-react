import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
    return(
        <>
            <Drawer
                sx={{
                    width: 300,
                    '& .MuiDrawer-paper': {
                        width: 300,
                        boxSizing: 'border-box',
                      },
                }}
                variant='permanent'
                anchor='left'
            >
                <List>
                    <ListItem>
                        <Link to='/'>HOME</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/cards'>CARDS</Link>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}

export default Navbar;