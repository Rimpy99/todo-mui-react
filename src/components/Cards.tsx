import { useEffect } from 'react';

import { Box, Paper } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/system';

import { useAppSelector, useAppDispatch } from '../app/hooks';
import { removeCard }  from '../features/cardsSlice';
// import { useSelector } from 'react-redux';
// import { RootState } from '../app/store';

const BoxCustomized = styled(Box)({
    minHeight: '95vh',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '50px',
})

const MasonryCustomized = styled(Masonry)({
    width: '70%',
})

const CardCustomized = styled(Paper)({
    width: '250px',
    backgroundColor: 'red',
})

const Card: React.FC = () => {

    const dispatch = useAppDispatch();

    const cards = useAppSelector((state) => state.cards);

    useEffect(() => {
        
        console.log(cards)

    }, [cards])


    // cards.map(e => console.log(e.title))

    return(
        <BoxCustomized>
            <MasonryCustomized columns={3} spacing={2}>
                {cards.map((e) => (
                    <CardCustomized>
                        <h1>{e.title}</h1>
                        <h2>{e.desc}</h2>
                        <button onClick={() => dispatch(removeCard(e.id))}>DELETE</button>
                    </CardCustomized>
                ))}
            </MasonryCustomized>
        </BoxCustomized>
    )
}

export default Card;
