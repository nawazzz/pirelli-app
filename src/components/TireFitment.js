import React, { Component } from 'react'
import { Flex, Image, Button, Text, Select } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import fitmentLogo from '../logos/tire-fitment.png';    
import logoPirelli from '../logos/pirelli.png';

class TireFitment extends Component {
  render() {
    return (
        <Flex flexDir='column' gap='5' border='1px solid' borderColor='#C8CBCD' borderRadius='lg' w={{base: '100%', md:'384px'}} p='15px'>
                        {/* <Flex
                            w='fit-content'
                            flexDir='column' padding='20px' overflow='hidden'
                            backgroundImage={fitmentLogo} zIndex='-1'
                            backgroundSize='cover'
                            backgroundPosition='center'
                            transform='scale(1.4)'
                            transformOrigin='left top'
                        > */}
                            <Flex>
                                <Image src={logoPirelli} />
                            </Flex>
                            <Text fontSize='1.25rem' lineHeight='1.875rem' fontWeight='700'>{this.props.title}</Text>
                            <Flex  maxH='130px' overflow='hidden'>
                                <Image src={fitmentLogo} alt={this.props.title}
                                    width='100%' height='auto' position='unset' z-index='0' objectFit='cover'
                                />
                            </Flex>

                        {/* </Flex> */}
                        <Flex flexDir='column'>
                            <Flex flexDir='column' gap='1'>
                                <Flex gap='2' w='100%' mb='2'>
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
                                <Flex justifyContent='space-between' borderBottom='1px solid' borderColor='#E2E8F0' py='2'>
                                    <Text fontSize='0.875rem' lineHeight='1.25rem' color='#5E6267' fontWeight='600' >Pneumatici:</Text>
                                    <Text fontSize='0.875rem' lineHeight='1.25rem' fontWeight='700'>185/65 R15 88H</Text>
                                </Flex>
                                <Flex justifyContent='space-between' borderBottom='1px solid' borderColor='#E2E8F0' py='2'>
                                    <Text fontSize='0.875rem' lineHeight='1.25rem' color='#5E6267' fontWeight='600'>Specifiche:</Text>
                                    <Text fontSize='0.875rem' lineHeight='1.25rem' fontWeight='700'>82V</Text>
                                </Flex>
                                <Flex justifyContent='space-between' borderBottom='1px solid' borderColor='#E2E8F0' py='2'>
                                    <Text fontSize='0.875rem' lineHeight='1.25rem' color='#5E6267' fontWeight='600'>Omologazione:</Text>
                                    <Text fontSize='0.875rem' lineHeight='1.25rem' fontWeight='700'>-</Text>
                                </Flex>
                                <Flex justifyContent='space-between' borderBottom='1px solid' borderColor='#E2E8F0' py='2'>
                                    <Text fontSize='0.875rem' lineHeight='1.25rem' color='#5E6267' fontWeight='600'>Tecnologia:</Text>
                                    <Text fontSize='0.875rem' lineHeight='1.25rem' fontWeight='700'>-</Text>
                                </Flex>
                                <Flex justifyContent='space-between' borderBottom='1px solid' borderColor='#E2E8F0' py='2'>
                                    <Text fontSize='0.875rem' lineHeight='1.25rem' textDecoration='underline' color='#5E6267' fontWeight='700'>Etichettatura energetica</Text>
                                    <Text as='a' cursor='pointer' textDecoration='underline' fontSize='0.875rem' lineHeight='1.25rem' fontWeight='700'>Info</Text>
                                </Flex>
                                <Flex justifyContent='space-between' py='2'>
                                    <Text fontSize='0.875rem' lineHeight='1.25rem' color='#5E6267' fontWeight='600'></Text>
                                    <Flex gap='2' alignItems='center'>
                                        <Text as='a' cursor='pointer' textDecoration='line-through' fontSize='0.875rem' lineHeight='1.25rem' fontWeight='700'>CHF 95,00</Text>
                                        <Text as='a' cursor='pointer' color='#027A48' fontSize='1.25rem' lineHeight='1.875rem' fontWeight='700'>CHF 89,00</Text>
                                    </Flex>
                                </Flex>
                                <Flex gap='5' w='100%'>
                                    <Select minW='80px' w='fit-content' placeholder='4' size='md' bg='#F3F5F6' fontSize='.875rem' lineHeight='1.25rem' fontWeight='600' />
                                    <Button minW='fit-content' w='100%' fontSize='.875rem' lineHeight='1.25rem' fontWeight='700' bg='#FFDD00'>Prenota</Button>
                                </Flex>
                                <Flex justifyContent='center' fontSize='0.75rem' lineHeight='1rem' fontWeight='600' pt='2' fontStyle='italic'>
                                    <Text>Prezzo per pneumatico - IVA inclusa</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
    )
  }
}
export default TireFitment