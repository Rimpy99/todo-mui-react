import { useState } from 'react';

import { styled } from '@mui/system';
import { Box, TextField, Button } from '@mui/material';

const CardContent = styled('div')({
    backgroundColor: 'aliceblue',
    width: '550px',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0px 9px 20px -7px rgba(66, 68, 90, 1)',
});

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

    const [cardTitle, setCardTitle] = useState<string>('');
    const [cardDesc, setCardDesc] = useState<string>('');
    const [cardTitleError, setCardTitleError] = useState<boolean>(false);

    const sendCard = () => {

        if(cardTitle === ''){
            setCardTitleError(true);
        }else{
            setCardTitleError(false);
            //send
            setCardTitle('');
            setCardDesc('');
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