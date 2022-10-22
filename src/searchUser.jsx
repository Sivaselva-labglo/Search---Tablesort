import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Divider, TextField } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchUser() {
  const students = [
    {
      name: "arun",
      gender: "male",
      marks: "20",
    }, {
      name: "jinusha",
      gender: "female",
      marks: "55",
    }, {
      name: "ramya",
      gender: "female",
      marks: "75",
    }, {
      name: "ajeesh",
      gender: "male",
      marks: "60",
    }, {
      name: "jaison",
      gender: "male",
      marks: "65",
    }, {
      name: "megha",
      gender: "female",
      marks: "49",
    }, {
      name: "thinushiya",
      gender: "female",
      marks: "80",
    }, {
      name: "raja",
      gender: "male",
      marks: "35",
    }, {
      name: "kumar",
      gender: "male",
      marks: "40",
    }, {
      name: "rose",
      gender: "female",
      marks: "75",
    },
    {
      name: "smith",
      gender: "male",
      marks: "90",
    }, {
      name: "warner",
      gender: "male",
      marks: "80",
    }, {
      name: "harleen deol",
      gender: "female",
      marks: "50",
    }, {
      name: "mithali",
      gender: "female",
      marks: "85",
    }, {
      name: "dhoni",
      gender: "male",
      marks: "99",
    },
  ]

  const [users, setUsers] = useState(students)
  const redirect = useNavigate()
  const navigates = useNavigate()

  const filter = (e) => {
    const searchString = e.target.value

    if (searchString !== '') {
      const filteredResult = users.filter((user) => {
        return user.name.toLowerCase().startsWith(searchString.toLowerCase());
      });
      setUsers(filteredResult);
    } else {
      setUsers(students);
    }
  }

  function navigate(names) {
    redirect(`/${names}`)
  }

  function sortTablePage() {
    navigates(`/name/tableSortPage`)
  }
  return (
    <div>
      <center>
        <br/>
        <Button variant="contained" onClick={sortTablePage}>Sort-Table</Button>
      <br/> <br/>
        <TextField type='search' size="small" onChange={filter} placeholder="enter a name" />
        <Button variant="outlined"><SearchIcon></SearchIcon></Button>
        <br/> <br/>
        {
          (users.length > 0)
            ? <Card sx={{ maxWidth: '275px' }}> {
              users.map((elements, index) => {
                return (
                    <CardContent key={index}>
                      <p onClick={() => navigate(elements.name)}>Name : {elements.name}</p>
                      <p>Gender : {elements.gender}</p>
                      <p>Marks : {elements.marks}</p>
                      <Divider/>
                    </CardContent>
                )
              })}
            </Card>
            : <p>No results found</p>
        }
      </center>
    </div>
  )
}