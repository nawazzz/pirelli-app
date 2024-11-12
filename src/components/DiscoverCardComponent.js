import { Flex, Text, VStack, Button } from '@chakra-ui/react';
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'
import React, { Component } from 'react'
import discoverImageOne from '../logos/discoverGalleryImage1.png';
import discoverImageTwo from '../logos/discoverGalleryImage2.png';
import discoverImageThree from '../logos/discoverGalleryImage3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


class DiscoverCardComponent extends React.Component {
    render() {
        return(
            <VStack w='100%' px={{base: '60px', md: '120px'}} mx='auto' maxW='1440px'>
                <Flex justifyContent='space-between' w='100%' alignItems='center'>
                    <Flex fontSize='60px' fontWeight='600' justifyContent='flex-start' gap='3' w='100%' lineHeight='1' flexDir={{base: 'column', md: 'row'}}>
                        Scopri le nostre
                        <Text as='span' color='#B3B6B9'>promozioni</Text>
                    </Flex>
                    <Flex gap='2'>
                        <Flex 
                            borderRadius='lg'
                            w='44px'
                            h='44px'   
                            bg={{base: 'none', md: '#F3F5F6'}} 
                            alignItems='center'
                            justifyContent='center'
                            cursor='pointer'
                        >
                            <ChevronLeftIcon display={{base: 'none', md: 'block'}} w='24px' h='none'/>
                        </Flex>
                        <Flex
                            borderRadius='lg'
                            w='44px'
                            h='44px'
                            bg={{base: 'none', md: '#F3F5F6'}}
                            alignItems='center'
                            justifyContent='center'
                            cursor='pointer'
                        >
                            <ChevronRightIcon display={{base: 'none', md: 'block'}} w='24px' h='none'/>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex gap='6' w='100%' pt='40px' overflow='visible' flexDir={{base: 'column', md: 'row'}}>
                    <Flex
                        w={{base: '', md: '646px', sm: '440px'}}
                        backgroundImage={discoverImageOne}
                        backgroundSize='100% 100%'
                        backgroundPosition='0% 0%'
                        backgroundRepeat='no-repeat'
                        minH='400px'
                        overflow='hidden'
                        borderRadius='lg'
                        position='relative'
                        _before={{
                            content: "''",
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            right: '0',
                            bottom: '0',
                            bg: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 99%)'
                          }}
                        zIndex='-1'
                    >
                        <Flex zIndex='10' color='white' py='4' px='20px' >
                            <Flex flexDir='column'>
                                <Text
                                    fontWeight='700'
                                    fontSize='40px'
                                >TYRELIFE</Text>
                                <Text>Garanzia pneumatici Pirelli. Viaggia senza preoccupazioni per 24 mesi</Text>
                                <Button as='a' 
                                        size='lg' 
                                        mr='auto' 
                                        mt='6'
                                        cursor='pointer'
                                        variant="blurry"
                                        target="_blank"
                                        bg='rgba(255, 255, 255, 0.1)'
                                >Scopri di più</Button>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex
                        w={{base: '', md: '646px', sm: '440px'}}
                        backgroundImage={discoverImageTwo}
                        backgroundSize='100% 100%'
                        backgroundPosition='0% 0%'
                        backgroundRepeat='no-repeat'
                        minH='400px'
                        overflow='hidden'
                        borderRadius='lg'
                        position='relative'
                        _before={{
                            content: "''",
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            right: '0',
                            bottom: '0',
                            bg: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 99%)'
                        }}
                        zIndex='-1'
                    >
                        <Flex zIndex='10' color='white' py='4' px='20px'>
                            <Flex flexDir='column'>
                                <Text   
                                    fontWeight='700'
                                    fontSize='40px'>RUOTE COMPLETE</Text>
                                <Text>Pneumatici e cerchi premium, a prezzi vantaggiosi</Text>
                                <Button as='a'
                                        size='lg' 
                                        mr='auto' 
                                        mt='6'
                                        cursor='pointer'
                                        variant="blurry"
                                        target="_blank"
                                        bg='rgba(255, 255, 255, 0.1)'
                                >Scopri di più</Button>
                            </Flex>
                        </Flex>
                    </Flex>
                    {/* <Flex
                        w='646px'
                        backgroundImage={discoverImageThree}
                        backgroundSize='100% 100%'
                        backgroundPosition='0% 0%'
                        backgroundRepeat='no-repeat'
                        minH='400px'
                        overflow='hidden'
                        borderRadius='lg'
                        position='relative'
                        _before={{
                            content: "''",
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            right: '0',
                            bottom: '0',
                            bg: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 99%)'
                        }}
                        zIndex='-1'
                    >
                        <Flex zIndex='10' color='white' py='4' px='20px'>
                            <Flex flexDir='column'>
                                <Text   
                                    fontWeight='700'
                                    fontSize='40px'>CHECK PRECOLLAUDO</Text>
                                <Text>Preparati per il test</Text>
                                <Button as='a'
                                        size='lg' 
                                        mr='auto' 
                                        mt='6'
                                        cursor='pointer'
                                        variant="blurry"
                                        target="_blank"
                                        bg='rgba(255, 255, 255, 0.1)'
                                >Scopri di più</Button>
                            </Flex>
                        </Flex>
                    </Flex> */}
                </Flex>                
            </VStack>
        )
    }
}
export default DiscoverCardComponent;