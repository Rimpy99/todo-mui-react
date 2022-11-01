import { Box } from '@mui/material';
import Masonry from '@mui/lab/Masonry';

import { useAppSelector } from '../app/hooks';
// import { useSelector } from 'react-redux';
// import { RootState } from '../app/store';

const Card: React.FC = () => {

    const cards = useAppSelector((state) => state.cards);

    console.log(cards.length)

    // cards.map(e => console.log(e.title))

    return(
        <Box 
            minHeight="100vh"
        >
            <Masonry columns={4} spacing={2}>
                {cards.map((e) => (
                    <div>{e.title}</div>
                ))}
            </Masonry>
        </Box>
        // <div>
        //     {cards.length !== 0 && cards.map((card) => (
        //         <h1>{card.title}</h1>
        //     ))}
        // </div>
    )
}

export default Card;
