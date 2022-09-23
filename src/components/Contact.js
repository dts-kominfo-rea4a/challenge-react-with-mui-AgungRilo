// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, Box, Divider, List, ListItem, Typography } from "@mui/material";
import React, { Fragment } from "react";

const style = {
  width: "100%",
  maxWidth: 600,
  bgcolor: "#DBF6F0",
  padding: "10px",
};

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      <List sx={style} component="nav" aria-label="mailbox folders">
        {data && data.map((item, index) => (
          <Fragment key={index + 1}>
            <ListItem>
              <Avatar src={item.photo} alt={item.photo} sx={{ width: 80, height: 80 }} />
              <Box sx={{ marginLeft: "20px" }}>
                <Typography sx={{ fontWeight: "bold" }}>{item.name}</Typography>
                <Typography>{item.email}</Typography>
                <Typography>{item.phone}</Typography>
              </Box>
            </ListItem>
            <Divider light />
          </Fragment>
        ))}
      </List>
    </>
  );
};

export default Contact;
