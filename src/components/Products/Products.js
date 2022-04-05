import { useEffect, useState } from 'react';
import './ProductStyles.js';
import useStyles from "./ProductStyles";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Products = ({data}) => {
  const [price, setPrice] = useState('');
  const [val, setVal] = useState([...data])
  useEffect(()=>{
    if(val)
    {
      data.sort((a,b)=>{
        if(price === 'low')
          return a.price - b.price;
        else if(price === 'high')
          return b.price - a.price;
        else
          return 0;
      },[price])
      setVal([...data])
    }
  },[price])
  const classes = useStyles();

  return (
    <>
      <Box sx={{ maxWidth: 180 }} className={classes.box}>
        <FormControl fullWidth>
        <InputLabel className={classes.label}>Sort By:</InputLabel>
          <Select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id='price'
            variant='outlined'>
            <MenuItem value="low">Price: Low to High</MenuItem>
            <MenuItem value="high">Price: High to Low</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid
        container
        direction='row'
        justifyContent='left'
        alignItems='left'
      >
        {
        data && data.map((racquet)=>(
          <Paper key={racquet.id} className={classes.paper}>
            <Grid container direction='row'>
              <Grid item>
                  <img className={classes.img} alt="Racquet image not available" src={racquet.img} />
              </Grid>
              <Grid item xs={12} sm container>
                <Grid container direction='column' className={classes.grid1}>
                  <Typography
                   gutterBottom
                   variant='subtitle1'
                   color='inherit'
                   className={classes.typography}>
                    {racquet.name}
                  </Typography>
                  <Typography variant='body2'
                    gutterBottom
                    className={classes.typography}>
                    {racquet.vendor.name}
                  </Typography>
                  <Typography 
                    variant='h6' 
                    className={classes.typography}>
                    ${racquet.price}
                  </Typography>
                  <Button>
                    <ShoppingCartIcon color='primary' className={classes.icon}/>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Grid>
    </>
  )
}

export default Products;

