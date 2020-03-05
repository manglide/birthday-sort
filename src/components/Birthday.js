import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

export default function Birthday() {
  // Set our Initial itemChecked State
  const [itemChecked, setItemChecked] = useState('name')
  // Set our People state variable
  const [people, setPeople] = useState([
              {
                  name: "Veronica Mize",
                  dob: "11/29/2011"
              }, {
                  name: "Cecilia Olsson",
                  dob: "09/16/1992"
              }, {
                  name: "Peter Parker",
                  dob: "01/16/1992"
              }, {
                  name: "Jimmy Shergil",
                  dob: "12/12/2001"
              }, {
                  name: "Alexander Alfred",
                  dob: "02/09/1891"
              }, {
                  name: "Janice Shroyer",
                  dob: "12/01/1982"
              }, {
                  name: "Ralph White",
                  dob: "11/30/2011"
              }, {
                  name: "Deborah T. Decker",
                  dob: "10/31/1999"
              }
          ]);
  // Set our Radio Form HandleChange Functions
  const handleChange = event => {
    if (event.target.value === "name") {
            //sort this.people array by name
            people.sort(function (a, b) {
                let personA = a.name.toLowerCase();
                let personB = b.name.toLowerCase();
                return (personA < personB) ? -1 : (personA > personB) ? 1 : 0;
            });
        } else {
            //sort this.people array by dob
            people.sort(function (a, b) {
                return new Date(b.dob) - new Date(a.dob);
            });
            people.reverse();
        }
    // Set the Form Item Checked Value
    setItemChecked(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <h1>Birthday Records</h1>
      <RadioGroup aria-label="position" name="sorter" value={itemChecked} onChange={handleChange} row>
        <FormControlLabel
          value="name"
          control={<Radio color="primary" />}
          label="Sort By Name"
          labelPlacement="end"
        />
        <FormControlLabel
          value="age"
          control={<Radio color="primary" />}
          label="Sort By Age"
          labelPlacement="end"
        />
      </RadioGroup>
      <Paper className="appTable">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="table-header">Name</TableCell>
                            <TableCell className="table-header">Date of Birth</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {people.map(person => (
                            <TableRow key={person.name}>
                                <TableCell component="th" scope="row">
                                    {person.name}
                                </TableCell>
                                <TableCell align="right">{person.dob}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
    </FormControl>
  );
}
