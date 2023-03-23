import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routers, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>123</main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
