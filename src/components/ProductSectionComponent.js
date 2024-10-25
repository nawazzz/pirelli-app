import { VStack, Flex, Text, Button, Image, Box } from '@chakra-ui/react'
import React, { Component } from 'react'
import { Icon } from '@chakra-ui/icons'
import cinturato from '../logos/tire-image-cinturato.png';
import pzero from '../logos/tire-image-pzero.png';
import scorpion from '../logos/tire-image-scorpion.png'

class ProductSectionComponent extends React.Component {
    render() {
        return(
            <VStack w='100%' px={{base: '60px', md: '120px'}} mx='auto' maxW='1440px'>
                <Flex w='100%' flexDir='column'>
                    <Flex fontSize='60px' fontWeight='600' gap='3' w='100%' justifyContent='center' lineHeight={{base: '1', md: '3.75rem'}} flexDir={{base: 'column', md: 'row'}}>
                        Scopri i nostri
                        <Text as='span' color='#B3B6B9'>prodotti</Text>
                    </Flex>
                    <Flex w='100%' gap='6' justifyContent='center' py='10' zIndex='-1' flexDir={{base: 'column', md: 'row'}}>
                        <Flex w={{base: '', md:'384px'}} p='5' gap='4'  border='1px solid' borderColor='#C8CBCD' borderRadius='lg' flexDir='column' overflow='hidden'>
                            <Flex gap='2' w='100%'>
                                <Flex alignItems='center' gap='2' bg='#F3F5F6' py='1' px='2' borderRadius='lg' >
                                    <Icon viewBox="0 0 24 24" h='6' w='6'>
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
                                    <Text fontWeight='700'>Auto</Text>
                                </Flex>
                                <Flex alignItems='center' gap='2' bg='#F3F5F6' py='1' px='2' borderRadius='lg' >
                                    {/* Summer icon */}
                                    <Icon viewBox="0 0 24 24" w='6' h='6'>
                                        <path
                                            d="M12 4V2M12 22V20M18.36 5.64L19.07 4.93M4.93 19.07L5.64 18.36M20 12H22M2 12H4M18.36 18.36L19.07 19.07M4.93 4.93L5.64 5.64M15.5355 8.46447C17.4881 10.4171 17.4881 13.5829 15.5355 15.5355C13.5829 17.4882 10.417 17.4882 8.46443 15.5355C6.51181 13.5829 6.51181 10.4171 8.46443 8.46447C10.417 6.51185 13.5829 6.51185 15.5355 8.46447Z"
                                            fill="none"
                                            stroke="#1E2329"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </Icon>
                                    <Text fontWeight='700'>Estate</Text>
                                </Flex>
                            </Flex>
                            <Text fontSize='32px' fontWeight='700'>CINTURATO P7 ALL SEASON</Text>
                            <Button w='fit-content' bg='#F3F5F6' mt='auto'>Trova la tua gomma</Button>
                            <Flex as='a'
                                h={{base: 'none', md: '330px'}}
                                position='relative'
                                alignItems='center'
                                justifyContent='center'                                    
                            >
                                <Image src={cinturato} 
                                        w='100%' 
                                        h='100%'
                                        transform='scale(1.4)'
                                        transformOrigin='left top'
                                />
                            </Flex>
                        </Flex>
                        <Flex w={{base: '', md:'384px'}} p='5' gap='4' border='1px solid' borderColor='#C8CBCD' borderRadius='lg' flexDir='column' overflow='hidden' justifyContent='flex-start'>
                            <Flex gap='2' w='100%'>
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
                                    <Text fontWeight='700'>Auto</Text>
                                </Flex>
                                <Flex alignItems='center' gap='2' bg='#F3F5F6' py='1' px='2' borderRadius='lg'>
                                    {/* Winter icon */}
                                    <Icon viewBox="0 0 24 24">
                                        <path
                                            d="M12 6.39241L12 17.6076M14.4097 3.5L11.9999 5.93258L9.59013 3.5M17.5577 8.63545L6.44238 15.3646M20.5 9.85565L17.2087 8.96629L18.0902 5.64435M3.5 14.1444L6.79125 15.0337L5.90981 18.3557M6.44238 8.63545L17.0019 14.8038M3.5 9.85565L6.79125 8.96629L5.90981 5.64435M20.5 14.1444L17.2087 15.0337L18.0902 18.3557M9.59013 20.5L11.9999 18.0674L14.4097 20.5"
                                            fill="none"
                                            stroke="#1E2329"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </Icon>
                                    <Text fontWeight='700'>Winter</Text>
                                </Flex>
                            </Flex>
                            <Text fontSize='32px' fontWeight='700'>PZERO CORSA (PZC4)</Text>
                            <Text >PRESTAZIONI ESTREME SU STRADA E SU PISTA</Text>
                            <Button w='fit-content' bg='#F3F5F6' mt='auto'>Trova la tua gomma</Button>
                            <Flex as='a'
                                h={{base: 'none', md: '330px'}}
                                position='relative'
                                alignItems='center'
                                justifyContent='center'                                    
                            >
                                <Image src={pzero} 
                                        w='100%' 
                                        h='100%'
                                        transform='scale(1.4)'
                                        transformOrigin='left top'
                                />
                            </Flex>
                        </Flex>
                        <Flex w={{base: '', md:'384px'}} p='5' gap='4' border='1px solid' borderColor='#C8CBCD' borderRadius='lg' flexDir='column' overflow='hidden' justifyContent='flex-start'>
                            <Flex gap='2' w='100%'>
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
                                    <Text fontWeight='700'>Auto</Text>
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
                                    <Text fontWeight='700'>All Season</Text>
                                </Flex>
                            </Flex>
                            <Text fontSize='32px' fontWeight='700'>SCORPION</Text>
                            <Button w='fit-content' bg='#F3F5F6' mt='auto'>Trova la tua gomma</Button>
                            <Flex as='a'
                                h={{base: 'none', md: '330px'}}
                                position='relative'
                                alignItems='center'
                                justifyContent='center'                                    
                            >
                                <Image src={scorpion} 
                                        w='100%' 
                                        h='100%'
                                        transform='scale(1.4)'
                                        transformOrigin='left top'
                                />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </VStack>
        )
    }
}
export default ProductSectionComponent