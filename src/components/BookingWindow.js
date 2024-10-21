import { VStack, Select, Text, Box, Input, Flex, Button } from '@chakra-ui/react';
import { CloseIcon, ArrowBackIcon } from '@chakra-ui/icons';
import React from 'react';

class BookingWindow extends React.Component {
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
                            <Text fontSize='16px' color='#5E6267' fontWeight='500'>Car Plate</Text>  
                        </Box>    
                        <Box fontSize='32px' color='black' fontWeight='700'>
                            <Text>Insert the plate number</Text>  
                        </Box>       
                        <Box>
                            <Text fontSize='16px' color='black' fontWeight='400'>We offer fast and convenient seasonal tire replacement to ensure you always drive safely and comfortably, whatever the weather</Text>  
                        </Box> 
                        <Flex gap='3' py='20px'  >
                            <Select placeContent='DE' fontWeight='700' borderColor='#DEE0E1'  value={this.props.inputValue} onChange={(event) => {this.props.handleInputValue(event)}}>
                                <option value='option1'>DE</option>
                                <option value='option2'>IT</option>
                                <option value='option3'>ES</option>
                            </Select>
                            <Input 
                                borderColor='#DEE0E1' 
                                name='regOne' 
                                value={this.props.inputValueOne} 
                                onChange={(event) => {this.props.handleInputValue(event)}} 
                                _focus={{borderColor: '#73777B', color: 'black'}}
                                placeholder='DRI'
                                fontWeight='700'
                            />
                            <Input 
                                borderColor='#DEE0E1' 
                                name='regTwo' 
                                value={this.props.inputValueTwo} 
                                onChange={(event) => {this.props.handleInputValue(event)}} 
                                _focus={{borderColor: '#73777B', color: 'black'}}
                                placeholder='VE'
                                fontWeight='700'
                            />
                            <Input 
                                type='number'
                                borderColor='#DEE0E1' 
                                name='regThree' 
                                value={this.props.inputValueThree} 
                                onChange={(event) => {this.props.handleInputValue(event)}} 
                                _focus={{borderColor: '#73777B', color: 'black'}}
                                placeholder='123'
                                fontWeight='700'
                            />
                        </Flex>
                        <Box>
                            <Text fontSize='14px' fontWeight='500'>
                                Please enter your lisence plate number.
                            </Text>
                        </Box>
                    </Flex>
                    <VStack w='100%' position='absolute' 
                            bottom='0' boxShadow={'rgba(31, 31, 31, 0.1) 0px -6px 10px 2px'}
                            padding='15px' borderRadius='lg'        
                    >
                        <Button w='100%' 
                                bg='#FFDD00' 
                                fontWeight='700' 
                                _hover={{bg: '#FFDD00' }}
                                onClick={() => {this.props.handleBookingWindowButton()}}
                        >Continue</Button>
                    </VStack>
                </Flex>
            </Flex>
        )
    }
}
export default BookingWindow;