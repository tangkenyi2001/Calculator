import React, { useState } from 'react';
import './App.css';
import Calc from './calc.js';
import { extendTheme, ChakraProvider} from '@chakra-ui/react'
import { Flex} from '@chakra-ui/react'
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors })
function App() {

  return (
    <>
    <ChakraProvider theme={theme}>
      <Flex 
      justify="center"      // Centers horizontally
      align="center"        // Centers vertically
      height="100vh"        // Ensures the Flex takes the full height of the viewport
      bg="gray.100"         // Optional: Add background color
      >
        <Calc/>
      </Flex>      
    </ChakraProvider>
    
       
    </>
    
  );
}


export default App;
