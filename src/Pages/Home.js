import React from "react";

// Material UI imports
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { MyComponent } from "../styles/Home";
import {Link} from "react-router-dom";
const Home = () => {
  return (
    <>
      <Typography align="center">
        The Chinese Radical lookup you always wanted
      </Typography>
      <Typography align="center">
        A Chinese radical is a graphical component of a Chinese character under
        which the character is traditionally listed in a Chinese dictionary.
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to="/dashboard"
        endIcon={<ChevronRightIcon/>}
      >
        Get started
      </Button>
      {/* <MyComponent>TESTING THE STYLED COMPONENT</MyComponent> */}
    </>
  );
};
export default Home;
