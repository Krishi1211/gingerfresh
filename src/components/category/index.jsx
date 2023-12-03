import React from 'react';
import './categories.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const categories=()=> {
  
  return (
    <>
    <header >
      <h1 className="header">Why Choose us</h1>
    </header>
     <Box sx={{ flexGrow: 1}} className="center">
     <Grid container spacing={2}>
       <Grid item xs={4}>
         <Item className="noborder"><h3 className="orange">Easy to order <br/></h3>
          Enjoy the convinience of your shopping and good quality products
         </Item>
       </Grid>
       <Grid item xs={4}>
         <Item>
          <h3 className="orange">
          Fast delivery<br/></h3>
          We offer home delivery anywhere in the city
         </Item>
       </Grid>
       <Grid item xs={4}>
         <Item>
          <h3 className="orange">
          Easy to order<br/></h3>
          You payment process will be safe as we have allowed security comfortable
          </Item>
       </Grid>
     </Grid>
   </Box>
   <br/><br/>
    <Box sx={{ flexGrow: 1}} className="center">
     <Grid container spacing={2}>
       <Grid item xs={4}>
       <Card sx={{ minWidth: 275 }} >
      <CardContent className="orangebg">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Upto 25% off
        </Typography>
        <Typography variant="h5" component="div">
          Dry fruits contain <br/>Multi Vitamins...
        </Typography>
        
      </CardContent>
      <CardActions className="orangebg">
      <Button variant="outlined">Shop Now</Button>
      </CardActions>
    </Card>
       </Grid>
       <Grid item xs={4}>
       <Card sx={{ minWidth: 275 }} >
      <CardContent className="greenbg">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Upto 25% off
        </Typography>
        <Typography variant="h5" component="div">
          Dry fruits contain <br/>Multi Vitamins...
        </Typography>
        
      </CardContent>
      <CardActions className="greenbg">
      <Button variant="outlined">Shop Now</Button>
      </CardActions>
    </Card>
       </Grid>
       <Grid item xs={4}>
       <Card sx={{ minWidth: 275 }} >
      <CardContent className="orangebg">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Upto 25% off
        </Typography>
        <Typography variant="h5" component="div">
          Dry fruits contain <br/>Multi Vitamins...
        </Typography>
        
      </CardContent>
      <CardActions className="orangebg">
      <Button variant="outlined">Primary</Button>
      </CardActions>
    </Card>
       </Grid>
     </Grid>
   </Box>
   <h1 className="header">Browse All Categories</h1>
   
   </>
  );
}
export default categories;