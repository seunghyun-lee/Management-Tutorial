import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    margintop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minwidth: 1080
  }
})

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': 'steve',
    'birthday': '19901222',
    'gender': 'man',
    'job': 'student'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': 'micle',
    'birthday': '19801222',
    'gender': 'man',
    'job': 'sales'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': 'kevin',
    'birthday': '19851222',
    'gender': 'man',
    'job': 'account'
  }
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableCell>Number</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Job</TableCell>
          </TableHead>
          <TableBody>
            {customers.map(c => {
              return (                
                  <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />                
              );
            })}
          </TableBody>
        </Table>        
      </Paper>      
    );
  }
}

export default withStyles(styles)(App);
