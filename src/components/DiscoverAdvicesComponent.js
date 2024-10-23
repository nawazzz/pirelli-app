import React, { Component } from 'react'
import { VStack, Flex, Image, Text, Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import workshopImage from '../logos/image-nostri-consigli-comp.jpg'

class DiscoverAdvicesComponent extends Component {
  render() {
    return (
      <VStack w='100%' px='120px' mx='auto' maxW='1440px'>
        <Flex 
            w='100%'
            gap='10'
            justifyContent='space-between' lineHeight='1.5'
        >
            <Flex w='100%' >
                <Image src={workshopImage}
                    borderRadius='lg'
                    flex='1'
                    w='100%'
                    objectFit='cover'
                    minH='465px'
                />
            </Flex>
            <Flex flexDir='column' w='100%'>
                <Flex fontSize='60px' fontWeight='600' gap='3' w='100%'  lineHeight='3.75rem' pt='2'>
                    I nostri
                    <Text as='span' color='#B3B6B9'>consigli</Text>
                </Flex>
                <Flex flexDir='column' gap='2' mt='4' mb='10'>
                    <Flex justifyContent='space-between' borderBottom='1px solid' borderColor='#C8CBCD'
                        py='4' cursor='pointer'
                    >
                        <Text fontSize='20px' lineHeight='30px' fontWeight='500'>
                            Usura e manutenzione pneumatici
                        </Text>
                        <ChevronRightIcon w='24px' h='none'/>
                    </Flex>
                    <Flex justifyContent='space-between' borderBottom='1px solid' borderColor='#C8CBCD'
                        py='4' cursor='pointer'
                    >
                        <Text fontSize='20px' lineHeight='30px' fontWeight='500'>
                        Omologazione e marcatura pneumatici
                        </Text>
                        <ChevronRightIcon w='24px' h='none'/>
                    </Flex>
                    <Flex justifyContent='space-between' borderBottom='1px solid' borderColor='#C8CBCD'
                        py='4' cursor='pointer'
                    >
                        <Text fontSize='20px' lineHeight='30px' fontWeight='500'>
                        Aquaplaning: consigli e suggerimenti
                        </Text>
                        <ChevronRightIcon w='24px' h='none'/>
                    </Flex>
                </Flex>
                <Button 
                    bg='#33383E' 
                    color='#FEFEFE' 
                    width='fit-content' 
                    mt='auto'
                    fontSize='16px'
                    fontWeight='600'
                    _hover={{bg: '#33383E'}}
                >Scopri tutti i consigli</Button>
            </Flex>
        </Flex>
      </VStack>
    )
  }
}
export default DiscoverAdvicesComponent
