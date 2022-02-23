import React, { useEffect } from "react";
// Material UI imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
// Material UI styled imports
import {
  Main,
  ContentPaper,
  ContentTitle,
  ChineseCharacters,
  ChineseCharactersMeaning,
} from "../styles/DashboardContent";

// Redux toolkit imports
import { useSelector, useDispatch } from "react-redux";

const DashboardContent = () => {
  const reducer = useSelector((state) => state.character);
  const {
    radicalSelected,
    chineseCharactersList,
    chineseCharacterMeaning,
    open,
    chineseCharactersLoading,
    chineseCharacterMeaningLoading,
  } = reducer;
  const dispatch = useDispatch();

  if (chineseCharactersLoading || chineseCharacterMeaningLoading) {
    return (
      <Main open={open}>
        <Toolbar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
          }}
        >
          LOADING...
        </Box>
      </Main>
    );
  }
  return (
    <Main open={open}>
      <Toolbar />
      <ContentPaper>
        <ContentTitle variant="h2">Radical {radicalSelected}</ContentTitle>
        <Divider />
        {chineseCharactersList.map((character, index) => (
          <Box key={index} sx={{ mt: 3 }}>
            <ChineseCharacters variant="h3">
              {character.string}
            </ChineseCharacters>
            {chineseCharacterMeaning.map((meaning, i) => (
              <Box key={i}>
                <ChineseCharactersMeaning paragraph>
                  {index === i ? meaning.kDefinition : null}
                </ChineseCharactersMeaning>
              </Box>
            ))}
            <Divider />
          </Box>
        ))}
      </ContentPaper>

      <Grid container justifyContent="center" sx={{ pt: 1 }}>
        <Grid item>
          <Typography>
            Developed by:{" "}
            <Link
              href="https://eugenehan.netlify.app/"
              target="_blank"
              rel="noreferrer"
              color="inherit"
              underline="none"
            >
              Eugene Han
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Main>
  );
};

export default DashboardContent;
