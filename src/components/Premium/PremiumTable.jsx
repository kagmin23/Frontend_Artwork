import {
  Button,
  Dialog,
  DialogContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "./Premium.css";

const initialData = [
  { id: 1, name: "Phan", email: "phan@gma", phone: "0111", premium: "" },
  { id: 2, name: "Kang", email: "kang@gma", phone: "0222", premium: "" },
  { id: 3, name: "Min", email: "min@gma", phone: "0333", premium: "" },
];

const Premium = () => {
  const [data, setData] = useState(initialData);
  const [editingId, setEditingId] = useState(null);
  const [newItem, setNewItem] = useState({ name: "", email: "", phone: "", premium: "" });
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchFound, setSearchFound] = useState(true);

  const handleAdd = () => {
    const newData = [...data, { id: data.length + 1, ...newItem }];
    setData(newData);
    setNewItem({ name: "", email: "", phone: "", premium: "" });
  };

  const handleEdit = (id) => {
    setEditingId(id);
    const itemToEdit = data.find((item) => item.id === id);
    setNewItem({ ...itemToEdit });
    setModalOpen(true);
  };

  const handleUpdate = () => {
    const updatedData = data.map((item) =>
      item.id === editingId ? { ...item, ...newItem } : item
    );
    setData(updatedData);
    setEditingId(null);
    setNewItem({ name: "", email: "", phone: "", premium: "" });
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingId(null);
    setNewItem({ name: "", email: "", phone: "", premium: "" });
  };

  const handleSearch = () => {
    const results = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.premium.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    setSearchFound(results.length > 0);
  };

  return (
    <div className="container">
      <h2>Manager Creator Premium</h2>
      <div className="search-container">
        <TextField
          label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </div>
      <div className="add-container">
        <TextField
          label="Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <TextField
          label="Email"
          value={newItem.email}
          onChange={(e) => setNewItem({ ...newItem, email: e.target.value })}
        />
        <TextField
          label="Phone"
          value={newItem.phone}
          onChange={(e) => setNewItem({ ...newItem, phone: e.target.value })}
        />
        <TextField
          label="Premium"
          value={newItem.premium}
          onChange={(e) => setNewItem({ ...newItem, premium: e.target.value })}
        />
        <Button variant="contained" color="primary" onClick={handleAdd}>
          Add
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table className="table" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>PHONE</TableCell>
              <TableCell>PREMIUM</TableCell>
              <TableCell>ACTIONS</TableCell>
            </TableRow>
          </TableHead>
          {searchFound ? (
            <TableBody>
              {(searchTerm ? searchResults : data).map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>{item.premium}</TableCell>
                  <TableCell className="actions">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody>
              <TableRow>
                <TableCell colSpan={6} align="center">
                  Not Found
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>

      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogContent>
          <h3>Edit</h3>
          <TextField
            label="Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
          <TextField
            label="Email"
            value={newItem.email}
            onChange={(e) => setNewItem({ ...newItem, email: e.target.value })}
          />
          <TextField
            label="Phone"
            value={newItem.phone}
            onChange={(e) => setNewItem({ ...newItem, phone: e.target.value })}
          />
          <TextField
            label="Premium"
            value={newItem.premium}
            onChange={(e) => setNewItem({ ...newItem, premium: e.target.value })}
          />
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            Update
          </Button>
          <Button variant="contained" onClick={handleCloseModal}>
            Cancel
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Premium;
