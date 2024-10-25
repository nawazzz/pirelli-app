import React, { Component } from 'react'
import { VStack, Flex, Text, Input, Button } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import networkMap from '../logos/networkMap.png'

class DriverCenterNetwork extends Component {
  render() {
    return (
      <VStack w='100%'
        backgroundImage={networkMap}
        backgroundSize='cover'
        backgroundPosition='center center'
        overflow='hidden'      
        py='175px'  
      >
        <Flex maxW='1440px' justifyContent='center'>
            <Flex flexDir='column' gap='2'>
                <Flex fontSize='60px' fontWeight='600' gap='3' w='100%'  lineHeight='3.75rem' pt='2' color='#FEFEFE' alignItems={{base: 'center', md: 'none'}} flexDir={{base: 'column', md: 'row'}}>
                Trova il tuo centro
                    <Text as='span' color='#B3B6B9'>Driver</Text>
                </Flex>
                <Flex flexDir='column' mt='8' gap='2' position='relative'>
                    <Flex position='absolute' zIndex='2' w='44px' h='44px' alignItems='center' justifyContent='center' top='15px' left='2px'>
                        <Icon viewBox="0 0 24 24" w='6' h='6'>
                            <path
                                d="M8.23047 8.46769C8.6019 8.09626 9.04286 7.80162 9.52816 7.6006C10.0135 7.39958 10.5336 7.29611 11.0589 7.29611C11.5842 7.29611 12.1043 7.39958 12.5896 7.6006C13.0749 7.80162 13.5159 8.09626 13.8873 8.46769M20 20L16.05 16.05M18.118 11.059C18.118 14.9576 14.9576 18.118 11.059 18.118C7.16042 18.118 4 14.9576 4 11.059C4 7.16042 7.16042 4 11.059 4C14.9576 4 18.118 7.16042 18.118 11.059Z"
                                fill="none"
                                stroke='#B3B6B9'
                                // '#1E2329'
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </Icon>
                    </Flex>
                    <Input placeholder='Cerca' bg='white' h='70px' px='10' pt='2px' />
                    <Flex w='fit-content' alignItems='center' color='white' gap='1' cursor='pointer'>
                        <Icon viewBox="0 0 24 24" color='white'>
                            <path
                                d="M12 22V17.5556M12 2V6.44444M6.44444 12H2M22 12H17.5556M17.4997 6.50028C20.5371 9.53769 20.5371 14.4623 17.4997 17.4997C14.4623 20.5371 9.53769 20.5371 6.50028 17.4997C3.46287 14.4623 3.46287 9.53769 6.50028 6.50028C9.53769 3.46287 14.4623 3.46287 17.4997 6.50028ZM13.5714 10.4287C14.4392 11.2965 14.4392 12.7035 13.5714 13.5714C12.7035 14.4392 11.2965 14.4392 10.4287 13.5714C9.56082 12.7035 9.56082 11.2965 10.4287 10.4287C11.2965 9.56084 12.7035 9.56084 13.5714 10.4287Z"
                                fill="none"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </Icon>
                        <Text fontSize='12px' lineHeight='1rem' >Usa la tua posizione attuale</Text>
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between' mt='13px'>
                    <Button p='18px' minW='fit-content' color='#FEFEFE' bg='rgba(255, 255, 255, 0.1)' _hover={{border: '1px solid', borderColor: '#E2E8F0', bg: 'transparent'}}>bellinzona</Button>
                    <Button p='18px' minW='fit-content' color='#FEFEFE' bg='rgba(255, 255, 255, 0.1)' _hover={{border: '1px solid', borderColor: '#E2E8F0', bg: 'transparent'}}>locarno</Button>
                    <Button p='18px' minW='fit-content' color='#FEFEFE' bg='rgba(255, 255, 255, 0.1)' _hover={{border: '1px solid', borderColor: '#E2E8F0', bg: 'transparent'}}>lugano</Button>
                    <Button p='18px' minW='fit-content' color='#FEFEFE' bg='rgba(255, 255, 255, 0.1)' _hover={{border: '1px solid', borderColor: '#E2E8F0', bg: 'transparent'}}>mendrisio</Button>
                    <Button p='18px' minW='fit-content' color='#FEFEFE' bg='rgba(255, 255, 255, 0.1)' _hover={{border: '1px solid', borderColor: '#E2E8F0', bg: 'transparent'}}>bioggio</Button>
                    <Button p='18px' minW='fit-content' color='#FEFEFE' bg='rgba(255, 255, 255, 0.1)' _hover={{border: '1px solid', borderColor: '#E2E8F0', bg: 'transparent'}}>camorino</Button>
                </Flex>
            </Flex>

        </Flex>

      </VStack>
    )
  }
}
export default DriverCenterNetwork
