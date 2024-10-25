import './App.css';
import React from 'react';
import { ChakraProvider, Box, VStack } from '@chakra-ui/react'
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
      headerList: ['Service', 'Reifen', 'Felgen', 'Aktuelles', 'Geschäftskunden', 'Tipps', 'Karriere', 'Händler Login']
    }
  }

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

  render() {
    return(
      <ChakraProvider>
        <VStack minH='100vh' w='100%' minWidth={{ base: '100vh', lg: 'none', xl:'none',  md: 'none'}} display='flex' flexDir='column'>
            <VStack w='100%'>
              <NewHeader handleBookingPopup={this.handleBookingPopup}/>
            {/* <VStack>
              <SubHeader headerList={this.state.headerList}/>
            </VStack> */}
            </VStack>
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
          <VStack w='100%'>
            <FooterComponent/>
          </VStack>

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

          

        </VStack>
    </ChakraProvider>
    )
  }
}

export default App;
