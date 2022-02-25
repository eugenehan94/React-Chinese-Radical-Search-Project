import React from "react";

// Material UI imports
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import { MyComponent } from "../styles/Home";
import { HomeBackgroundImage } from "../styles/Home";
import { Link } from "react-router-dom";

import HomeBackground from "../images/desktopBirdsEyeView.jpg";

const Home = () => {
  return (
    <>
      <HomeBackgroundImage
        component="img"
        alt="Office desk"
        src={HomeBackground}
      />
      <Container sx={{display:"flex", alignItems:"center", pt:15}}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant="h2">
              The Chinese Radical lookup you always wanted
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" gutterBottom>
              A Chinese radical is a graphical component of a Chinese character
              under which the character is traditionally listed in a Chinese
              dictionary.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              component={Link}
              to="/dashboard"
              endIcon={<ChevronRightIcon />}
              size="large"
            >
              Get started
            </Button>
          </Grid>
          {/* <MyComponent>TESTING THE STYLED COMPONENT</MyComponent> */}
        </Grid>
      </Container>
    </>
  );
};
export default Home;
