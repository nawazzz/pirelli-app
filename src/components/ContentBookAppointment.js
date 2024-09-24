import { 
    VStack, 
    Text,
    Button,
    Flex,
    Box 
} from '@chakra-ui/react';
import React from 'react';

class ContentBookAppointment extends React.Component {
    render() {
        return(
            <Flex mt='40' textAlign='center' flexDir='column' alignItems='flex-start'>
                <Box w='70%'>
                    <Text>Dealers network specializing in tires and assistance</Text>
                    <Text>With our quick and easy booking process, you can choose your workshop and book your tires and tire service in five easy steps.</Text>
                </Box>
            <Flex flexDir={'column'} gap={{ base: '4', lg: '2' }} mt="10" w='70%' alignItems='flex-start'>
                <Button variant="primary" w='100%' bg='#FFDD00'>SeasonalTyreChange</Button>
                <Button variant="primary" w='100%' bg='#FFDD00'>Book New tires</Button>
                <Button variant="primary" w='100%' bg='#FFDD00'>Book services</Button>
            </Flex>
        </Flex>
        )
    }

}

export default ContentBookAppointment;