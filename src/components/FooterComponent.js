import React, { Component } from 'react';
import { VStack, Flex, Text, Image } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons'
import driverLogo from '../logos/driver_logo.png';

class FooterComponent extends Component {
  render() {
    return (
      <Flex
            bg='#1E2329'
            w='100%'
            overflow='hidden'      
            mt='-8px'
            flexDir='column'
            color='#FEFEFE'
      >
        <Flex w='100%' justifyContent='center' borderBottom='1px solid' borderColor='#494D52'>
            <Flex alignItems='center' maxW='1440px' w='100%' px='120px' py='4'>
                <Flex w='100%' justifyContent='space-between'>
                    <Flex w='100%' gap='2'>
                        <Flex cursor='pointer'>
                            <Image src={driverLogo} w='60px' h='auto'/>
                        </Flex>
                        <Flex>
                            <svg width="79" height="25" viewBox="0 0 79 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_12696_47326)">
                                    <g clipPath="url(#clip1_12696_47326)">
                                        <path d="M78.1241 0.667969H0.291504V24.5169H78.1241V0.667969Z" fill="#FFDD00" />
                                        <path d="M29.0713 13.723L27.0969 13.7284V15.4473H29.0754C29.5514 15.4473 29.9382 15.0619 29.9382 14.5858C29.9382 14.1098 29.5514 13.723 29.0713 13.723ZM23.1479 12.1895H31.5137C32.8742 12.1895 33.9777 13.293 33.9777 14.6535C33.9777 15.6907 33.3367 16.5779 32.4292 16.9417L34.1535 19.4287H29.3918L28.1652 17.1161H27.0901V19.4287H23.1479V12.1895Z" fill="#CF0600" />
                                        <path d="M51.7626 17.8369H55.8183V19.4287H47.6689V12.1895H51.7626V17.8369Z" fill="#CF0600" />
                                        <path d="M40.3915 17.8369H45.3953V19.4287H36.2222V12.1895H44.9395V13.7812H40.3915V15.0132H44.9395V16.6049H40.3915V17.8369Z" fill="#CF0600" />
                                        <path d="M61.0854 17.8369H65.1412V19.4287H56.9932V12.1895H61.0854V17.8369Z" fill="#CF0600" />
                                        <path d="M61.2668 7.31981H13.8989V9.00621H61.2668C61.732 9.00621 62.1107 8.6289 62.1107 8.16233C62.1107 7.69577 61.7334 7.31846 61.2668 7.31846V7.31981ZM7.00049 5.65234H68.8847C70.2816 5.65234 71.4149 6.78562 71.4149 8.18262C71.4149 9.57961 70.2816 10.7129 68.8847 10.7129H13.8989V19.4302H7.00049V5.65234Z" fill="#CF0600" />
                                        <path d="M20.4944 12.1895H16.5522V19.4287H20.4944V12.1895Z" fill="#CF0600" />
                                        <path d="M70.2195 12.1895H66.2773V19.4287H70.2195V12.1895Z" fill="#CF0600" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_12696_47326">
                                        <rect width="78.3741" height="23.853" fill="white" transform="translate(0.291504 0.667969)" />
                                    </clipPath>
                                    <clipPath id="clip1_12696_47326">
                                        <rect width="120.884" height="23.853" fill="white" transform="translate(0.291504 0.667969)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Flex>
                    </Flex>
                    <Flex gap='4' alignItems='center'>
                        <Text  fontSize='12px' fontWeight='600' lineHeight='16px'>Seguici</Text>
                        <Flex gap='4'>
                            <Flex cursor='pointer'>
                                <Icon viewBox="0 0 24 24" w='6' h='6'>
                                    <g clipPath="url(#clip0_402_2713)">
                                        <path
                                        d="M24 12.0733C24 5.40541 18.6274 0 12 0C5.37258 0 0 5.40541 0 12.0733C0 18.0994 4.3882 23.0943 10.125 24V15.5633H7.07812V12.0733H10.125V9.41343C10.125 6.38755 11.9166 4.71615 14.6576 4.71615C15.9701 4.71615 17.3438 4.95195 17.3438 4.95195V7.92313H15.8306C14.34 7.92313 13.875 8.85386 13.875 9.80958V12.0733H17.2031L16.6711 15.5633H13.875V24C19.6118 23.0943 24 18.0994 24 12.0733Z"
                                        fill="#FEFEFE"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_402_2713">
                                        <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </Icon>
                            </Flex>
                            <Flex cursor='pointer'>
                                <Icon viewBox="0 0 24 24" w='6' h='6'>
                                    <g clipPath="url(#clip0_402_2712)">
                                        <path
                                        d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                                        fill="#FEFEFE"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_402_2712">
                                        <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </Icon>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
        <Flex w='100%' borderBottom='1px solid' borderColor='#494D52'>
            <Flex w='100%' maxW='1440px' px={{base: '5', md: '120px'}} mx='auto' flexDir={{base: 'column', md: 'row'}}>
                <Flex py='8' flexDir='column' gap='4'  w='100%' borderBottom={{base: '1px solid', md: 'none'}} borderColor='#494D52'>
                    <Text fontSize={{base: '22px', md: '16px'}} lineHeight={{base: '2.25rem', md: '1.25rem'}} fontWeight='700'>Driver in Europa</Text>
                    <Flex flexDir='column' gap='2' fontSize={{base: '20px', md: '14px'}} lineHeight={{base: '2.25rem', md: '1.25rem'}} fontWeight='600'>
                        <Text cursor='pointer'>Svezia</Text>
                        <Text cursor='pointer'>Germania</Text>
                        <Text cursor='pointer'>Spagna</Text>
                        <Text cursor='pointer'>Portogallo</Text>
                        <Text cursor='pointer'>Italia</Text>
                        <Text cursor='pointer'>Polonia</Text>
                        <Text cursor='pointer'>Svizzera DE</Text>
                        <Text cursor='pointer'>Svizzera FR</Text>
                        <Text cursor='pointer'>Grecia</Text>
                        <Text cursor='pointer'>Finlandia</Text>
                    </Flex>                    
                </Flex>
                <Flex py='8' flexDir='column' gap='4'  w='100%' borderBottom={{base: '1px solid', md: 'none'}} borderColor='#494D52'>
                    <Text></Text>
                    <Flex flexDir='column' gap='2' fontSize={{base: '20px', md: '14px'}} lineHeight={{base: '2.25rem', md: '1.25rem'}} fontWeight='600'>
                        <Text cursor='pointer'>Servizi</Text>
                        <Text cursor='pointer'>Promozioni</Text>
                        <Text cursor='pointer'>Leasing Auto e Flotte</Text>
                        <Text cursor='pointer'>Trova le filiali Agom</Text>
                        <Text cursor='pointer'>Entra in Driver</Text>
                        <Text cursor='pointer'>Contatto</Text>
                        <Text cursor='pointer'>Mappa del sito</Text>
                        <Text cursor='pointer'>Dealer list</Text>
                    </Flex>                    
                </Flex>
                <Flex py='8' flexDir='column' gap='4'  w='100%'>
                    <Text></Text>
                    <Flex flexDir='column' gap='2' fontSize={{base: '20px', md: '14px'}} lineHeight={{base: '2.25rem', md: '1.25rem'}} fontWeight='600'>
                        <Text cursor='pointer'>Consigli dell'esperto</Text>
                        <Text cursor='pointer'>Aquaplaning</Text>
                        <Text cursor='pointer'>Struttura di uno pneumatico</Text>
                        <Text cursor='pointer'>Pneumatici Invernali</Text>
                        <Text cursor='pointer'>Omologazione</Text>
                        <Text cursor='pointer'>Condizioni generali</Text>
                        <Text cursor='pointer'>Impressum</Text>
                    </Flex>                    
                </Flex>
            </Flex>          
        </Flex>
        <Flex w='100%'>
            <Flex w='100%' maxW='1440px' px={{base: '5', md: '120px'}} py='4' mx='auto' fontSize={{base: '20px', md: '14px'}} lineHeight={{base: '2.25rem', md: '1.25rem'}}  justifyContent='flex-start' gap='4' flexDir='column' alignItems={{base: 'none', md:'center'}}>
                <Text fontWeight='700'>© 2024 Copyright Driver (Suisse) SA</Text>
                <Flex gap='6' fontWeight='600' flexDir={{base: 'column', md: 'row'}}>
                    <Text cursor='pointer'>Privacy Policy</Text>
                    <Text cursor='pointer'>Cookie Policy</Text>
                    <Text cursor='pointer'>Termini e condizioni</Text>
                </Flex>
            </Flex>
        </Flex>
      </Flex>
    )
  }
}
export default FooterComponent