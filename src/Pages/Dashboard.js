import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import DashboardLeftSidebar from "../components/DashboardLeftSidebar";
import DashboardAppBar from "../components/DashboardAppBar";
import DashboardContent from "../components/DashboardContent";

// Use redux toolkit
import { useSelector, useDispatch } from "react-redux";
// Redux actions
import {
  fetchRadicals,
  fetchChineseCharacters,
  fetchChineseCharactersMeaning,
} from "../redux/slices/characterSlice";

import axios from "axios";
const Dashboard = () => {
  const radical = useSelector((state) => state.character);
  const {
    radicalLoading,
    radicalSelected,
    chineseCharactersLoading,
    chineseCharacterMeaningLoading,
  } = radical;
  const dispatch = useDispatch();
  //https://stackoverflow.com/questions/39127989/create-an-object-from-an-array-of-keys-and-an-array-of-values
  useEffect(() => {
    const fetchRadical = async (selected) => {
      const fetchRad = axios.get("http://ccdb.hemiola.com/characters/radicals");
      const chineseChar = axios.get(
        `http://ccdb.hemiola.com/characters/radicals/${selected}?filter=gb`
      );
      const chineseCharDefinition = axios.get(
        `http://ccdb.hemiola.com/characters/radicals/${selected}?filter=gb&fields=kDefinition`
      );

      await axios.all([fetchRad, chineseChar, chineseCharDefinition]).then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          // converted array to Set to remove duplicates
          const uniqueSet = new Set(responseOne.data.map((o) => o.radical));
          // converted Set back to array
          const uniqueArray = Array.from(uniqueSet);
          const responseTwo = responses[1];
          const responseThree = responses[2];
          dispatch(fetchRadicals(uniqueArray));
          dispatch(fetchChineseCharacters(responseTwo.data));
          dispatch(fetchChineseCharactersMeaning(responseThree.data));
        })
      );
    };
    fetchRadical(radicalSelected);
  }, [dispatch, radicalSelected]);

  if (
    radicalLoading ||
    chineseCharactersLoading ||
    chineseCharacterMeaningLoading
  ) {
    return <></>;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <DashboardAppBar />
      <DashboardLeftSidebar />
      <DashboardContent />
    </Box>
  );
};

export default Dashboard;