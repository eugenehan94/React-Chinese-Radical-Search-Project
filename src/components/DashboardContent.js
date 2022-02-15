import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import {Main} from "../styles/DashboardContent"

import axios from "axios";
// Redux toolkit imports
import { useSelector, useDispatch } from "react-redux";
import {
  fetchChineseCharacters,
  fetchChineseCharactersMeaning,
} from "../redux/slices/characterSlice";

const DashboardContent = () => {
  const reducer = useSelector((state) => state.character);
  const {
    radicalSelected,
    chineseCharactersLoading,
    chineseCharactersList,
    chineseCharacterMeaning,
    chineseCharacterMeaningLoading,
    open
  } = reducer;
  const dispatch = useDispatch();
  //https://stackoverflow.com/questions/39127989/create-an-object-from-an-array-of-keys-and-an-array-of-values
  useEffect(() => {
    const fetchChineseChar = async (selected) => {
      const chineseChar = axios.get(
        `http://ccdb.hemiola.com/characters/radicals/${selected}?filter=gb`
      );
      const chineseCharDefinition = axios.get(
        `http://ccdb.hemiola.com/characters/radicals/${selected}?filter=gb&fields=kDefinition`
      );
      await axios.all([chineseChar, chineseCharDefinition]).then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          dispatch(fetchChineseCharacters(responseOne.data));
          dispatch(fetchChineseCharactersMeaning(responseTwo.data));
        })
      );
    };
    fetchChineseChar(radicalSelected);
  }, [radicalSelected, dispatch]);
  if (chineseCharactersLoading || chineseCharacterMeaningLoading) return <></>;
  return (
    <Main open={open} sx={{ p: 4, width: "100%" }}>
      <Toolbar />
      <Paper elevation={4} sx={{ p: 3 }}>
        <Typography variant="h2">Radical {radicalSelected}</Typography>
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
      </Paper>

      <Grid container justifyContent="center" sx={{pt: 1}}>
        <Grid item>
          <Typography>Developed by: </Typography>
        </Grid>
      </Grid>
    </Main>
  );
};

export default DashboardContent;
