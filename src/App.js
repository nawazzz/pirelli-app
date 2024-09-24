import './App.css';
import React from 'react';
import { ChakraProvider, VStack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import ContentBookAppointment from './components/ContentBookAppointment';
import SubHeader from './components/SubHeader';

class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      openBookingModal: false
    }
  }

  handleBookingPopup = () => {
    console.log('lele')
    this.setState({
      openBookingModal: !this.state.openBookingModal
    }, () => {console.log(this.state)})
  }

  render() {
    return(
      <ChakraProvider>
        <Header handleBookingPopup={this.handleBookingPopup}/>
      {/* <SubHeader/> */}
      { this.state.openBookingModal === true && 
        <VStack>
          <ContentBookAppointment openBookingModal={this.state.openBookingModal} />
        </VStack>
        }
    </ChakraProvider>
    )
  }
}

export default App;
