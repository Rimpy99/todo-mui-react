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

const CreateCard: React.FC = () => {

    //test

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
                    required
                    inputProps={{
                        maxlength: 48,
                    }}
                />
                <TextFieldCustomized
                    label="Add description"
                    multiline
                    rows={4}
                />
                <ButtonContainer>
                    <Button sx={{fontSize: '20px',}}>Add card</Button>
                </ButtonContainer>
            </CardContent>
        </Box>
    )
}

export default CreateCard;