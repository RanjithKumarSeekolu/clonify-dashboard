import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TablePagination,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Chip from "@mui/material/Chip";
import { initialData } from "../../utils/InstalledApps";

const getStatusStyle = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Pending":
      return "warning";
    case "Cancelled":
      return "error";
    default:
      return {};
  }
};

const InstalledAppsTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Paper>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 10px",
        }}
      >
        <Typography variant="h6">Installed Apps</Typography>
        <IconButton aria-label="menu">
          <MoreVertIcon />
        </IconButton>
      </div>

      <TableContainer sx={{ overflowX: "auto" }}>
        <Table aria-label="installed apps table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ background: "#F9FAFB" }}>Source</TableCell>
              <TableCell sx={{ background: "#F9FAFB" }} align="right">
                Amount
              </TableCell>
              <TableCell sx={{ background: "#F9FAFB" }} align="right">
                Status
              </TableCell>
              <TableCell sx={{ background: "#F9FAFB" }} align="right">
                UserId
              </TableCell>
              <TableCell sx={{ background: "#F9FAFB" }} align="right">
                Joined
              </TableCell>
              <TableCell sx={{ background: "#F9FAFB" }} align="right">
                Group
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {initialData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.UserId}>
                  <TableCell component="th" scope="row">
                    {row.Source}
                  </TableCell>
                  <TableCell align="right">{row.Amount.toFixed(2)}</TableCell>
                  <TableCell align="right">
                    <Chip
                      label={row.Status}
                      color={getStatusStyle(row.Status)}
                    />
                  </TableCell>
                  <TableCell align="right">{row.UserId}</TableCell>
                  <TableCell align="right">{row.Joined}</TableCell>
                  <TableCell align="right">{row.Group}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={initialData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      </div>
    </Paper>
  );
};

export default InstalledAppsTable;
