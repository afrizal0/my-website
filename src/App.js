import '@fontsource/poppins/900.css'

import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import Nav from './parts/Nav';
import Hero from './parts/Hero'
import Theme from './theme'

function App() {
  return (
    <ChakraProvider theme={Theme}>
        <Nav />
        <Hero />
    </ChakraProvider>
  );
}

export default App;
