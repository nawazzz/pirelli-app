import React, { Component } from 'react'
import { VStack, Flex, Text, Image, Box, Input } from '@chakra-ui/react'
import driverLogo from '../logos/driver_logo.png';

import { Switch, Route, Routes, useParams, Link } from 'react-router-dom';
import FooterComponent from './FooterComponent';
import { ArrowBackIcon, Icon } from '@chakra-ui/icons'

class HeaderCheckout extends Component {
  render() {
    return (
        <Flex w='100%' position='relative' zIndex='1' h='100%' >
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
            <Flex mt='95px' w='100%' h='100%' ml={{ md: '5dvw'}} >
                <Flex w='100%' justifyContent='center' px={{base: '15px', md: '60px'}} minH='50vh' flexDir={{base: 'column', md: 'row'}}>
                    <Flex flexDir='column' w={{base: '100%', md: '70%'}} pt='40px' px={{base: '0', md: '60px'}} gap='20' >
                        <Flex w='100%' justifyContent='space-between' px={{base: '15px'}}>
                            <Flex gap='2' alignItems='center' cursor='pointer' mr={{base: '5px'}}>
                                <ArrowBackIcon/>
                                <Text fontSize='16px' fontWeight='700' display={{base: 'none', md: 'block'}}>Indietro</Text>
                            </Flex>
                            <Flex gap='4' alignItems='center'>
                                <Flex
                                    bg='#F3F5F6' fontWeight='700' borderRadius='full' padding='4px 10px' 
                                    gap='2'        background='#FFDD00' width='fit-content' textAlign='center' fontSize='0.75rem' lineHeight='1rem'
                                >
                                    <Text>1</Text>
                                    <Text fontSize='14px' display={{base: 'none', md: 'block'}}>Trova il tuo rivenditore</Text>
                                </Flex>
                                <Text h='1px' bg='#DEE0E1' w='80px'></Text>
                                <Flex
                                bg='#DEE0E1' fontWeight='700' borderRadius='full' padding='4px 8px' 
                                gap='2'        width='fit-content' justifyContent='center' fontSize='0.75rem' lineHeight='1rem'
                                >
                                    <Text textAlign='center'>2</Text>
                                </Flex>
                                <Text h='1px' bg='#DEE0E1' w='80px'></Text>
                                <Flex
                                bg='#DEE0E1' fontWeight='700' borderRadius='full' padding='4px 8px' 
                                gap='2'        width='fit-content' justifyContent='center' fontSize='0.75rem' lineHeight='1rem'
                                >
                                    <Text textAlign='center'>3</Text>
                                </Flex>
                                <Text h='1px' bg='#DEE0E1' w='80px'></Text>
                                <Flex
                                bg='#DEE0E1' fontWeight='700' borderRadius='full' padding='4px 8px' 
                                gap='2'        width='fit-content' justifyContent='center' fontSize='0.75rem' lineHeight='1rem'
                                >
                                    <Text textAlign='center'>4</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex>
                            <Flex flexDir='column'>
                                {/* <Text fontSize='1rem' lineHeight='1.5rem' fontWeight='600' color='#5E6267'>Indirizzo</Text>
                                <Text fontSize='2rem' lineHeight='2.5rem' fontWeight='600'>Trova un rivenditore</Text> */}
                                <Flex flexDir='column' mt='8' gap='2' position='relative'>
                                    <Flex position='absolute' zIndex='2' w='44px' h='44px' alignItems='center' justifyContent='center' top='15px' left='2px'>
                                        {/* <Icon viewBox="0 0 24 24" w='6' h='6'>
                                            <path
                                                d="M8.23047 8.46769C8.6019 8.09626 9.04286 7.80162 9.52816 7.6006C10.0135 7.39958 10.5336 7.29611 11.0589 7.29611C11.5842 7.29611 12.1043 7.39958 12.5896 7.6006C13.0749 7.80162 13.5159 8.09626 13.8873 8.46769M20 20L16.05 16.05M18.118 11.059C18.118 14.9576 14.9576 18.118 11.059 18.118C7.16042 18.118 4 14.9576 4 11.059C4 7.16042 7.16042 4 11.059 4C14.9576 4 18.118 7.16042 18.118 11.059Z"
                                                fill="none"
                                                stroke='#B3B6B9'
                                                // '#1E2329'
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </Icon> */}
                                    </Flex>
                                    {/* <Input placeholder='Cerca' bg='white' h='70px' px='10' pt='2px' /> */}
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
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex borderLeft='1px solid' borderColor='#DEE0E1' w={{base: '100%', md: '30%'}}>
                        <Flex px='6' flexDir='column' justifyContent='space-between' w='100%'>
                            <Flex>
                                <Text fontSize='1.25rem' lineHeight='1.875rem' fontWeight='600'>La tua prenotazione</Text>
                            </Flex>
                            <Flex flexDir='column' alignItems='center'>
                                <Icon viewBox="0 0 45 45" w='60px' h='60px' color='yellow'>
                                    <g clipPath="url(#clip0_11536_252)">
                                        <path
                                        d="M12.932 20.0201C12.3696 19.3718 11.9987 19.2005 11.2941 18.7786C10.5833 18.3566 9.98992 18.2037 9.45836 18.2404C8.284 18.3321 7.4125 19.384 6.25049 20.7111C5.1503 21.9771 4.13663 23.1758 4.11809 24.295C4.11191 24.7353 4.27261 25.1512 4.61874 25.5732C4.97723 26.0074 5.94145 26.5701 6.14542 26.6863C7.23943 27.3345 8.46324 27.6526 9.62525 27.5608C10.7749 27.4752 11.8565 26.9859 12.6848 26.0319C14.2794 24.1971 14.2115 21.4817 12.932 20.0139V20.0201Z"
                                        fill="none"
                                        stroke="#1E2329"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M15.3116 22.6132C17.4626 24.1299 20.3058 24.5641 23.2664 24.613L27.5374 29.0409L32.3461 25.4937C37.9089 26.4906 40.7398 29.2855 40.8819 35.5297V41.9574"
                                        fill="none"
                                        stroke="#1E2329"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M10.2433 27.4752C12.8146 29.7136 16.4798 31.1753 19.4714 32.1416V41.9513"
                                        fill="none"
                                        stroke="#1E2329"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M10.9232 18.5828L13.5563 16.3567C12.9506 15.1702 12.6044 13.8247 12.6044 12.4059C12.6044 7.57439 16.5602 3.66028 21.4431 3.66028C26.326 3.66028 30.2817 7.57439 30.2817 12.4059C30.2817 17.2373 26.3198 21.1514 21.4431 21.1514C19.9968 21.1514 18.637 20.809 17.4317 20.1974L13.5316 24.6497"
                                        fill="none"
                                        // color={props.color}
                                        stroke="#1E2329"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M21.4431 6.14331C17.9509 6.14331 15.12 8.94434 15.12 12.3998C15.12 15.8552 17.9509 18.6562 21.4431 18.6562C24.9353 18.6562 27.7661 15.8552 27.7661 12.3998C27.7661 8.94434 24.9353 6.14331 21.4431 6.14331Z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M21.4431 8.73645C19.3972 8.73645 17.7345 10.3816 17.7345 12.4059"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M25.1331 20.3564C26.499 21.4389 28.2297 22.0871 30.121 22.0871C34.5342 22.0871 38.1067 18.5461 38.1067 14.1855C38.1067 9.82498 34.528 6.28394 30.121 6.28394C29.3917 6.28394 28.6932 6.38179 28.0195 6.55915"
                                        fill="none"
                                        stroke="#1E2329"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M33.4278 36.7162V41.9574"
                                        fill="none"
                                        stroke="#1E2329"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_11536_252">
                                        <rect width="38" height="38.9148" fill="red" transform="translate(3.5 3.0426)" />
                                        </clipPath>
                                    </defs>
                                </Icon>
                                <Flex flexDir='column' alignItems='center'>
                                    <Text fontSize='1.25rem' lineHeight='1.875rem' fontWeight='700'>Non hai ancora una prenotazione</Text>
                                    <Text textAlign='center' fontSize='1rem' lineHeight='1.5rem'>Continua a esplorare i nostri prodotti e servizi e prenota quando sei pronto!</Text>
                                </Flex>
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
