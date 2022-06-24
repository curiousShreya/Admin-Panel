import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FaUserPlus, FaTrash, FaSort } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";

import { IconContext } from "react-icons/lib";
import { pink } from "@mui/material/colors";
import Typography from "@mui/material/Typography";

import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 0,
};

const theme = createTheme({
  palette: {
    primary: {
      main: pink[400],
    },
    secondary: {
      main: "#f73378",
    },
  },
});

const getLocalItems = () => {
  let data = localStorage.getItem("users");

  console.log(data);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Settings = () => {
  const [users, setUsers] = React.useState(getLocalItems());
  const [open, setOpen] = React.useState(false);
  
  const [username, setUsername] = React.useState("");
  const [role, setRole] = React.useState("");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const submitFormData = (e) => {
    e.preventDefault();
    let user = {
      username,
      role,
    };
    setUsers([...users, user]);
    setUsername("");
    setRole("");
  };
  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const deleteUser = (name) => {
    const filteredUsers = users.filter((element, index) => {
      return element.username !== name;
    });
    setUsers(filteredUsers);
  };
  return (
    <div>
      <Button variant="contained" color="success" onClick={handleOpen}>
        ADD USER
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card sx={{ display: "flex", height: "400px" }}>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "250px",
                  justifyContent: "center",
                  bgcolor: "secondary.main",
                }}
              >
                <CardContent sx={{ flex: "1 0 4" }}>
                  <IconContext.Provider
                    value={{ style: { fontSize: "80px", color: "white" } }}
                  >
                    <div>
                      <FaUserPlus />
                    </div>
                    <Typography component="div" variant="p">
                      Laboris pariatur labore veniam est sit aute veniam
                      proident. Esse cillum exercitation incididunt sunt dolor
                      proident proident mollit proident. Amet non deserunt
                      veniam velit excepteur duis eu dolor occaecat eiusmod.
                    </Typography>
                  </IconContext.Provider>
                </CardContent>
              </Box>
            </ThemeProvider>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={submitFormData}
              sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" }, mt: 2 }}
            >
              <h3 style={{ marginLeft: "5px" }}>User Information</h3>

              <h5 style={{ marginTop: "10px", marginLeft: "5px" }}>
                User name
              </h5>
              <TextField
                id="outlined-name"
                label="Username"
                type="text"
                size="small"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <h5 style={{ marginTop: "10px", marginLeft: "5px" }}>Role</h5>
              <FormControl sx={{ m: 1, minWidth: 120, ml: 2 }} size="small">
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={role}
                  label="Role"
                  onChange={handleChange}
                >
                  <MenuItem value={"admin"}>Admin</MenuItem>
                  <MenuItem value={"owner"}>Owner</MenuItem>
                  <MenuItem value={"sales"}>Sales</MenuItem>
                </Select>
                <Stack spacing={2} direction="row" sx={{ ml: 14, mt: 4 }}>
                  <Button
                    variant="contained"
                    size="medium"
                    color="warning"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    size="medium"
                    type="submit"
                  >
                    Add
                  </Button>
                </Stack>
              </FormControl>
            </Box>
          </Card>
        </Box>
      </Modal>
      <div style={{marginTop: "40px"}}>
        {users.length >= 1 && 
           <table className="table table-bordered">
           <thead className="thead-light">
             <tr>
               <th scope="col">#</th>
               <th scope="col">
                 User
                 <IconContext.Provider value={{ style: {fontSize: '20px', color: "green"}}}>
                     <span>
                     <FaSort />
                     </span>
                  </IconContext.Provider>
                 </th>
 
               <th scope="col">
                 Role
                 <IconContext.Provider value={{ style: {fontSize: '20px', color: "green"}}}>
                     <span>
                     <FaSort />
                     </span>
                  </IconContext.Provider>
                 </th>
               <th scope="col">
                 Action
                 </th>
             </tr>
           </thead>
           <tbody>
             {users &&
               users.map((item, index) => {
                 return (
                   <tr key={index}>
                     <th scope="row">{index + 1}</th>
                     <td>{item.username}</td>
                     <td>{item.role}</td>
 
                     <td>
                       <IconContext.Provider
                         value={{ style: { fontSize: "20px", color: "green" } }}
                       >
                         <div
                           type="button"
                           onClick={() => deleteUser(item.username)}
                         >
                           <FaTrash />
                         </div>
                       </IconContext.Provider>
                     </td>
                   </tr>
                 );
               })}
           </tbody>
         </table>
        }
        
      </div>
    </div>
  );
};

export default Settings;
