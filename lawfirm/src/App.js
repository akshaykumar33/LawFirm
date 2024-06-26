
import './App.css';
import { useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme/Theme'
import Cards from './components/Cards/Cards'
import Article from './components/Article/Article';
import Subscribe from './components/Subscribe/Subscribe';
import Collage from './components/Collage/Collage';
import Clients from './components/Clients/Clients';
import Teams from './components/Teams/Teams';
import FAQs from './components/FAQs/FAQs';

function App() {
  useEffect(()=>{
    alert("Please view this in Desktop or change your browser's mode to desktop view to utilize and experience richness of site")
  },[])
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Navbar/>
      <Main/>
      <Article/>
     <Cards/>
     <Collage/>
     <Clients/>
     <Teams/>
     <FAQs/>
     <Subscribe/>
      <Footer/>
    </div>
    </ThemeProvider>
  );
}

export default App;
