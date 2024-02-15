import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import "./Table.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("...", "...", "10 January 2024", "..."),
  createData("...", "...", "14 January 2024", "..."),
  createData("...", "...", "18 January 2024", "..."),
  createData("...", "...", "19 January 2024", "..."),
];

const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  const [selectedRow, setSelectedRow] = React.useState(null);

  const handleDetailsClick = (index) => {
    setSelectedRow(index === selectedRow ? null : index);
  };

  return (
    <div className="Table">
      <h3>Recent Orders</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Products</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row, index) => (
              <React.Fragment key={row.name}>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span
                      className="status"
                      style={makeStyle(row.status)}
                    >
                      {row.status}
                    </span>
                  </TableCell>
                  <nav
                    align="left"
                    className="Details"
                    onClick={() => handleDetailsClick(index)}
                  >
                    Details
                  </nav>
                </TableRow>
                {selectedRow === index && (
                  <TableRow>
                    <TableCell colSpan={5} className="DetailsDetails">
                      <div>
                        <p>Products: {row.name}</p>
                        <p>Tracking ID: {row.trackingId}</p>
                        <p>Date: {row.date}</p>
                        <p>Status: {row.status}</p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
