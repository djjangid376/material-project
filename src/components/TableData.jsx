import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const createData = (
  priority,
  widget,
  title,
  template,
  product,
  visibility,
  pageStatus
) => {
  return { priority, widget, title, template, product, visibility, pageStatus };
};

const rows = [
  createData(1, "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData(2, "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(3, "Eclair", 262, 16.0, 24, 6.0),
  createData(4, "Cupcake", 305, 3.7, 67, 4.3),
  createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#F3F5F8" }}>
            <TableCell sx={{ fontWeight: "bold" }}>Priority</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Widget</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Title
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Template
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              #Product
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Visibility
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              ON/ OFF
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.priority}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.priority}</TableCell>
              <TableCell component="th" scope="row">
                {row.widget}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.template}</TableCell>
              <TableCell align="right">{row.product}</TableCell>
              <TableCell align="right">{row.visibility}</TableCell>
              <TableCell align="right">{row.visibility}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}