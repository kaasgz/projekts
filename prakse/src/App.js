import {Box, Button, Container, ThemeProvider, Typography} from '@mui/material'
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Promotions from './components/promotions';
import Products from './components/products';

function App() {

  useEffect(()=>{
    document.title = "React Material UI - Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>

      <Container
       maxWidth="xl"
       sx={{
         background: '#fff'
       }}
      >
       
         <Appbar />
         <Banner />
         <Promotions/>
         <Box display={'flex'} justifyContent={'center'} sx={{padding:4}}>
            <Typography variant='h4'>Our Products</Typography>
         </Box>
         <Products/>
         {
       /*
         title
         Products
         footer
         searchbox
         appdrawer
         */
         }
      
      </Container>
      
    </ThemeProvider>
  );
}

export default App;
