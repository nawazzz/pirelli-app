    import React, { Component } from 'react'
    import { VStack, Heading, Container, Flex, Text, Icon, Input, Button, Image, Select } from '@chakra-ui/react';
    import { ChevronRightIcon, ArrowForwardIcon, ChevronDownIcon } from '@chakra-ui/icons';
    import fitmentLogo from '../logos/tire-fitment.png';    
    import logoPirelli from '../logos/pirelli.png';
    import TireFitment from './TireFitment';

    class Fitment extends React.Component {
    render() {
        return (
        <VStack w='100%' maxW='1440px' >
            <Flex flexDir='column' px={{base:'5', md:'140px'}} w='100%' py='12'>
                <Flex as='nav' mb='2' cursor='pointer' alignItems='center'>
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
                    <Text fontSize='0.75rem' lineHeight='1rem' fontWeight='700'>FITMENT</Text>
                </Flex>
                <Flex justifyContent='space-between' alignItems={{base: 'baseline', md: 'center'}} flexDir={{base: 'column', md: 'row'}} gap='.5rem'>
                    <Flex flexDir='column' gap='3'>
                        <Text as='h1' fontSize={{base: '2rem', md: '4.5rem'}} lineHeight={{base: '3rem', md: '4.5rem'}} fontWeight='700'>MISURA</Text>
                        <Text font-size='1.25rem' lineHeight='1.875rem'>Prezzo suggerito da Driver Center</Text>
                    </Flex>
                    <Flex w='fit-content' h='1.75rem' gap='6px' py='1' px='2' bg='#F3F5F6' borderRadius='md' cursor='pointer' alignItems={{base: 'baseline', md: 'center'}}>
                        <Text fontSize='0.75rem' lineHeight='1rem' fontWeight='700'>Modifica</Text>
                        <Icon viewBox="0 0 24 24">
                            <path
                                d="M17.54 10.12L13.88 6.46001M6.251 21H3V17.749C3 17.484 3.105 17.229 3.293 17.042L16.627 3.70701C17.018 3.31601 17.651 3.31601 18.041 3.70701L20.292 5.95801C20.683 6.34901 20.683 6.98201 20.292 7.37201L6.958 20.707C6.771 20.895 6.516 21 6.251 21Z"
                                fill="none"
                                stroke="#1E2329"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </Icon>
                    </Flex>
                </Flex>  
            </Flex>   
            <Flex mt='8' w='100%' px={{base: '5', md: '90px'}} >
                <Flex
                    w='100%'
                    p='4'
                    bg='#f3f5f6'
                    justifyContent='space-between'
                    borderRadius='lg'
                    flexDir={{base: 'column', md: 'row'}}
                >
                    <Flex flexDir='column'>
                        <Text fontSize={{base:'1rem', md: '1.25rem'}} lineHeight='1.875rem' fontWeight='700'>Hai un codice convenzione/coupon?</Text>
                        <Text fontSize='1rem' lineHeight='1.5rem' fontWeight='500'>Inserisci il codice qui</Text>
                    </Flex>
                    <Flex alignItems='center' gap='.5rem'>
                        <Input bg='white' placeholder='Voucher*' value={this.props.voucherInput} onChange={(event) => this.props.handleVoucherInput(event)}/>
                        <Button bg='#ffdd00' isDisabled={this.props.voucherInput.length ? false : true}
                            onClick={() => this.props.handleButton()}
                            onKeyDown={(event) => this.props.handleKeyPress(event)}
                        >
                            <ArrowForwardIcon/>
                        </Button>
                    </Flex>
                </Flex>
            </Flex>  
            <Flex w='100%' justifyContent='flex-start'>
                <Flex w='100%' px={{base: '5', md: '120px'}} flexDir='column' gap='2'>
                    <Flex gap='2' pt='20'  >
                        <Flex alignItems='center' gap='2' bg='#f3f5f6' p='2' borderRadius='lg'>
                            <Text fontSize='.875rem' fontWeight='700'>Filtra</Text>
                            <Icon viewBox="0 0 20 20" w='6' h='6' >
                                <path
                                    d="M17.5 14.1666H14.1667M10.8333 14.1666H2.5M2.5 5.83325H5.83333M9.16667 5.83325H17.5M11.6667 11.6666H13.3333C13.7933 11.6666 14.1667 12.0399 14.1667 12.4999V15.8333C14.1667 16.2933 13.7933 16.6666 13.3333 16.6666H11.6667C11.2067 16.6666 10.8333 16.2933 10.8333 15.8333V12.4999C10.8333 12.0399 11.2067 11.6666 11.6667 11.6666ZM8.33333 8.33325H6.66667C6.20667 8.33325 5.83333 7.95992 5.83333 7.49992V4.16659C5.83333 3.70659 6.20667 3.33325 6.66667 3.33325H8.33333C8.79333 3.33325 9.16667 3.70659 9.16667 4.16659V7.49992C9.16667 7.95992 8.79333 8.33325 8.33333 8.33325Z"
                                    fill="transparent"
                                    stroke="#1E2329"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </Icon>
                        </Flex>
                        <Flex alignItems='center' bg='#f3f5f6' p='2' borderRadius='lg' gap='4'>
                            <Text fontSize='.875rem' fontWeight='700'>Ordina per</Text>
                            <ChevronDownIcon w='4' h='4' />
                        </Flex>
                    </Flex>
                    <Text fontSize='0.875rem' lineHeight='1.5rem' fontWeight='700' pb='8 '>1641 Risultati</Text>
                    <Flex flexDir={{md: 'row', base: 'column'}} flexWrap='wrap' gap='4'>
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
                                <Text fontSize='1.25rem' lineHeight='1.875rem' fontWeight='700'>CINTURATO P1</Text>
                                <Flex  maxH='130px' overflow='hidden'>
                                    <Image src={fitmentLogo} alt='CINTURATO P1'
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
                        <TireFitment 
                            title={'WINTER 190 SNOWCONTROL SERIES'}
                            priceOriginal='151,00'
                            priceDiscounted='139,00'                        
                        />
                        <TireFitment 
                            title={'CINTURATO WINTER'}
                            priceOriginal='200,00'
                            priceDiscounted='150,00'
                        />
                        <TireFitment 
                            title={'POWERGY'}
                            priceOriginal='121,00'
                            priceDiscounted='99,00'                        
                        />
                        <TireFitment 
                            title={'CINTURATO ALL SEASON SF3'}
                            priceOriginal='101,00'
                            priceDiscounted='89,00'
                        />
                        <TireFitment 
                            title={'CINTURATO WINTER 2'}
                            priceOriginal='181,00'
                            priceDiscounted='129,00'
                        />
                        <TireFitment 
                            title={'CINTURATO ALL SEASON SF3'}
                            priceOriginal='151,00'
                            priceDiscounted='139,00'
                        />
                        <TireFitment 
                            title={'CINTURATO WINTER 2'}
                            priceOriginal='191,00'
                            priceDiscounted='169,00'
                        />
                        <TireFitment 
                            title={'CINTURATO ALL SEASON SF3'}
                            priceOriginal='199,00'
                            priceDiscounted='159,00'
                        />
                        <TireFitment 
                            title={'CINTURATO P7'}
                            priceOriginal='251,00'
                            priceDiscounted='149,00'
                        />
                        <TireFitment 
                            title={'CINTURATO P7 (P7C2)'}
                            priceOriginal='161,00'
                            priceDiscounted='109,00'
                        />
                        <TireFitment 
                            title={'CINTURATO P1'}
                            priceOriginal='131,00'
                            priceDiscounted='112,00'
                        />
                    </Flex>
                    <Flex justifyContent='center' pt='5' pb='10'>
                        <Button>Più risultati</Button>
                    </Flex>
                </Flex>
            </Flex>
        </VStack>
        )
    }
    }
    export default Fitment;
