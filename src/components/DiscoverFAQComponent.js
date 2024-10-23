import React, { Component } from 'react'
import { VStack, Flex, Image, Text, Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';

class DiscoverFAQComponent extends Component {
  render() {
    return (
    <VStack w='100%' px='120px' mx='auto' maxW='1440px'>
        <Flex 
            w='100%'
            gap='10'
            justifyContent='space-between' lineHeight='1.5'
        >
            <Flex flexDir='column' w='100%'>
                <Flex fontSize='60px' fontWeight='600' gap='3' w='100%'  lineHeight='3.75rem' pt='2'>
                    Scopri le nostre
                    <Text as='span' color='#B3B6B9'>FAQ</Text>
                </Flex>
            <Text fontSize='20px' lineHeight='30px' mt='3' fontWeight='450'>Risposte alle tue domande</Text>
            <Button 
                    bg='#F3F5F6' 
                    color='black' 
                    width='fit-content' 
                    mt='6'
                    fontSize='16px'
                    fontWeight='600'
                    _hover={{bg: '#C8CBCD'}}
                    lineHeight='1.2'
                >Tutte le domande</Button>
            </Flex>
            <Flex flexDir='column' w='100%'>
                
                <Flex flexDir='column' gap='2' mt='4' mb='10'>
                    <Flex justifyContent='space-between' borderBottom='1px solid' borderColor='#C8CBCD'
                        py='4' cursor='pointer'
                    >
                        <Text fontSize='20px' lineHeight='30px' fontWeight='500'>
                        </Text>
                        <ChevronRightIcon w='24px' h='none'/>
                    </Flex>
                    <Flex justifyContent='space-between' borderBottom='1px solid' borderColor='#C8CBCD'
                        py='4' cursor='pointer'
                    >
                        <Text fontSize='20px' lineHeight='30px' fontWeight='500'>
                        </Text>
                        <ChevronRightIcon w='24px' h='none'/>
                    </Flex>
                    <Flex justifyContent='space-between' borderBottom='1px solid' borderColor='#C8CBCD'
                        py='4' cursor='pointer'
                    >
                        <Text fontSize='20px' lineHeight='30px' fontWeight='500'>
                        </Text>
                        <ChevronRightIcon w='24px' h='none'/>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
      </VStack>
    )
  }
}

export default DiscoverFAQComponent
