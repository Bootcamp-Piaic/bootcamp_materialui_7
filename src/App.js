import React from 'react';
import './App.css';
import { Button, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import {Bar} from 'react-chartjs-2';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';


 //link            https://www.npmjs.com/package/react-chartjs-2 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
function App() {
  const classes = useStyles();

  return (
    <div>
      <h2>Bar Example (custom size)</h2>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
       {/* <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div> */}
      {/* <Grid container spacing={3}>
        <Grid item xs={12}>
          Hello World        </Grid>
        <Grid item xs={6}>
          Hello 1        </Grid>
        <Grid item xs={6}>
          Hello 2        </Grid>

      </Grid> */}
      {/* <Button color='primary' variant='contained'>Material Button</Button>
      <Button
        variant="contained"
        color="secondary" 
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button> */}
    </div>
  );
}

export default App;
