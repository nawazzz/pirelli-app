import React, { Component } from 'react'
import { VStack, Flex, Text, Image, Box } from '@chakra-ui/react'
import driverLogo from '../logos/driver_logo.png';

import { Switch, Route, Routes, useParams, Link } from 'react-router-dom';
import FooterComponent from './FooterComponent';
import { ArrowBackIcon } from '@chakra-ui/icons'

class HeaderCheckout extends Component {
  render() {
    return (
        <Flex w='100%' position='relative' zIndex='1'>
            <Flex w='100%' bg='black' justifyContent='center' position='fixed'>
                <Flex w='100%' py={{base: '6', md: '6'}} maxW='1440px' alignItems='center' px={{base: '25px', md:'120px'}}>
                    <Flex justifyContent='center' w='100%'>
                        <Flex justifyContent='center' alignItems='center'>
                            <Box cursor='pointer'>
                                <Link to='/'>
                                    <Image w='auto' h='7' src={driverLogo} />
                                </Link>
                            </Box>
                            <Box cursor='pointer'>
                                <svg width="67" height="22" viewBox="0 0 67 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.865 8.11598C39.5984 7.7208 39.2513 7.40621 38.8267 7.1691C38.4005 6.93354 37.8968 6.81577 
                                37.3111 6.81577C36.7268 6.81577 36.2216 6.93354 35.7955 7.1691C35.3693 7.40466 35.0237 7.7208 34.7572 8.11598C34.4906
                                8.51116 34.2938 8.95903 34.1652 9.46269C34.0366 9.9648 33.973 10.4778 33.973 11.0016C33.973 11.5238 34.0366 12.0383 
                                34.1652 12.5404C34.2938 13.0425 34.4906 13.492 34.7572 13.8871C35.0237 14.2823 35.3693 14.5969 35.7955 14.8325C36.2216 
                                15.068 36.7253 15.1858 37.3111 15.1858C37.8968 15.1858 38.4005 15.068 38.8267 14.8325C39.2528 14.5969 39.5984 14.2808 39.865
                                13.8871C40.1315 13.492 40.3283 13.0425 40.4569 12.5404C40.5856 12.0383 40.6491 11.5254 40.6491 11.0016C40.6491 10.4778 40.5856 
                                9.9648 40.4569 9.46269C40.3299 8.95903 40.1315 8.51116 39.865 8.11598Z" fill="white">
                                </path>
                                <path d="M55.5928 0.0961609H11.5056C5.48344 0.0961609 0.603455 4.97779 0.603455 10.9985C0.603455 17.0207 5.48499 21.9039 11.5056 
                                    21.9039H55.5928C61.6134 21.9039 66.4949 17.0222 66.4949 10.9985C66.4949 4.97933 61.6134 0.0961609 55.5928 0.0961609ZM18.8651 
                                    16.4938L17.8345 13.5865H13.4489L12.4183 16.4938H10.4332L14.6483 5.50779H16.6939L20.9246 16.4938H18.8651ZM30.8396 16.4938H29.6091L29.3177 
                                    15.2013C28.8048 15.7855 28.2918 16.1916 27.7789 16.4163C27.2659 16.6425 26.6755 16.7557 26.0091 16.7557C25.1878 16.7557 24.4533 
                                    16.6038 23.8008 16.3016C23.15 15.9994 22.5983 15.5856 22.1473 15.0634C21.6963 14.5396 21.3492 13.9305 21.109 13.2332C20.8673 12.5358 
                                    20.7464 11.7919 20.7464 11.0031C20.7464 10.2236 20.8673 9.48438 21.109 8.787C21.3492 8.08963 21.6963 7.47904 22.1473 6.95678C22.5983 
                                    6.43452 23.15 6.0192 23.8008 5.7108C24.4517 5.40396 25.1878 5.24899 26.0091 5.24899C26.6042 5.24899 27.1699 5.32957 27.7092 5.48764C28.2469 
                                    5.64727 28.7273 5.88282 29.1473 6.19587C29.5672 6.50891 29.9159 6.90099 30.1933 7.37211C30.4692 7.84322 30.6443 8.38717 30.7156 9.00241H28.8389C28.7878 
                                    8.64288 28.6777 8.32828 28.5088 8.05708C28.3399 7.78588 28.126 7.55652 27.8703 7.37211C27.6146 7.18769 27.3264 7.04976 27.0087 6.95678C26.691 6.86535 26.3578 
                                    6.81885 26.0091 6.81885C25.4249 6.81885 24.9197 6.93663 24.4935 7.17219C24.0674 7.40775 23.7218 7.72389 23.4553 8.11907C23.1887 8.51425 22.9919 8.96212 22.8633 
                                    9.46578C22.7346 9.96789 22.6711 10.4808 22.6711 11.0047C22.6711 11.5269 22.7346 12.0414 22.8633 12.5435C22.9919 13.0456 23.1887 13.4951 23.4553 13.8902C23.7218 14.2854 
                                    24.0689 14.6 24.4935 14.8356C24.9197 15.0711 25.4249 15.1889 26.0091 15.1889C26.5004 15.1998 26.9374 15.1362 27.3171 14.9967C27.6968 14.8588 28.0176 14.6589 28.2795 14.397C28.5413 
                                    14.1351 28.7382 13.8143 28.8714 13.4362C29.0047 13.0565 29.076 12.6365 29.0868 12.1747H26.1641V10.7133H30.8411V16.4938H30.8396ZM42.2112 13.2316C41.9695 13.929 41.6239 14.5396 41.1729 15.0618C40.722 
                                    15.5841 40.1703 15.9979 39.5194 16.3001C38.8685 16.6022 38.1324 16.7541 37.3111 16.7541C36.4897 16.7541 35.7552 16.6022 35.1028 16.3001C34.4519 15.9979 33.9002 15.5841 
                                    33.4492 15.0618C32.9983 14.538 32.6511 13.929 32.4109 13.2316C32.1707 12.5342 32.0499 11.7904 32.0499 11.0016C32.0499 10.222 32.1707 9.48283 32.4109 
                                    8.78545C32.6511 8.08808 32.9983 7.47749 33.4492 6.95523C33.9002 6.43297 34.4519 6.01765 35.1028 5.70925C35.7536 5.40241 36.4897 5.24744 37.3111 5.24744C38.1324 5.24744 
                                    38.867 5.40241 39.5194 5.70925C40.1703 6.01765 40.722 6.43297 41.1729 6.95523C41.6239 7.47904 41.9695 8.08808 42.2112 8.78545C42.4514 9.48283 
                                    42.5723 10.222 42.5723 11.0016C42.5738 11.7904 42.453 12.5342 42.2112 13.2316ZM55.4177 16.4938H53.5875V8.01679H53.5565L50.5098 16.4938H48.9245L45.8778 
                                    8.01679H45.8468V16.4938H44.0166V5.50779H46.7239L49.7551 14.1087H49.7861L52.7398 5.50779H55.4162V16.4938H55.4177Z" fill="white">
                                </path>
                                <path d="M15.6339 7.40002L13.9727 12.1236H17.3262L15.6804 7.40002H15.6339Z" fill="white">
                                </path>
                            </svg>
                            </Box>
                        </Flex>
                        {/* <Flex flexDirection='row' gap='5'> 
                            <Button display={{ base: 'none', md: 'block', lg: 'block', xl: 'block' }} bg='#FFDD00' fontWeight='700' _hover={{_after: {bg: '#FFDD00'}}} onClick={() => {this.props.handleBookingPopup()}} >Prenota un appuntamento</Button>
                            <Box cursor='pointer' alignContent='center'>
                                <Image maxH='5' src={cartIcon}/>
                            </Box>
                        </Flex> */}
                    </Flex>
                </Flex>
            </Flex>
            {/* <VStack position='absolute' w='100%' top='565px' left='0'>
                <FooterComponent/>
            </VStack> */}
            <Flex mt='95px' w='100%' >
                <Flex w='100%' justifyContent='center' maxW='1440px'>
                    <Flex w='100%' justifyContent='space-around' pl='250px'>
                        <Flex gap='2' alignItems='center'>
                            <ArrowBackIcon/>
                            <Text fontSize='16px' fontWeight='700'>Indietro</Text>
                        </Flex>
                        <Flex gap='4' alignItems='center'>
                            <Flex
                                bg='#F3F5F6' fontWeight='700' borderRadius='full' padding='4px 8px' 
                                gap='2'        background='#FFDD00' width='fit-content' textAlign='center' fontSize='0.75rem' lineHeight='1rem'
                            >
                                <Text>1</Text>
                                <Text>Trova il tuo rivenditore</Text>
                            </Flex>
                            <Text h='2px' bg='#DEE0E1' w='80px'></Text>
                            <Flex
                            bg='#DEE0E1' fontWeight='700' borderRadius='full' padding='4px 8px' 
                            gap='2'        width='fit-content' justifyContent='center' fontSize='0.75rem' lineHeight='1rem'
                            >
                                <Text textAlign='center'>2</Text>
                            </Flex>
                            <Text h='2px' bg='#DEE0E1' w='80px'></Text>
                            <Flex
                            bg='#DEE0E1' fontWeight='700' borderRadius='full' padding='4px 8px' 
                            gap='2'        width='fit-content' justifyContent='center' fontSize='0.75rem' lineHeight='1rem'
                            >
                                <Text textAlign='center'>3</Text>
                            </Flex>
                            <Text h='2px' bg='#DEE0E1' w='80px'></Text>
                            <Flex
                            bg='#DEE0E1' fontWeight='700' borderRadius='full' padding='4px 8px' 
                            gap='2'        width='fit-content' justifyContent='center' fontSize='0.75rem' lineHeight='1rem'
                            >
                                <Text textAlign='center'>4</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
  }
}

export default HeaderCheckout
