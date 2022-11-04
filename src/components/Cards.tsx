import { useEffect } from 'react';

import { Box, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/system';

import { useAppSelector, useAppDispatch } from '../app/hooks';
import { removeCard }  from '../features/cardsSlice';
import { normalize } from 'path';

const BoxCustomized = styled(Box)({
    minHeight: '95vh',
    paddingTop: '50px',
})

const CardCustomized = styled('div')({
    width: '400px',
    height: '480px',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '15px',
    wordBreak:'break-all',
})

const CardHeader = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '50px',
})

const CardDesc = styled('p')({
    paddingTop: '20px',
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
            <Grid 
                container
                direction="row"
                justifyContent="center"
                spacing={2}
            >
                {cards.map((e) => (
                    <Grid item>
                        <CardCustomized>
                            <CardHeader>
                                <h3>{e.title}</h3>
                                <DeleteIcon 
                                    onClick={() => dispatch(removeCard(e.id))}
                                    sx={{
                                        cursor: 'pointer',
                                        color: '#12074a',
                                    }}
                                />
                            </CardHeader>
                            <CardDesc>{e.desc}</CardDesc>
                        </CardCustomized>
                    </Grid>
                ))}
            </Grid>
        </BoxCustomized>
    )
}

export default Card;
