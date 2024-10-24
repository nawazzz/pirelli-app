import React, { Component } from 'react'
import { VStack, Text, Flex, Image } from '@chakra-ui/react';
import workshopImage from '../logos/image-nostri-consigli-comp.jpg'

class WorkshopComponent extends Component {
  render() {
    return (
      <VStack w='100%'>
        <Flex flexDir='column' alignItems='center'>
            <Flex  maxW='1440px' justifyContent='center' alignItems='center'>
                <Flex justifyContent='center' w='100%' flexDir='column' px='120px' pb='20' mx='auto'>
                    <Flex fontSize='60px' pt='2' justifyContent='center' fontWeight='600' gap='3' w='100%'  lineHeight='3.75rem' pt='2'>
                        Ecco perché dovresti scegliere
                        <Text as='span' color='#B3B6B9'>Driver</Text>
                    </Flex>
                    <Text fontWeight='500' maxW='920px' 
                        textAlign='center' fontSize='20px' 
                        lineHeight='30px' mt='3' mx='auto'
                    >
                     Con oltre 30 punti vendita in tutta la Svizzera, la rete Driver garantisce servizi tecnici di prim'ordine. Oltre alla pluriennale esperienza nel settore degli pneumatici, tutti i centri Driver offrono anche un'ampia gamma di prodotti e servizi per il vostro veicolo.
                    </Text>
                </Flex>
            </Flex>
            <Flex>
                <Image src={workshopImage} objectFit='cover' />
            </Flex>
        </Flex>  
      </VStack>
    )
  }
}
export default WorkshopComponent;