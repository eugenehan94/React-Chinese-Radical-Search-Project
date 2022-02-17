import React, { useEffect } from "react";
// Material UI imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// Material UI styled imports
import { Main, ContentPaper, ContentTitle } from "../styles/DashboardContent";

// Redux toolkit imports
import { useSelector, useDispatch } from "react-redux";

const DashboardContent = () => {
  const reducer = useSelector((state) => state.character);
  const {
    radicalSelected,
    chineseCharactersList,
    chineseCharacterMeaning,
    open
  } = reducer;
  const dispatch = useDispatch();

  return (
    <Main open={open}>
      <Toolbar />
      <ContentPaper elevation={4}>
        <ContentTitle variant="h2">Radical {radicalSelected}</ContentTitle>
        <Divider />
        {chineseCharactersList.map((character, index) => (
          <Box key={index} sx={{ mt: 3 }}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              {character.string}
            </Typography>
            {chineseCharacterMeaning.map((meaning, i) => (
              <Box key={i}>
                <Typography paragraph>
                  {index === i ? meaning.kDefinition : null}
                </Typography>
              </Box>
            ))}
            <Divider />
          </Box>
        ))}
      </ContentPaper>

      <Grid container justifyContent="center" sx={{ pt: 1 }}>
        <Grid item>
          <Typography>Developed by: </Typography>
        </Grid>
      </Grid>
    </Main>
  );
};

export default DashboardContent;
