import './App.scss';
import React from 'react';
import { ChakraProvider, Box, VStack, Container } from '@chakra-ui/react'
import Header from './components/Header';
import ContentBookAppointment from './components/ContentBookAppointment';
import SubHeader from './components/SubHeader';
import BookingWindow from './components/BookingWindow';
import TitleComponent from './TitleComponent';
import HomepageBookingComponent from './components/HomepageBookingComponent';
import TireDetailsDrawer from './components/TireDetailsDrawer';
import DiscoverCardComponent from './components/DiscoverCardComponent';
import ProductSectionComponent from './components/ProductSectionComponent';
import ServiceSectionComponent from './components/ServiceSectionComponent';
import DiscoverAdvicesComponent from './components/DiscoverAdvicesComponent';
import DiscoverFAQComponent from './components/DiscoverFAQComponent';
import DriverCenterNetwork from './components/DriverCenterNetwork';
import WorkshopComponent from './components/WorkshopComponent';
import FooterComponent from './components/FooterComponent';
import NewHeader from './components/NewHeader';
import  SwiperWrapper  from './components/SwiperWrapper';
import { Switch, Route, Routes, useParams, Link } from 'react-router-dom';
import Fitment from './components/Fitment';

class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      openBookingModal: false,
      openBookingWindow: false,
      openTireDetailsDrawer: false,
      inputValueOne: '',
      inputValueTwo: '',
      inputValueThree: '',
      saveInputValue: '',
      headerList: ['Service', 'Reifen', 'Felgen', 'Aktuelles', 'Geschäftskunden', 'Tipps', 'Karriere', 'Händler Login'],
      isFitment: true,
      voucherInput: '',
      fitmentList: [
        {
          title: 'CINTURATO WINTER 2',
          priceDiscounted: '191,00',
          priceOriginal: '169,00',
          consumptionValue: 'A',
          gripValue: 'B',
          soundValue: '70dB'
        },
        {
          title: 'WINTER 190 SNOWCONTROL SERIES',
          priceDiscounted: '151,00',
          priceOriginal: '139,00',     
          consumptionValue: 'C',
          gripValue: 'B',
          soundValue: '71dB'

        },
        {
          title: 'CINTURATO WINTER',
          priceDiscounted: '200,00',
          priceOriginal: '150,00',
          consumptionValue: 'B',
          gripValue: 'C',
          soundValue: '72dB'
        },
        {
          title: 'POWERGY',
          priceDiscounted: '121,00',
          priceOriginal: '99,00',   
          consumptionValue: 'A',
          gripValue: 'A',
          soundValue: '70dB'
        },
        {
          title: 'CINTURATO ALL SEASON SF3',
          priceDiscounted: '101,00',
          priceOriginal: '89,00',
          consumptionValue: 'B',
          gripValue: 'B',
          soundValue: '69dB'
        },
        { 
          title: 'CINTURATO WINTER 2',
          priceDiscounted: '181,00',
          priceOriginal: '129,00',
          consumptionValue: 'C',
          gripValue: 'A',
          soundValue: '72dB'
      },
      { 
          title: 'CINTURATO ALL SEASON SF3',
          priceDiscounted: '151,00',
          priceOriginal: '139,00',
          consumptionValue: 'B',
          gripValue: 'C',
          soundValue: '71dB'
      },
      { 
          title: 'CINTURATO WINTER 2',
          priceDiscounted: '191,00',
          priceOriginal: '169,00',
          consumptionValue: 'A',
          gripValue: 'B',
          soundValue: '70dB'
      },
      { 
          title: 'CINTURATO ALL SEASON SF3',
          priceDiscounted: '199,00',
          priceOriginal: '159,00',
          consumptionValue: 'B',
          gripValue: 'C',
          soundValue: '69dB'
      },
      { 
          title: 'CINTURATO P7',
          priceDiscounted: '251,00',
          priceOriginal: '149,00',
          consumptionValue: 'A',
          gripValue: 'B',
          soundValue: '72dB'
      },
      { 
          title: 'CINTURATO P7 (P7C2)',
          priceDiscounted: '161,00',
          priceOriginal: '109,00',
          consumptionValue: 'C',
          gripValue: 'B',
          soundValue: '71dB'
      },
      { 
          title: 'CINTURATO P1',
          priceDiscounted: '131,00',
          priceOriginal: '112,00',
          consumptionValue: 'A',
          gripValue: 'C',
          soundValue: '70dB'
      },
      ]
    }
  }

  // componentDidMount() {
  //   this.setState({
  //     isFitment: false
  //   })
  // }

  handleBookingPopup = () => {
    console.log('lele')
    if (this.state.openBookingModal === false) {
      this.setState({
        openBookingModal: !this.state.openBookingModal
      })
    }
  }

  handleBookingWindow = (event) => {
    console.log('booking', event)
    this.setState({
      openBookingWindow: !this.state.openBookingWindow,
      openBookingModal: false

    }, () => {console.log(this.state)})
  }

  handleCloseIncon = () => {
    this.setState({
      openBookingWindow: false,
      openBookingModal: false,
      openTireDetailsDrawer: false
    })
  }

  handleInputValue = (event) => {
    console.log(event)
    if (event.target.name === 'regOne') {
      this.setState({inputValueOne: event.target.value})
    } else if (event.target.name === 'regTwo') {
      this.setState({inputValueTwo: event.target.value})
    } else if (event.target.name === 'regThree') {
      this.setState({inputValueThree: event.target.value})
    }
  }

  handleBookingWindowButton = () => {
    this.setState({openBookingWindow: false, openTireDetailsDrawer: true})

  }

  handleVoucherInput = (event) => {
    console.log(event)
    this.setState({
      voucherInput: event.target.value
    })
  }

  handleButton = () => {
    this.setState({
      voucherInput: ''
    })
  }

  handleKeyPress = (event) => {
    console.log(event)
    this.handleButton()
  }

  render() {
    return(
      <ChakraProvider>
      <div>
        {
          this.state.isFitment ? (
            <div>
              <NewHeader handleBookingPopup={this.handleBookingPopup}/>
              <VStack mt='100px'>
                <Fitment voucherInput={this.state.voucherInput} handleVoucherInput={this.handleVoucherInput} 
                handleButton={this.handleButton} handleKeyPress={this.props.handleKeyPress}
                fitmentList={this.state.fitmentList}
                />
              </VStack>
            </div>
          ) : (
            <div className='app-container'>
        {/* <VStack minH='100vh' w='100%' minWidth={{ base: '100vh' }} display='flex' flexDir='column' flex='1 1 0%' outline= '0px'> */}
            <VStack w='100%'>
              <NewHeader handleBookingPopup={this.handleBookingPopup}/>
            {/* <VStack>
              <SubHeader headerList={this.state.headerList}/>
            </VStack> */}
            </VStack>
        {/* <Routes>
          <Route
            exact 
            path='/fitment'
            Component={() => <Fitment />}
          />
        </Routes> */}
          <VStack w='100%' h='100%'>
            <TitleComponent handleBookingWindow={this.handleBookingWindow} />
          </VStack>
          <VStack w='100%' mt={{base:'150px', md:'-60px'}}>
            <HomepageBookingComponent  />
          </VStack>
          <VStack w='100%' mt='20'>
            <DiscoverCardComponent  />
            
          </VStack>
          <VStack w='100%' mt='20'>
            <ProductSectionComponent/>
          </VStack>
          <VStack w='100%' mt='20'>
            <ServiceSectionComponent/>
          </VStack>
          <VStack w='100%' mt='20' bg='#F3F5F6'>
            <DiscoverAdvicesComponent/>
          </VStack>
          <VStack w='100%' mt='20'>
            <DiscoverFAQComponent/>
          </VStack>
          <VStack w='100%' mt='20'>
            <DriverCenterNetwork/>
          </VStack>
          <VStack w='100%' mt='20'>
            <WorkshopComponent/>
          </VStack>
        
          {/* <Container>
            <SwiperWrapper/>
          </Container> */}

        

          

        {/* </VStack> */}
        </div>
          )    
        }
        { this.state.openBookingModal === true && 
          <VStack position='relative' zIndex='1'>
            <ContentBookAppointment openBookingModal={this.state.openBookingModal} handleCloseIncon={this.handleCloseIncon} handleBookingWindow={this.handleBookingWindow}/>
          </VStack>
        }
        {
          this.state.openBookingWindow === true && 
          <VStack position='relative' zIndex='1'>
            <BookingWindow 
              handleInputValue={this.handleInputValue} handleCloseIncon={this.handleCloseIncon} 
              inputValueOne={this.state.inputValueOne} saveInputValue={this.state.saveInputValue}
              inputValueTwo={this.state.inputValueTwo} inputValueThree={this.state.inputValueThree}
              handleBookingWindowButton={this.handleBookingWindowButton}
            />
          </VStack>
        }
        { this.state.openTireDetailsDrawer === true &&
          <VStack position='relative' zIndex='1'>
            <TireDetailsDrawer handleCloseIncon={this.handleCloseIncon}/>
          </VStack>
        }
        <VStack w='100%'>
            <FooterComponent/>
          </VStack>
      </div>
    </ChakraProvider>
    )
  }
}

export default App;
