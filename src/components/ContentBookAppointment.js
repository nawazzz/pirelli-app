import { 
    VStack, 
    Text,
    Container,
    Button,
    Flex,
    Box,
    Heading 
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import React from 'react';
// import { useDispatch } from 'react-redux';
import { Switch, Route, Routes, useParams, Link } from 'react-router-dom';

class ContentBookAppointment extends React.Component {
    
    render() {
        // const dispatch = useDispatch();
        return(
            <Flex  bg='rgba(30, 35, 41, 0.4)' w='100%' height='100vh' zIndex={-1} justifyContent='center' alignItems='center' flexDir='column' position='fixed' left='50%' top='50%' bottom='50%' transform='translate(-50%, -50%)'>
                
                <VStack borderRadius='10px' w='30%' px='24px' py='24px' display='flex' flexDir='column' bg='white' alignItems='center' justifyContent='center'>
                    <Flex w='100%' justifyContent='space-between' pb='20px' borderBottom='1px' borderBottomColor='#DEE0E1' mx='-24px'>
                        <Text 
                            fontWeight='700'
                            fontSize='20px'
                        >
                            Book Your Appointment
                        </Text>
                        <CloseIcon cursor='pointer' onClick={() => {this.props.handleCloseIncon()}} />
                    </Flex>
                    <Box w='100%' mt='10px'>
                        <Heading fontSize='32px'>Book Appointment</Heading>
                    </Box>
                    <Box w='100%'>
                        <Text>Dealers network specializing in tires and assistance</Text>
                        <Text>With our quick and easy booking process, you can choose your workshop and book your tires and tire service in five easy steps.</Text>
                    </Box>
                    <Flex w='100%' flexDir={'column'} gap={{ base: '4', lg: '2' }} mt="10"  alignItems='flex-start' onClick={(event) => {this.props.handleBookingWindow(event)}}>
                        <Button variant="primary" w='100%' bg='#FFDD00' >SeasonalTyreChange</Button>
                        <Button variant="primary" w='100%' bg='#FFDD00'>Book New tires</Button>
                        <Button variant="primary" w='100%' bg='#FFDD00'>Book services</Button>
                    </Flex>
                </VStack>
            </Flex>
        )
    }

}

export default ContentBookAppointment;

