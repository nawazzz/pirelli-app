import React, { Component } from 'react'
import { VStack, Heading, Text, Flex, Button, Box, Image } from '@chakra-ui/icons';
import carLogo from './logos/homepage_car.jpg'
import cityImage from './logos/homepage_bg.jpg'

class TitleComponent extends React.Component {
    render() {
        return(
            <Box w='100%' h='90vh' mt={{base: '160px', md: '0'}}>
                <Flex w='100%' alignItems='center' h='100%' flexDirection='column' justifyContent='center'>
                    <Flex flexDir='column' maxW='1080px' justifyContent='center' px={{base:'5', md: 'none'}}>
                        <Text fontSize='72px' fontWeight='700' lineHeight='4.5rem' textAlign='center'>Con Driver ottieni un servizio a 360° per il cambio gomme e la cura della tua auto.</Text>
                        <Text textAlign='center'
                                fontSize='16px'
                                fontWeight='400'
                                mt='15px'

                        >Our workshops offer tires, rims and services for vehicles of all brands.</Text>
                        <Flex w='100%' flexDir={{base: 'column', md: 'row'}}  gap={{ base: '4', lg: '2' }} mt="10" justifyContent='center' alignItems='center' onClick={(event) => {this.props.handleBookingWindow(event)}}>
                            <Button fontWeight='700' variant="primary" w={{base: '100%', lg: 'fit-content', xl: 'fit-content', md:'fit-content'}} bg='#FFDD00' >SeasonalTyreChange</Button>
                            <Button fontWeight='700' variant="primary" w={{base: '100%', md:'fit-content'}} bg='#FFDD00'>Book New tires</Button>
                            <Button fontWeight='700' variant="primary" w={{base: '100%', md:'fit-content'}} bg='#FFDD00'>Book services</Button>
                        </Flex>
                    </Flex>
                    <Flex
                        backgroundImage={cityImage}
                        backgroundPosition='center center'
                        backgroundSize='cover'
                        w='100%'
                        maxW='1440px'
                        justifyContent='center'    
                        transition='all 1s ease-in-out' 
                        // transition-timing-function='ease-out'   
                        opacity='1'                
                    >
                        <Image src={carLogo} maxW='250px'
                                opacity='1'
                                transform='translateX(0%) translateY(16px)'
                                transition='all 4s ease-in-out'
                                // transform='translateY(0)'
                                // transition-timing-function='ease-out'
                        />
                    </Flex>
                </Flex>
            </Box>
        )
    }
}
export default TitleComponent;