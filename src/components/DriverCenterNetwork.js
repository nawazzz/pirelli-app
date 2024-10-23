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
            <Flex flexDir='column' >
                <Flex fontSize='60px' fontWeight='600' gap='3' w='100%'  lineHeight='3.75rem' pt='2' color='#FEFEFE'>
                Trova il tuo centro
                    <Text as='span' color='#B3B6B9'>Driver</Text>
                </Flex>
                <Flex flexDir='column' mt='8'>
                    <Input/>
                    <Flex alignItems='center'>
                        <Icon viewBox="0 0 24 24" >
                            <path
                                d="M12 22V17.5556M12 2V6.44444M6.44444 12H2M22 12H17.5556M17.4997 6.50028C20.5371 9.53769 20.5371 14.4623 17.4997 17.4997C14.4623 20.5371 9.53769 20.5371 6.50028 17.4997C3.46287 14.4623 3.46287 9.53769 6.50028 6.50028C9.53769 3.46287 14.4623 3.46287 17.4997 6.50028ZM13.5714 10.4287C14.4392 11.2965 14.4392 12.7035 13.5714 13.5714C12.7035 14.4392 11.2965 14.4392 10.4287 13.5714C9.56082 12.7035 9.56082 11.2965 10.4287 10.4287C11.2965 9.56084 12.7035 9.56084 13.5714 10.4287Z"
                                fill="none"
                                stroke="#1E2329"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </Icon>
                        <Text>Usa la tua posizione attuale</Text>
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between' mt='12'>
                    <Button color='#FEFEFE' bg='rgba(255, 255, 255, 0.1)'>bellinzona</Button>
                    <Button color='#FEFEFE' bg='rgba(255, 255, 255, 0.1)'>locarno</Button>
                    <Button color='#FEFEFE' bg='rgba(255, 255, 255, 0.1)'>lugano</Button>
                    <Button color='#FEFEFE' bg='rgba(255, 255, 255, 0.1)'>mendrisio</Button>
                    <Button color='#FEFEFE' bg='rgba(255, 255, 255, 0.1)'>bioggio</Button>
                    <Button color='#FEFEFE' bg='rgba(255, 255, 255, 0.1)'>camorino</Button>
                </Flex>
            </Flex>

        </Flex>

      </VStack>
    )
  }
}
export default DriverCenterNetwork
