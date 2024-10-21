import { VStack, Select, Text, Box, Input, Flex, Button, Image } from '@chakra-ui/react';
import { CloseIcon, ArrowBackIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import React from 'react';
import yourTireImg from '../logos/your_tire_logo.jpg';

class TireDetailsDrawer extends React.Component {
    render() {
        return(
            <Flex justifyContent='end' bg='rgba(30, 35, 41, 0.4)' w='100%' height='100vh' zIndex={-1} position='fixed' left='50%' top='50%' bottom='50%' transform='translate(-50%, -50%)'>
                <Flex bg='white' flexDir='column' alignItems='flex-start' gap='5' height='100%' maxWidth='32rem' position='relative'>
                    <Flex w='100%' justifyContent='space-between' p='20px' borderBottom='1px' borderBottomColor='#DEE0E1' >
                        <Flex w='fit-content' alignItems='center' color='#B3B6B9' gap='2' cursor='pointer'>
                            <ArrowBackIcon />
                            <Text fontSize='14px' fontWeight='600'>
                                Back
                            </Text>
                        </Flex>                        
                        <CloseIcon cursor='pointer' onClick={() => this.props.handleCloseIncon()}/>
                    </Flex>
                    <Flex flexDir='column' px='20px' gap='2'>
                        <Box>
                            <Text fontSize='16px' color='#5E6267' fontWeight='600'>Status</Text>  
                        </Box>    
                        <Box fontSize='32px' color='black' fontWeight='700'>
                            <Text>Welcome Back!</Text>  
                        </Box>       
                        <Box>
                            <Text fontSize='16px' color='black' fontWeight='400'>Here you get an overview of your last selected workshop and the current tread depths of the tires stored at the hotel. You can easily book a tire change or other desired service.</Text>  
                        </Box> 
                        <Box mt='20px'>
                            <Text fontSize='16px' fontWeight='500' color='#5E6267'>
                                My Workshop
                            </Text>
                        </Box>
                        <Flex gap='2' py='10px' flexDir='column' px='15px' borderRadius='lg' border='0.5px solid #DEE0E1' >
                            <Text fontSize='20px' fontWeight='700' lineHeight='1.875rem'>DE0002135431</Text>
                            <Text color='#1E2329' fontWeight='500'>74 Master Esch, 48691 Vreden</Text>
                        </Flex>
                        <Box mt='20px'>
                            <Text fontSize='16px' fontWeight='500' color='#5E6267'>
                                Your tires
                            </Text>
                        </Box>
                        <Flex borderRadius='lg' border='0.5px solid #DEE0E1' flexDir='column' p='15px'>
                            <Flex>
                                <Box>
                                    <Image src={yourTireImg} w='61px' h='61px' mt='10px'/>
                                </Box>
                                <Flex gap='3' py='10px' flexDir='column' px='15px' >
                                    <Text fontSize='20px' fontWeight='600' lineHeight='1.875rem'>CINTURATO</Text>
                                    <Text color='#1E2329' fontWeight='500'>Tyre size: 235/55 R18</Text>
                                </Flex>
                            </Flex>
                            <Flex borderRadius='lg' border='0.5px solid #DEE0E1' mt='15px' p='15px' flexDir='column'>
                                <Flex borderRadius='lg' bg='#FEF3F2' w='100%'>
                                    <Box alignContent='center' py='15px' pl='15px'>
                                        <InfoOutlineIcon transform='rotate(180deg);' color='crimson' fontSize='larger' />
                                    </Box>
                                    <Flex>
                                        <Flex py='10px' flexDir='column' px='15px' >
                                            <Text fontSize='20px' fontWeight='600' lineHeight='1.875rem'>Your tread is: 2.8 mm</Text>
                                            <Text color='#1E2329' fontWeight='500'>It's time to change the tires!</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                                <Flex flexDir='column'>
                                    <Flex gap='10px' mt='15px'>
                                        <Text whiteSpace='nowrap' color='#32D583' fontWeight='700'>4.1-6 mm</Text>
                                        <Text fontWeight='400' lineHeight='1.25rem'>You're ready to go, make an appointment now for a tire change!</Text>
                                    </Flex>
                                    <Flex gap='10px' mt='20px'>
                                        <Text whiteSpace='nowrap' color='#FDB022' fontWeight='700'>3-4 mm</Text>
                                        <Text fontWeight='400' lineHeight='1.25rem'>It's almost time to change your tyres: ask for a quote and click on 'Order new tyres'</Text>
                                    </Flex>
                                    <Flex gap='10px' mt='20px'>
                                        <Text whiteSpace='nowrap' color='#F97066' fontWeight='700'>0-2.9 mm</Text>
                                        <Text fontWeight='400' lineHeight='1.25rem'>Don't take risks with dangers and fines, order new tires now!</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex w='100%' position='absolute' gap='10px'
                            bottom='0' boxShadow={'rgba(31, 31, 31, 0.1) 0px -6px 10px 2px'}
                            padding='15px' borderRadius='lg'        
                    >
                        <Button w='100%' bg='#F3F5F6' fontWeight='700' _hover={{bg: '#F3F5F6' }}>Book a tire change</Button>
                        <Button w='100%' bg='#FFDD00' fontWeight='700' _hover={{bg: '#FFDD00' }}>Book new tires</Button>
                    </Flex>
                </Flex>
            </Flex>
        )
    }
}
export default TireDetailsDrawer;