import React from "react";
import { Box,
    Container,
    Flex,
    Image,
    VStack,
    Text,
    Button
 } from "@chakra-ui/react";
import driverLogo from '../logos/driver_logo.png';
import cartIcon from '../logos/cart.jpg';
import swissFlag from '../logos/swiss.jpg';

class SubHeader extends React.Component {
  render() {
    return (
      <VStack w='100%' zIndex={1}>
        <Box pt='4' pb='4' w='75%' mr='30' ml='30' pl='30' pr='30'  >
          <Flex w='100%'  justifyContent='space-between' pl='20' pr='20' alignItems='center'>
           <Flex flexDirection='row' gap='5'>
            <Button>Servizi</Button>
            <Button>Pneumatici</Button>
            <Button>Consigli</Button>
            <Button>Promozioni</Button>
            <Button>DriverPlus</Button>
            <Button>Leasing e Flotte</Button>
            <Button>Convenzioni</Button>
           </Flex>
          </Flex>
        </Box>
      </VStack>
    );
  }
}
  
  export default SubHeader;