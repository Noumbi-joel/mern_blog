import React from "react";
import moment from "moment";

import {
  Avatar,
  Button,
  ButtonGroup,
  CardHeader,
  Typography,
} from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { red } from "@mui/material/colors";
import colors from "../../utils/Colors";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const ContactCard = ({
  contact,
  dispatch,
  updateContact,
  deleteContact,
  id,
}) => {
  return (
    <>
      <Card sx={{ minWidth: 275 }} style={{ marginTop: "20px" }}>
        <CardHeader
          avatar={
            <Avatar
              style={{ fontFamily: "Poppins" }}
              sx={{ bgcolor: red[500] }}
              aria-label="user"
            >
              {contact.name[0]}
            </Avatar>
          }
          action={
            contact.approved ? <DoneOutlinedIcon color="success" /> : <CloseOutlinedIcon />
          }
          title={contact.name}
          subheader={moment(contact.createdAt).fromNow()}
        />
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            fontFamily="Poppins"
            color={contact.check === "on" || contact.check === "true" ? "red" : colors.black}
            variant="h6"
            gutterBottom
          >
            {contact.email}
          </Typography>
          <Typography paragraph fontFamily="Poppins" component="div">
            {contact.message}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Mots clés
          </Typography>
        </CardContent>
        {contact.approved ? <></>: <CardActions>
          <ButtonGroup aria-label="medium secondary button group">
            <Button
              key="one"
              onClick={() => dispatch(updateContact(id, contact))}
            >
              <DoneOutlinedIcon color="success" /> Approve
            </Button>

            <Button key="two" onClick={() => dispatch(deleteContact(id))}>
              <CloseOutlinedIcon color="error" /> Reject
            </Button>
          </ButtonGroup>
        </CardActions>}
      </Card>
    </>
  );
};

export default ContactCard;
