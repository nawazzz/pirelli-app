    import React, { Component } from 'react'
    import { VStack, Heading, Container, Flex, Text, Icon, Input, Button, Image, Select } from '@chakra-ui/react';
    import { ChevronRightIcon, ArrowForwardIcon, ChevronDownIcon } from '@chakra-ui/icons';
    import fitmentLogo from '../logos/tire-fitment.png';    
    import logoPirelli from '../logos/pirelli.png';
    import TireFitment from './TireFitment';
    import NewHeader from './NewHeader';
    import FooterComponent from './FooterComponent';

    class Fitment extends React.Component {
    render() {
        return (
        <VStack>
            {/* <NewHeader handleBookingPopup={this.handleBookingPopup}/> */}
            <VStack w='100%' maxW='1440px' mt='100px' >
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
                            {this.props.fitmentList && this.props.fitmentList.map((elm, index) => {
                                return(
                                    <TireFitment 
                                        title={elm.title}
                                        priceDiscounted={elm.priceDiscounted}
                                        priceOriginal={elm.priceOriginal}
                                        consumptionValue={elm.consumptionValue}
                                        gripValue={elm.gripValue}
                                        soundValue={elm.soundValue}
                                        handleClick={(event) => this.props.handleImageClick(event)}
                            />
                                )
                            })}
                        </Flex>
                        <Flex justifyContent='center' pt='5' pb='10'>
                            <Button>Più risultati</Button>
                        </Flex>
                    </Flex>
                </Flex>
            </VStack>
            <VStack w='100%'>
            <FooterComponent/>
          </VStack>
        </VStack>
        )
    }
    }
    export default Fitment;
