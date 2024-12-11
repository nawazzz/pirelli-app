import React from "react";
import { Box,
    Container,
    Flex,
    Image,
    VStack,
    Text,
    Button
 } from "@chakra-ui/react";
import driverLogo from '../logos/driver_logo.png';
import cartIcon from '../logos/cart.jpg';
import swissFlag from '../logos/swiss.jpg';

class NewHeader extends React.Component {
  render() {
    return (
        <Flex w='100%' position='relative' zIndex='1'>
            <Flex w='100%' bg='#F3F5F6' justifyContent='center' position='fixed'>
                <Flex w='100%' py={{base: '6', md: '4'}} maxW='1440px' alignItems='center' px={{base: '25px', md:'120px'}}>
                    <Flex justifyContent='space-between' w='100%'>
                        <Flex gap='4' justifyContent='center' alignItems='center'>
                            <Box cursor='pointer'>
                                <Image w='auto' h='5' src={driverLogo}/>
                            </Box>
                            <Box cursor='pointer'>
                                <Image w='auto' h='5' src={swissFlag}/>
                            </Box>
                        </Flex>
                        <Flex flexDirection='row' gap='5'> 
                            <Button display={{ base: 'none', md: 'block', lg: 'block', xl: 'block' }} bg='#FFDD00' fontWeight='700' _hover={{_after: {bg: '#FFDD00'}}} onClick={() => {this.props.handleBookingPopup()}} >Prenota un appuntamento</Button>
                            <Box cursor='pointer' alignContent='center'>
                                <Image maxH='5' src={cartIcon}/>
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    //   <Flex w='100%' bg='#F3F5F6' mx='auto' >
    //     <Flex pt='4' pb='4' w='100%' mx='auto' maxW='1440px'>
    //       <Flex w='100%' px={{ base: 'none', md: '130px' }}  justifyContent='space-between' alignItems='center'>
            // <Flex gap='4'>
            //   <Box cursor='pointer'>
            //     {/* <Text as='span'>IT</Text> */}
            //     <Image w='auto' h='5' src={driverLogo}/>
            //   </Box>
            //   <Box cursor='pointer'>
            //     <Image w='auto' h='5' src={swissFlag}/>
            //   </Box>
            // </Flex>
    //         <Flex flexDirection='row' gap='5'> 
    //           <Button display={{ base: 'none', md: 'block', lg: 'block', xl: 'block' }} bg='#FFDD00' fontWeight='700' _hover={{_after: {bg: '#FFDD00'}}} onClick={() => {this.props.handleBookingPopup()}} >Prenota un appuntamento</Button>
    //           <Box cursor='pointer' alignContent='center'>
    //             <Image maxH='5' src={cartIcon}/>
    //           </Box>
    //         </Flex>
    //       </Flex>
    //     </Flex>
    //   </Flex>
    );
  }
}
  
  export default NewHeader;