import { useState, useEffect } from 'react';

import { styled } from '@mui/system';
import { Box, TextField, Button } from '@mui/material';

import { useAppDispatch } from '../app/hooks';
import { addCard }  from '../features/cardsSlice';


const CardContent = styled('div')({
    backgroundColor: 'aliceblue',
    width: '550px',
    height: '450px',
    display: 'flex',
    flexDirection: 'column',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0px 9px 20px -7px rgba(66, 68, 90, 1)',
});

const SuccessfulNotification = styled('div')({
    textAlign: 'center',
    fontSize: '18px',
    color: 'green',
    padding: '15px 0',
    userSelect: 'none',
})

const TextFieldCustomized = styled(TextField)({
    marginTop: '20px',
})

const ButtonContainer = styled('div')({
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

const ButtonCustomized = styled(Button)({
    fontSize: '20px',
    backgroundColor: '#6b90ff',
    '&:hover': {
        backgroundColor: '#496bd1'  
    }
})

const CreateCard: React.FC = () => {

    const dispatch = useAppDispatch();

    const [cardTitle, setCardTitle] = useState<string>('');
    const [cardDesc, setCardDesc] = useState<string>('');
    const [cardTitleError, setCardTitleError] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    useEffect(() => {

        if(success === true){

            setTimeout(() => {

                setSuccess(false);

            }, 2000);

        }

    }, [success])

    const sendCard = () => {

        if(cardTitle === ''){
            setCardTitleError(true);
        }else{
            setCardTitleError(false);
            
            dispatch(
                addCard(
                    {
                        id: Date.now(),
                        title: cardTitle,
                        desc: cardDesc,
                        isCompleted: false,
                    }
                )
            )

            setCardTitle('');
            setCardDesc('');

            setSuccess(true);
        }

    }

    return(
        <Box
            display='flex'
            justifyContent="center"
            alignItems="center" 
            minHeight="100vh"
        >
            <CardContent>
                <SuccessfulNotification sx={{ ...(success ? { opacity: 1, } : { opacity: 0, }) }}>
                    <p>Card was created successfully.</p>
                </SuccessfulNotification>
                <TextFieldCustomized
                    label="Add title"
                    value={cardTitle}
                    required
                    inputProps={{
                        maxlength: 48,
                    }}
                    onChange={(e) => setCardTitle(e.target.value)}
                    error={cardTitleError}
                />
                <TextFieldCustomized
                    label="Add description"
                    value={cardDesc}
                    multiline
                    rows={4}
                    onChange={(e) => setCardDesc(e.target.value)}
                />
                <ButtonContainer>
                    <ButtonCustomized variant='contained' onClick={() => sendCard()}>Add card</ButtonCustomized>
                </ButtonContainer>
            </CardContent>
        </Box>
    )
}

export default CreateCard;