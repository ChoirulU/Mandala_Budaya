"use client"

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
} from "@mui/material";

const UserTable = () => {
  const [selectionColor, setSelectionColor] = useState("default");
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowSelection = (name) => {
    setSelectedRows((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const handleColorChange = (event) => {
    setSelectionColor(event.target.value);
  };

  const rows = [
    { name: "Tony Reichert", role: "CEO", status: "Active" },
    { name: "Zoey Lang", role: "Technical Lead", status: "Paused" },
    { name: "Jane Fisher", role: "Senior Developer", status: "Active" },
    { name: "William Howard", role: "Community Manager", status: "Vacation" },
  ];

  return (
    <div style={{ padding: "20px", backgroundColor: "#fff", color: "#fff" }}>
      <TableContainer component={Paper} style={{ backgroundColor: "#4CAF50" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell style={{ color: "#fff" }}>Name</TableCell>
              <TableCell style={{ color: "#fff" }}>Role</TableCell>
              <TableCell style={{ color: "#fff" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                style={{
                  backgroundColor: selectedRows.includes(row.name)
                    ? selectionColor === "default"
                      ? "#444"
                      : selectionColor
                    : "transparent",
                }}
              >
                <TableCell>
                  <Checkbox
                    checked={selectedRows.includes(row.name)}
                    onChange={() => handleRowSelection(row.name)}
                    style={{ color: "#fff" }}
                  />
                </TableCell>
                <TableCell style={{ color: "#fff" }}>{row.name}</TableCell>
                <TableCell style={{ color: "#fff" }}>{row.role}</TableCell>
                <TableCell style={{ color: "#fff" }}>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div style={{ marginTop: "20px" }}>
        <h3 style={{ color : "#4A4A4A"}}>Selection color</h3>
        <RadioGroup
          row
          value={selectionColor}
          onChange={handleColorChange}
          style={{ color: "#4A4A4A" }}
        >
          <FormControlLabel value="default" control={<Radio />} label="Default" />
          <FormControlLabel value="primary" control={<Radio />} label="Primary" />
          <FormControlLabel value="secondary" control={<Radio />} label="Secondary" />
          <FormControlLabel value="success" control={<Radio />} label="Success" />
          <FormControlLabel value="warning" control={<Radio />} label="Warning" />
          <FormControlLabel value="danger" control={<Radio />} label="Danger" />
        </RadioGroup>
      </div>
    </div>
  );
};

export default UserTable;
