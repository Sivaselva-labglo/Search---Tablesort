import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import TableSortLabel from '@mui/material/TableSortLabel';
import { React, useState } from "react";

export default function Tablesort() {
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
  const [sort, setSort] = useState('desc')
  const [direction, setDirection] = useState(true)

  const sortTable = (field) => {
    if (sort === 'desc') {
      const sorted = [...users].sort((element1, element2) =>
        element1[field].toLowerCase() > element2[field].toLowerCase() ? 1 : -1
      );
      setUsers(sorted)
      setSort('asc')
      setDirection(false)
    }
    else if (sort === 'asc') {
      const sorting = [...users].sort((element, element2) =>
        element[field].toLowerCase() < element2[field].toLowerCase() ? 1 : -1
      )
      setUsers(sorting)
      setSort('desc')
      setDirection(true)
    }
  }
  return (
    <div>
      <p>Table Sort</p>
      <Table sx={{ maxWidth: '800px' }} >
        <TableHead sx={{ backgroundColor: 'gainsboro' }}>
          <TableRow>
            <TableCell onClick={() => sortTable('name')}>
              Name
              <TableSortLabel
                active={false}
                direction={direction ? 'desc' : 'asc'}
                onClick={() => sortTable('name')}>
              </TableSortLabel>
            </TableCell>

            <TableCell onClick={() => sortTable('gender')}>
              Gender
              <TableSortLabel
                active={false}
                direction={direction ? 'desc' : 'asc'}
                onClick={() => sortTable('gender')}>
              </TableSortLabel>
            </TableCell>

            <TableCell onClick={() => sortTable('marks')}>
              Mark
              <TableSortLabel
                active={false}
                direction={direction ? 'desc' : 'asc'}
                onClick={() => sortTable('marks')}>
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            users.map((datas, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{datas.name}</TableCell>
                  <TableCell>{datas.gender}</TableCell>
                  <TableCell>{datas.marks}</TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </div>
  )
}