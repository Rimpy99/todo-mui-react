import { Box } from '@mui/material';
import Masonry from '@mui/lab/Masonry';

const Card: React.FC = () => {

    return(
        <Box
            minHeight="100vh"
        >
            <Masonry columns={4} spacing={2}>
                <div></div>
                <div></div>
                <div></div>
            </Masonry>
        </Box>
    )
}

export default Card;
