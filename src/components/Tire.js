import React, { Component } from 'react'
import { VStack, Flex, Text, Button, Select, Image, Box, HStack, Grid } from '@chakra-ui/react'
import { Icon, ChevronRightIcon, ArrowUpIcon } from '@chakra-ui/icons';
import logoPirelli from '../logos/pirelli.png';
import tireCinturatoP1 from '../logos/Pirelli_Cinturato_P1_01.png';
import cinturato1 from '../logos/cinturato_gallery_1.png';
import cinturato2 from '../logos/cinturato_gallery_2.png';
import cinturato3 from '../logos/cinturato_gallery_3.png';
import cinturato4 from '../logos/cinturato_gallery_4.png';
import NewHeader from './NewHeader';
import FooterComponent from './FooterComponent';



class Tire extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isTireCinturatoP1: true,
            isCinturato1: false,
            isCinturato2: false,
            isCinturato3: false,
            isCinturato4: false
        }
    }
    
    handleCinturato = (event) => {
        console.log(event)
        this.setState({isTireCinturatoP1: false, isCinturato2: true
        }, () => {console.log(this.state)})
    }


  render() {
    const tireTopLink = ['HOME', 'PNEUMATICI', 'AUTO', 'PIRELLI', 'CINTURATO', 'CINTURATO P1']
    const performanceDefaultBoxes = 10;
    const performanceBoxes = [];

    for (let i = 0; i < performanceDefaultBoxes; i++) {
        performanceBoxes.push(
            <Box
                key={i}
                height="1"
                flex="1 1 40px"
                w="auto"
                borderRadius="2px"
                // bg={activeBoxes <= index ? 'blackAlpha.900' : 'neutral.900'}
            />
        );
    }
    let isTireCinturatoP1 = true
    let isCinturato1 = false
    let isCinturato2 = false
    let isCinturato3 = false
    let isCinturato4 = false

    return (
        <VStack minW={{base: '100vh'}} w='100%'>
            <NewHeader/>
            <Flex maxW='1440px' my='20' pt='20' px={{base: '5', md: '20'}} mx='auto' w={{md: '100%'}}>
                    <Flex gap='6' w={{ md: '100%'}}
                        px='5' flexWrap={{base: 'wrap-reverse'}}
                    >
                        <Flex w={{base: '100%', md: '66%'}}>
                            <Flex w='100%' flexDir='column'>
                                <Flex>
                                    {tireTopLink.map((elm, index) => {
                                        return(
                                            <Flex display={{base: 'none', md: 'flex'}} alignItems='center' 
                                                fontSize='0.75rem' lineHeight='1rem' fontWeight='600' 
                                                _hover={{textDecoration: 'underline'}} gap='2'
                                            >
                                                <Text cursor='pointer'>{elm}</Text>
                                                <ChevronRightIcon w='6' h='6'/>
                                            </Flex>
                                        )
                                    })}
                                    <Flex alignItems='center' fontSize='0.75rem' lineHeight='1rem' fontWeight='600'>
                                        <Flex display={{base: 'flex', md: 'none'}}>
                                            <Text fontSize='.75rem' lineHeight='1rem' pt='2'>...</Text>
                                            <Icon viewBox="0 0 24 24" mx='2' fontSize='0.875rem' w='6' h='6' >
                                                <path
                                                    d="M10 16L14 12L10 8"
                                                    fill='none'
                                                    stroke='#1E2329'
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </Icon>
                                        </Flex>
                                        <Text color='rgba(0, 0, 0, 0.8)'>185/65 R15 88H</Text>
                                    </Flex>
                                </Flex>
                                <Flex pt='12' flexDir='column' gap='4'>
                                    <Image src={logoPirelli} alt='pirelli' w='119px'/>
                                    <Text fontSize='4.5rem' lineHeight='4.5rem' fontWeight='600'>CINTURATO P1</Text>
                                    <Text fontSze='1.25rem' lineHeight='1.875rem' fontWeight='500'>185/65 R15 88H</Text>
                                    <Flex gap='2' w='100%' mb='2' my='2'>
                                        <Flex alignItems='center' gap='2' bg='#F3F5F6' py='1' px='2' borderRadius='lg'>
                                            <Icon viewBox="0 0 24 24">
                                                <path
                                                    d="M7.21732 16.0869C7.21732 17.1435 6.36082 18 5.30428 18C4.24773 18 3.39124 17.1435 3.39124 16.0869M7.21732 16.0869C7.21732 15.0304 6.36082 14.1739 5.30428 14.1739C4.24773 14.1739 3.39124 15.0304 3.39124 16.0869M7.21732 16.0869L16.7826 16.087M3.39124 16.0869L2.91304 16.087C1.85609 16.087 1 15.2309 1 14.1739V13.2174L1.47826 12.2609V11.3043C1.47826 10.7783 1.9087 10.3478 2.43478 10.3478H3.3913L5.59609 8.42043C6.64348 7.50696 7.98739 7 9.37435 7H11.8996C13.2004 7 14.4678 7.44478 15.4865 8.25783L18.6957 10.8261C22.933 11.6009 23 12.7009 23 12.7009V15.1304C23 15.6565 22.5696 16.087 22.0435 16.087H21M20.8478 16.0869C20.8478 17.1435 19.9913 18 18.9348 18C17.8782 18 17.0217 17.1435 17.0217 16.0869C17.0217 15.0304 17.8782 14.1739 18.9348 14.1739C19.9913 14.1739 20.8478 15.0304 20.8478 16.0869Z"
                                                    fill="none"
                                                    stroke="#1E2329"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit="10"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </Icon>
                                            <Text fontSize='0.75rem' lineHeight='1rem' fontWeight='700'>Auto</Text>
                                        </Flex>
                                        <Flex alignItems='center' gap='2' bg='#F3F5F6' py='1' px='2' borderRadius='lg'>
                                            {/* All season icon */}
                                            <Icon viewBox="0 0 24 24">
                                                <path
                                                    d="M10.18 2.56746C9.45765 2.08386 8.55761 1.88002 7.65073 2.07101C5.8378 2.45283 4.68507 4.26829 5.07624 6.12564M10.3679 16.582L6.86792 21.8561M7.36792 16.582L5.36792 19.582M14.5779 16.7033C14.5679 16.7533 14.5279 16.7933 14.4679 16.7933C14.4079 16.7833 14.3679 16.7433 14.3679 16.6833C14.3679 16.6233 14.4079 16.5833 14.4579 16.5833C14.5079 16.5733 14.5579 16.6233 14.5579 16.6733M12.5779 19.7033C12.5679 19.7533 12.5279 19.7933 12.4679 19.7933C12.4079 19.7833 12.3679 19.7433 12.3679 19.6833C12.3679 19.6233 12.4079 19.5833 12.4579 19.5833C12.5079 19.5733 12.5579 19.6233 12.5579 19.6733M18.5779 16.7033C18.5679 16.7533 18.5279 16.7933 18.4679 16.7933C18.4079 16.7833 18.3679 16.7433 18.3679 16.6833C18.3679 16.6233 18.4079 16.5833 18.4579 16.5833C18.5079 16.5733 18.5579 16.6233 18.5579 16.6733M16.5779 19.7033C16.5679 19.7533 16.5279 19.7933 16.4679 19.7933C16.4079 19.7833 16.3679 19.7433 16.3679 19.6833C16.3679 19.6233 16.4079 19.5833 16.4579 19.5833C16.5079 19.5733 16.5579 19.6233 16.5579 19.6733M8.24489 7.65561C8.68743 7.65561 9.1042 7.75181 9.46854 7.9451C9.74181 6.04305 11.3049 4.58203 13.179 4.58203C15.2233 4.58203 16.8895 6.31892 16.942 8.4687C18.1656 8.63386 19.116 9.73643 19.116 11.1013C19.116 12.5623 17.9963 13.7474 16.6163 13.7474H8.24489C6.65689 13.7474 5.36792 12.3826 5.36792 10.702C5.36792 9.01953 6.65689 7.65561 8.24489 7.65561Z"
                                                    fill="none"
                                                    stroke="#1E2329"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </Icon>
                                            <Text fontSize='0.75rem' lineHeight='1rem' fontWeight='700'>All Season</Text>
                                        </Flex>
                                    </Flex>
                                    <Flex py='2' >
                                        <Text cursor='pointer' fontSize='0.875rem' lineHeight='1.25rem' textDecoration='underline' color='#5E6267' fontWeight='700' mr='2'>Etichettatura energetica
                                        </Text>
                                        <Flex gap='1' alignItems='center'>
                                            <Icon viewBox="0 0 16 16">
                                                <path d="M10.121 13.7578H2.50004V14.9997H10.121V13.7578Z" fill="#1E2329" />
                                                <path d="M12.3787 5.6302H11.1368V12.6867H12.3787V5.6302Z" fill="#1E2329" />
                                                <path
                                                    d="M10.1203 2.02417C10.1203 1.45887 9.6601 1 9.09376 1H3.52689C2.96023 1 2.5 1.45887 2.5 2.02417V12.7419H10.121L10.1203 2.02417ZM8.41268 4.97272C8.41268 5.33153 8.12184 5.62278 7.76229 5.62278H4.85708C4.49753 5.62278 4.20669 5.33153 4.20669 4.97272V3.2389C4.20669 2.88009 4.49721 2.59011 4.85708 2.59011H7.76229C8.12184 2.59011 8.41268 2.88009 8.41268 3.2389V4.97272Z"
                                                    fill="#1E2329"
                                                />
                                                <path
                                                    d="M13.5705 3.23504C13.7166 3.08301 13.7135 2.83735 13.5613 2.68976C13.4102 2.5409 13.1675 2.54534 13.0213 2.69769L11.3633 4.42306V5.97671C11.3633 6.19127 11.5349 6.36298 11.7462 6.36298C11.9574 6.36298 12.1287 6.19159 12.1287 5.97671V4.7376L13.5705 3.23504Z"
                                                    fill="#1E2329"
                                                />
                                            </Icon>
                                            <Text as='span' color='#5E6267' fontWeight='600' fontSize='0.875rem' lineHeight='1.25rem'>C</Text>
                                            <Icon viewBox="0 0 16 16">
                                                <path
                                                    d="M11.8725 3.56292C11.3756 3.56292 10.8787 3.68228 10.4402 3.92066C10.2941 2.28163 8.92018 1 7.28378 1C5.76377 1 4.47788 2.10276 4.18574 3.56292C2.43229 3.56292 1 4.9935 1 6.78147C1 8.56943 2.43229 10 4.1564 10H11.8431C13.5969 10 14.9996 8.5395 14.9996 6.78147C15.0288 4.99317 13.5969 3.56292 11.8725 3.56292Z"
                                                    fill="#1E2329"
                                                />
                                                <path
                                                    d="M9.93271 14.9991H8.51302L9.95018 11.4427H11.3699L9.93271 14.9991Z"
                                                    fill="#1E2329"
                                                />
                                                <path
                                                    d="M7.19313 14.9991H5.77344L7.21059 11.4427H8.63028L7.19313 14.9991Z"
                                                    fill="#1E2329"
                                                />
                                                <path
                                                    d="M4.42457 14.9991H3.03385L4.44168 11.4427H5.8324L4.42457 14.9991Z"
                                                    fill="#1E2329"
                                                />
                                            </Icon>
                                            <Text as='span' color='#5E6267' fontWeight='600' fontSize='0.875rem' lineHeight='1.25rem'>B</Text>
                                            <Icon viewBox="0 0 16 16">
                                                <path
                                                    d="M9.21646 6.2866V2.49825C9.21646 1.96379 8.58807 1.68084 8.17962 2.02667L4.44043 5.24912H1V10.7509H4.44043L8.17962 13.9734C8.58807 14.3192 9.21646 14.0362 9.21646 13.5017V9.7134"
                                                    fill="#1E2329"
                                                />
                                                <path
                                                    d="M9.91292 10.289V9.1735C10.5751 9.1735 11.1137 8.64615 11.1137 7.99833C11.1137 7.35051 10.5749 6.82317 9.91292 6.82317V5.70768C11.2034 5.70768 12.2534 6.73532 12.2534 7.99833C12.2534 9.26134 11.2034 10.289 9.91292 10.289Z"
                                                    fill="#1E2329"
                                                />
                                                <path
                                                    d="M9.91292 12.3823V11.2608C11.7109 11.2608 13.1734 9.79821 13.1734 8.00028C13.1734 6.20235 11.7109 4.73977 9.91292 4.73977V3.61816C12.3291 3.61816 14.295 5.58377 14.295 8.00028C14.295 10.4168 12.3291 12.3823 9.91292 12.3823Z"
                                                    fill="#1E2329"
                                                />
                                            </Icon>
                                            <Text as='span' color='#5E6267' fontWeight='600' fontSize='0.875rem' lineHeight='1.25rem' mr='1'>70 suono</Text>
                                            <Text as='a' cursor='pointer' textDecoration='underline' fontSize='0.875rem' lineHeight='1.25rem' fontWeight='700'>Informazioni<Text as='span' pl='2px'><ArrowUpIcon transform='rotate(45deg)'/></Text></Text>
                                            
                                        </Flex>

                                    </Flex>
                                    <Flex gap='2' alignItems='center'>
                                        <Text as='a' cursor='pointer' textDecoration='line-through' fontSize='0.875rem' lineHeight='1.25rem' fontWeight='700'>CHF 95,00</Text>
                                        <Text as='a' cursor='pointer' color='#027A48' fontSize='1.25rem' lineHeight='1.875rem' fontWeight='700'>CHF 89,00</Text>
                                    </Flex>
                                    <Flex justifyContent='flex-start' fontSize='0.75rem' lineHeight='1rem' fontWeight='600' mt='-5' color='#73777B'>
                                        <Text>Prezzo per pneumatico - IVA inclusa</Text>
                                    </Flex>
                                    <Flex gap='2' w='fit-content' mt='-2'>
                                        <Select minW='80px' w='fit-content' placeholder='4' size='md' bg='#F3F5F6' fontSize='.875rem' lineHeight='1.25rem' fontWeight='600' />
                                        <Button minW='44px' maxW='300px'  px='5' fontSize='.875rem' lineHeight='1.25rem' fontWeight='700' bg='#FFDD00'>Prenota</Button>
                                    </Flex>
                                    <Flex justifyContent='flex-start' fontSize='0.75rem' lineHeight='1rem' fontWeight='600' mt='-3' color='#73777B'>
                                        <Text>Prezzo per pneumatico - IVA inclusa</Text>
                                    </Flex>
                                    <Flex mt='12'>
                                        <Text fontSize='1.5rem' lineHeight='2rem' fontWeight='600'>Descrizione</Text>
                                    </Flex>
                                    <Flex flexDir='column' gap='4'>
                                        <Text mt='12' fontSize='1.5rem' lineHeight='2rem' fontWeight='600'>Performance</Text>
                                        <Flex gap='10'>
                                            <Flex alignItems='center' flexDir='column' justifyContent='flex-start'>
                                                <Text fontSize='1.25rem' lineHeight='1.875rem' fontWeight='600'>ASCIUTTO</Text>
                                                <Flex w='100%' gap='1'>
                                                    <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                    <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                    <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                    <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                    <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                    <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                    <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                    <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                    <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                    <Text h='1' flex='1 1 40px' border='2px solid' borderColor='rgba(0, 0, 0, 0.1)' borderRadius='2px'></Text>
                                                </Flex>
                                            </Flex>
                                            <Flex alignItems='center' flexDir='column' justifyContent='flex-start'>
                                            <Text fontSize='1.25rem' lineHeight='1.875rem' fontWeight='600'>SPORT</Text>
                                            <Flex w='100%' gap='1'>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='rgba(0, 0, 0, 0.1)' borderRadius='2px'></Text>
                                            </Flex>
                                        </Flex>
                                        <Flex alignItems='center' flexDir='column' justifyContent='flex-start'>
                                            <Text fontSize='1.25rem' lineHeight='1.875rem' fontWeight='600'>BAGNATO</Text>
                                            <Flex w='100%' gap='1'>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='rgba(0, 0, 0, 0.1)' borderRadius='2px'></Text>
                                            </Flex>
                                        </Flex>
                                        <Flex alignItems='center' flexDir='column' justifyContent='flex-start'>
                                            <Text fontSize='1.25rem' lineHeight='1.875rem' fontWeight='600'>COMFORT</Text>
                                            <Flex w='100%' gap='1'>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='rgba(0, 0, 0, 0.1)' borderRadius='2px'></Text>
                                            </Flex>
                                        </Flex>
                                        <Flex alignItems='center' flexDir='column' justifyContent='flex-start'>
                                            <Text fontSize='1.25rem' lineHeight='1.875rem' fontWeight='600'>MILEAGE</Text>
                                            <Flex w='100%' gap='1'>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='#33383E' borderRadius='2px'></Text>
                                                <Text h='1' flex='1 1 40px' border='2px solid' borderColor='rgba(0, 0, 0, 0.1)' borderRadius='2px'></Text>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                    </Flex>
                                    <Flex mt='12' flexDir='column' w='100%' >
                                        <Text py='2' fontSize='1.5rem' lineHeight='2rem' fontWeight='600'>Specifiche</Text>
                                        <Flex w='100%' flexDir='column'>
                                            <Flex justifyContent='space-between' borderBottom='1px solid' borderColor='#E2E8F0'
                                                    fontSize='0.875rem' lineHeight='1.25rem' fontWeight='450' w='100%' py='2'
                                            >
                                                <Text>Larghezza degli pneumatici:</Text>
                                                <Text>185</Text>
                                            </Flex>
                                            <Flex justifyContent='space-between' borderBottom='1px solid' borderColor='#E2E8F0'
                                                    fontSize='0.875rem' lineHeight='1.25rem' fontWeight='450' w='100%' py='2'
                                            >
                                                <Text>Profilo degli pneumatici:</Text>
                                                <Text>65</Text>
                                            </Flex>
                                            <Flex justifyContent='space-between' borderBottom='1px solid' borderColor='#E2E8F0'
                                                    fontSize='0.875rem' lineHeight='1.25rem' fontWeight='450' w='100%' py='2'
                                            >
                                                <Text>Specifiche:</Text>
                                                <Text>15</Text>
                                            </Flex>
                                            <Flex justifyContent='space-between' borderBottom='1px solid' borderColor='#E2E8F0'
                                                    fontSize='0.875rem' lineHeight='1.25rem' fontWeight='450' w='100%' py='2'
                                            >
                                                <Text>Indice di velocità:</Text>
                                                <Text>H</Text>
                                            </Flex>
                                            <Flex justifyContent='space-between' borderBottom='1px solid' borderColor='#E2E8F0'
                                                    fontSize='0.875rem' lineHeight='1.25rem' fontWeight='450' w='100%' py='2'
                                            >
                                                <Text>Indice di carico:</Text>
                                                <Text>88</Text>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex flex='1' w={{base: '100%', md: '33%'}}>
                            <Flex w='100%'>
                                <Flex w='100%' flexDir='column' >
                                    <Flex w='100%'>
                                        <Flex maxW='680px' w='100%' position='relative'>
                                            <Flex w='100%' _before={{ height: '0px', content: '""', display: 'block', pb: '100%'}}>
                                                <Flex
                                                    overflow='hidden'
                                                    position='absolute'
                                                    top='0px'
                                                    right='0px'
                                                    bottom='0px'
                                                    left='0px'
                                                    justify-content='center'
                                                    align-items='center'
                                                    width='100%'
                                                    height='100%'                                        
                                                >
                                                    <Image src={isTireCinturatoP1 === true ? tireCinturatoP1 :
                                                                isCinturato1 === true ? cinturato1 :
                                                                isCinturato2 === true ? cinturato2 :
                                                                isCinturato3 === true ? cinturato3 :
                                                                isCinturato4 === true ? cinturato4 :
                                                                tireCinturatoP1
                                                    } alt='cinturato P1' 
                                                        objectFit='cover' w='100%'
                                                    />
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                    <Flex w='100%' position='relative' h='100px'>
                                        <Flex h='100%' _before={{ height: '0px', content: '""', display: 'block', pb: '100%'}}>
                                            <Flex cursor='pointer' mt='2' mr='2'
                                                    overflow='hidden'
                                                    // position='absolute'
                                                    top='0px'
                                                    right='0px'
                                                    bottom='0px'
                                                    left='0px'
                                                    display='flex'
                                                    justify-content='center'
                                                    align-items='center'
                                                    width='100%'
                                                    height='100%'
                                                    bg='transparent'
                                                    p='0'
                                                    border='1px solid'
                                                    borderColor='#E2E8F0'
                                                    borderRadius='lg'
                                            >
                                                <Image src={cinturato1} objectFit='cover' w='100%' onClick={(event) => this.handleCinturato(event) }/>
                                            </Flex>
                                        </Flex>
                                        <Flex h='100%' cursor='pointer' mt='2' mr='2'
                                                overflow='hidden'
                                                //  position='absolute'
                                                top='0px'
                                                right='0px'
                                                bottom='0px'
                                                left='0px'
                                                display='flex'
                                                justify-content='center'
                                                align-items='center'
                                                width='100%'
                                                height='100%'
                                                bg='transparent'
                                                p='0'
                                                border='1px solid'
                                                borderColor='#E2E8F0'
                                                borderRadius='lg'
                                        >
                                            <Image src={cinturato2} objectFit='cover' w='100%' onClick={(event) => this.handleCinturato(event) } />
                                        </Flex>
                                        <Flex h='100%' cursor='pointer' mt='2' mr='2'
                                                overflow='hidden'
                                                //  position='absolute'
                                                top='0px'
                                                right='0px'
                                                bottom='0px'
                                                left='0px'
                                                display='flex'
                                                justify-content='center'
                                                align-items='center'
                                                width='100%'
                                                height='100%'
                                                bg='transparent'
                                                p='0'
                                                border='1px solid'
                                                borderColor='#E2E8F0'
                                                borderRadius='lg'
                                        >
                                            <Image src={cinturato3} objectFit='cover' w='100%' onClick={(event) => this.handleCinturato(event) } />
                                        </Flex>
                                        <Flex h='100%' cursor='pointer' mt='2' mr='2'
                                                overflow='hidden'
                                                //  position='absolute'
                                                top='0px'
                                                right='0px'
                                                bottom='0px'
                                                left='0px'
                                                display='flex'
                                                justify-content='center'
                                                align-items='center'
                                                width='100%'
                                                height='100%'
                                                bg='transparent'
                                                p='0'
                                                border='1px solid'
                                                borderColor='#E2E8F0'
                                                borderRadius='lg'
                                                _focusVisible={{border:'1px solid', borderColor: 'black'}}
                                        >
                                            <Image src={cinturato4} objectFit='cover' w='100%' onClick={(event) => this.handleCinturato(event) } />
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
            </Flex>
            <FooterComponent/>
        </VStack>
    )
  }
}
export default Tire
